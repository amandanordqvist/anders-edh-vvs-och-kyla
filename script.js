/* Anders Edh VVS & Kyla AB – sidskript */
(function () {
  "use strict";

  // TODO: Ange företagets riktiga e-postadress här innan sidan publiceras.
  var EMAIL = "info@example.se";

  // E-postlänkar
  document.querySelectorAll(".js-email").forEach(function (a) {
    a.href = "mailto:" + EMAIL;
  });

  // Årtal i sidfoten
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobilmeny
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Öppna meny");
  }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Stäng meny" : "Öppna meny");
  });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeNav); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  // Skugga på header vid scroll
  var header = document.querySelector(".header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Tona in sektioner
  if ("IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".section__head, .card, .step, .feature, .shield, .about__content, .gallery__item, .contact__info, .form");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -60px 0px" });
    targets.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  // Kontaktformulär → öppnar e-postprogram med ifyllt meddelande
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      var ok = field.value.trim() !== "";
      field.classList.toggle("is-invalid", !ok);
      field.setAttribute("aria-invalid", String(!ok));
      if (!ok && valid) { field.focus(); valid = false; }
    });
    var note = form.querySelector(".form__note");
    if (!valid) {
      note.textContent = "Fyll i namn och telefonnummer så att vi kan nå dig.";
      return;
    }
    var d = new FormData(form);
    var subject = "Förfrågan via hemsidan: " + d.get("arende");
    var body =
      "Namn: " + d.get("namn") + "\n" +
      "Telefon: " + d.get("telefon") + "\n" +
      "Ort: " + (d.get("ort") || "-") + "\n" +
      "Ärende: " + d.get("arende") + "\n\n" +
      (d.get("meddelande") || "");
    window.location.href = "mailto:" + EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    note.textContent = "Tack! Ditt e-postprogram öppnas nu – tryck på skicka där.";
  });
})();
