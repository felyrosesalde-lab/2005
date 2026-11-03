/* =========================================================
   FELY ROSE SALDE PORTFOLIO
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      const isOpen = navLinks.classList.contains("active");

      menuToggle.setAttribute("aria-expanded", isOpen);

      // Change menu icon
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close menu when clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {
      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });

  }


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const yearElements = document.querySelectorAll(".current-year");

  yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });


  /* =======================================================
     SCROLL REVEAL
  ======================================================= */

  const revealElements = document.querySelectorAll(
    ".section, .project-card, .info-card, .skill-card, .education-card, .project-detail, .goals-box, .contact-card"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });

  }


  /* =======================================================
     ACTIVE NAVIGATION LINK
  ======================================================= */

  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  if (sections.length && navigationLinks.length) {

    const sectionObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            navigationLinks.forEach(link => {
              link.classList.remove("active");
            });

            const activeLink = document.querySelector(
              `.nav-links a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
              activeLink.classList.add("active");
            }

          }

        });

      },
      {
        rootMargin: "-30% 0px -60% 0px"
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }


  /* =======================================================
     CONTACT BUTTON
  ======================================================= */

  const contactLinks = document.querySelectorAll(
    'a[href^="mailto:"]'
  );

  contactLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Opening email:", link.href);
    });
  });


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }

    });

    backToTop.addEventListener("click", event => {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }

});