document.addEventListener("DOMContentLoaded", () => {
  const routes = {
    "/": "main.js",
    "/login": "login.js",
    "/about": "about.js",
    "/signup": "signup.js",
  };

  function loadPage(path) {
    const scriptPath = routes[path] || null;
    if (scriptPath) {
      fetchScript(scriptPath);
    } else {
      document.getElementById("app").innerHTML =
        "<h1>404 - Page Not Found</h1>";
    }
  }

  function fetchScript(scriptPath) {
    const script = document.createElement("script");
    script.src = scriptPath;
    script.type = "module";
    document.getElementById("app").innerHTML = "";
    document.getElementById("app").appendChild(script);
  }

  function onNavClick(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    history.pushState({}, "", path);
    loadPage(path);
  }

  document.querySelectorAll("a[data-link]").forEach((link) => {
    link.addEventListener("click", onNavClick);
  });

  window.onpopstate = () => {
    loadPage(window.location.pathname);
  };

  loadPage(window.location.pathname);
});
