(function () {
  const root = document.documentElement;
  const KEY = "fi-theme";
  const btn = document.getElementById("themeToggle");

  const stored = localStorage.getItem(KEY);
  if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.setAttribute("data-theme", "dark");
  }

  if (btn) {
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      if (next === "dark") root.setAttribute("data-theme", "dark");
      else root.removeAttribute("data-theme");
      localStorage.setItem(KEY, next);
    });
  }
})();
