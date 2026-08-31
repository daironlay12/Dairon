/* D-Lay Prestige Solutions — small progressive-enhancement scripts.
   The site works without JS; this just improves the experience. */
(function () {
  "use strict";

  // Current year in the footer.
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Mobile navigation toggle.
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after a link is tapped.
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Contact form: client-side validation + friendly confirmation.
  // NOTE: This does not send anything yet. Wire it to an email service,
  // form backend (e.g. Formspree), or your own endpoint to receive quotes.
  var form = document.getElementById("quote-form");
  var status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        status.textContent = "Please add your name, a valid email, and a short message.";
        status.classList.add("err");
        return;
      }

      status.textContent =
        "Thanks, " + name + "! Your request has been received. We'll be in touch shortly.";
      status.classList.add("ok");
      form.reset();
    });
  }
})();
