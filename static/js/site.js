(function () {
  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    var themeValue = document.getElementById("theme-toggle-value");
    if (themeValue) {
      themeValue.textContent = theme === "dark" ? "Dark" : "Light";
    }
  }

  function initThemeToggle() {
    var toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    setTheme(getCurrentTheme());

    toggle.addEventListener("click", function () {
      var nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  }

  document.addEventListener("DOMContentLoaded", initThemeToggle);
})();
