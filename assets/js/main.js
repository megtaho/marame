// Met aria-current="page" sur le lien correspondant à la page courante
(() => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('nav.menu a[data-page]').forEach(a => {
    if (a.getAttribute("data-page") === path) a.setAttribute("aria-current", "page");
  });
})();
