/* ===================================================
   AI-assisted RSE Course — navigace a sledování postupu
   Jeden zdroj pravdy o DOPORUČENÉM pořadí lekcí (A→B→C→D).
   Postup se ukládá do localStorage prohlížeče.
   =================================================== */
(function () {
  "use strict";

  // Kanonická doporučená dráha (pořadí jako na rozcestníku), NE pořadí souborů.
  var COURSE = [
    { code: "A3", file: "0001-no-silver-bullet.html",           title: "No Silver Bullet" },
    { code: "A1", file: "0003-tdd.html",                         title: "TDD" },
    { code: "A2", file: "0015-refactoring.html",                 title: "Refactoring" },
    { code: "A4", file: "0016-domain-driven-design.html",        title: "Domain-Driven Design" },
    { code: "A5", file: "0017-agile-manifesto.html",             title: "Agile Manifesto" },
    { code: "B1", file: "0002-harness-vs-guardrails.html",       title: "Harness vs. Guardrails" },
    { code: "B2", file: "0004-ramec-peti-otazek.html",           title: "Rámec pěti otázek" },
    { code: "B3", file: "0005-memory-a-claude-md.html",          title: "Memory a CLAUDE.md" },
    { code: "B4", file: "0006-skills-a-slash-commands.html",     title: "Skills a slash commands" },
    { code: "B5", file: "0007-hooks.html",                       title: "Hooks" },
    { code: "B6", file: "0008-mcp.html",                         title: "MCP" },
    { code: "B7", file: "0009-subagents.html",                   title: "Subagenti" },
    { code: "B8", file: "0023-vibe-vs-ai-assisted.html",         title: "Vibe vs. AI-assisted" },
    { code: "C1", file: "0013-fair4rs.html",                     title: "FAIR4RS" },
    { code: "C2", file: "0012-reprodukovatelnost.html",          title: "Reprodukovatelnost" },
    { code: "C3", file: "0010-deskilling.html",                  title: "Deskilling" },
    { code: "C4", file: "0011-trust-gap.html",                   title: "Trust gap" },
    { code: "C5", file: "0014-vedecky-vs-produkcni-sw.html",     title: "Vědecký vs. produkční SW" },
    { code: "D1", file: "0018-context-engineering.html",         title: "Context engineering" },
    { code: "D2", file: "0019-verifikace-code-review.html",      title: "Verifikace a code review" },
    { code: "D3", file: "0020-bezpecnost-citliva-data.html",     title: "Bezpečnost a citlivá data" },
    { code: "D4", file: "0021-licence-provenance-autorstvi.html", title: "Licence, provenance a autorství" },
    { code: "D5", file: "0022-zavadeni-v-tymu.html",             title: "Zavádění v týmu" }
  ];

  var KEY = "airse_done_v1";

  function loadDone() {
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); }
    catch (e) { return new Set(); }
  }
  function saveDone(set) {
    try { localStorage.setItem(KEY, JSON.stringify(Array.prototype.slice.call(set))); }
    catch (e) { /* ignore */ }
  }

  var done = loadDone();
  var curFile = decodeURIComponent(location.pathname.split("/").pop() || "");
  var idx = -1;
  for (var i = 0; i < COURSE.length; i++) {
    if (COURSE[i].file === curFile) { idx = i; break; }
  }
  var onLesson = idx !== -1;
  var onIndex = !onLesson && (curFile === "" || curFile === "index.html");

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  /* ---------------- LEKCE ---------------- */
  function initLesson() {
    var bar = document.querySelector(".progress-bar");

    function renderDots() {
      if (!bar) return;
      bar.innerHTML = "";
      COURSE.forEach(function (l, i) {
        var a = document.createElement("a");
        a.className = "progress-dot" +
          (done.has(l.file) ? " done" : "") +
          (i === idx ? " current" : "");
        a.href = l.file;
        a.title = l.code + " — " + l.title + (done.has(l.file) ? "  ✓ hotovo" : "");
        bar.appendChild(a);
      });
    }

    // Popisek postupu pod tečkami
    var label = document.createElement("p");
    label.className = "progress-label";
    function renderLabel() {
      label.innerHTML = "Lekce <strong>" + (idx + 1) + " / " + COURSE.length +
        "</strong> · " + COURSE[idx].code + " · hotovo <strong>" +
        countDone() + " / " + COURSE.length + "</strong>";
    }
    function countDone() {
      var n = 0; COURSE.forEach(function (l) { if (done.has(l.file)) n++; }); return n;
    }

    renderDots();
    renderLabel();
    if (bar && bar.parentNode) bar.parentNode.insertBefore(label, bar.nextSibling);

    // Spodní navigace: ← předchozí | označit hotové | další →
    var nav = document.querySelector(".lesson-nav");
    if (nav) {
      nav.classList.add("course-nav");
      var prev = idx > 0 ? COURSE[idx - 1] : null;
      var next = idx < COURSE.length - 1 ? COURSE[idx + 1] : null;

      var prevHtml = prev
        ? '<span class="nav-label">Předchozí</span><a href="' + prev.file + '">← ' + prev.code + " — " + prev.title + "</a>"
        : '<span class="nav-label">Rozcestník</span><a href="../index.html">← Přehled kurzu</a>';
      var nextHtml = next
        ? '<span class="nav-label">Další</span><a href="' + next.file + '">' + next.code + " — " + next.title + " →</a>"
        : '<span class="nav-label">Konec</span><a href="../index.html">🎓 Přehled kurzu →</a>';

      nav.innerHTML =
        '<div class="nav-cell nav-prev">' + prevHtml + "</div>" +
        '<div class="nav-cell nav-mark"><button type="button" class="mark-btn"></button></div>' +
        '<div class="nav-cell nav-next">' + nextHtml + "</div>";

      var btn = nav.querySelector(".mark-btn");
      function renderBtn() {
        var d = done.has(curFile);
        btn.textContent = d ? "✓ Hotovo" : "Označit jako hotové";
        btn.classList.toggle("is-done", d);
      }
      function refresh() { renderBtn(); renderDots(); renderLabel(); }
      renderBtn();
      btn.addEventListener("click", function () {
        if (done.has(curFile)) done.delete(curFile); else done.add(curFile);
        saveDone(done); refresh();
      });

      // Auto-označení po dokončení kvízu (až se ukáže výsledek)
      var score = document.getElementById("quiz-score");
      if (score) {
        var obs = new MutationObserver(function () {
          if (getComputedStyle(score).display !== "none" && !done.has(curFile)) {
            done.add(curFile); saveDone(done); refresh();
          }
        });
        obs.observe(score, { attributes: true, attributeFilter: ["style"] });
      }
    }
  }

  /* ---------------- ROZCESTNÍK ---------------- */
  function initIndex() {
    // Označ karty hotových lekcí
    var cards = document.querySelectorAll(".lcard");
    cards.forEach(function (card) {
      var href = card.getAttribute("href") || "";
      var f = href.split("/").pop();
      var check = document.createElement("span");
      check.className = "lc-check";
      check.textContent = "✓";
      check.title = "Hotovo";
      card.appendChild(check);
      if (done.has(f)) card.classList.add("done");
    });

    function countDone() {
      var n = 0; COURSE.forEach(function (l) { if (done.has(l.file)) n++; }); return n;
    }
    function firstUndone() {
      for (var i = 0; i < COURSE.length; i++) if (!done.has(COURSE[i].file)) return COURSE[i];
      return null;
    }

    var panel = document.createElement("div");
    panel.id = "course-progress";

    function render() {
      var n = countDone();
      var nu = firstUndone();
      var btnHtml;
      if (n === 0) {
        btnHtml = '<a class="continue-btn" href="lessons/' + COURSE[0].file + '">Začít kurz →</a>';
      } else if (nu) {
        btnHtml = '<a class="continue-btn" href="lessons/' + nu.file + '">Pokračovat: ' + nu.code + " →</a>";
      } else {
        btnHtml = '<a class="continue-btn" href="lessons/' + COURSE[0].file + '">🎓 Dokončeno — začít znovu →</a>';
      }
      var segs = "";
      COURSE.forEach(function (l) {
        segs += '<div class="ip-seg' + (done.has(l.file) ? " done" : "") + '" title="' + l.code + " — " + l.title + '"></div>';
      });
      panel.innerHTML =
        '<div class="ip-head">' +
          '<span class="ip-count">Tvůj postup: <strong>' + n + " / " + COURSE.length + "</strong> lekcí hotovo" +
            (n > 0 ? ' &nbsp;<button type="button" class="reset-link">vynulovat</button>' : "") +
          "</span>" +
          btnHtml +
        "</div>" +
        '<div class="ip-bar">' + segs + "</div>";

      var reset = panel.querySelector(".reset-link");
      if (reset) reset.addEventListener("click", function () {
        if (confirm("Vynulovat postup? Smaže se, které lekce máš označené jako hotové (jen v tomto prohlížeči).")) {
          done = new Set(); saveDone(done);
          cards.forEach(function (c) { c.classList.remove("done"); });
          render();
        }
      });
    }
    render();

    var header = document.querySelector("header.lesson-header");
    if (header && header.parentNode) header.insertAdjacentElement("afterend", panel);
    else document.querySelector(".content").insertBefore(panel, document.querySelector(".content").firstChild);
  }

  ready(function () {
    if (onLesson) initLesson();
    else if (onIndex) initIndex();
  });
})();
