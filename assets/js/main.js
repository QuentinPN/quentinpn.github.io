// Progressive enhancement only: the page is complete without this file.
(function () {
  "use strict";

  // Career lanes: the static HTML is drawn up to November 2026.
  // Recompute positions so the current role and the axis keep up with today's date.
  var grid = document.querySelector(".lanes__grid");
  if (grid) {
    var monthIndex = function (value) {
      if (value === "now") {
        var d = new Date();
        return d.getFullYear() * 12 + d.getMonth() + d.getDate() / 31;
      }
      var parts = value.split("-");
      return Number(parts[0]) * 12 + Number(parts[1]) - 1;
    };
    var start = monthIndex(grid.getAttribute("data-axis-from"));
    var firstYear = Math.floor(start / 12);
    var lastYear = Math.max(new Date().getFullYear(), 2026);
    var end = (lastYear + 1) * 12;
    var span = end - start;
    var pct = function (n) { return (n / span * 100).toFixed(3) + "%"; };

    grid.querySelectorAll(".bar").forEach(function (bar) {
      var from = monthIndex(bar.getAttribute("data-from")) - start;
      var to = monthIndex(bar.getAttribute("data-to")) - start;
      bar.style.setProperty("--x", pct(from));
      bar.style.setProperty("--w", pct(Math.max(to - from, 0.5)));
    });

    var axis = grid.querySelector(".axis");
    if (axis && lastYear > 2026) {
      axis.textContent = "";
      for (var y = firstYear; y <= lastYear; y++) {
        var tick = document.createElement("span");
        tick.textContent = String(y);
        tick.style.setProperty("--x", pct(y * 12 - start));
        axis.appendChild(tick);
      }
    }
  }

  // Mark the section currently in view in the top navigation.
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav a[href^='#']"));
  if (!("IntersectionObserver" in window) || links.length === 0) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = byId[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (a) { a.removeAttribute("aria-current"); });
        link.setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
