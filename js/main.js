/* =========================================================
   MINOKER — základní interaktivita
   Navigace, akordeon (FAQ), lightbox galerie,
   reveal animace při scrollu, cookie lišta.
   ========================================================= */
(() => {
  "use strict";

  /* ---------- Hlavička: stín/pozadí při scrollu ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Wordmark v hlavičce se objeví až po opuštění hero sekce, ať
    // v prvním viewportu zůstává jediným dominantním logem to v hero.
    const hero = document.querySelector(".hero");
    if (hero && "IntersectionObserver" in window) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => header.classList.toggle("is-past-hero", !entry.isIntersecting),
        { threshold: 0 }
      );
      heroObserver.observe(hero);
    } else {
      // Stránky bez hero sekce (Aktuality, 404) wordmark zobrazí rovnou.
      header.classList.add("is-past-hero");
    }
  }

  /* ---------- Hero: parallax mlhy a mraků (fotka i postavy zůstávají statické) ---------- */
  const parallaxLayers = document.querySelectorAll(".hero-parallax");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (parallaxLayers.length && !prefersReducedMotion) {
    const MAX_SHIFT = 40; // px
    let ticking = false;

    const updateParallax = () => {
      const shift = Math.min(window.scrollY, 300);
      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallaxSpeed) || 0.08;
        const y = Math.min(shift * speed, MAX_SHIFT);
        layer.style.transform = `translateY(${y}px)`;
      });
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ---------- Mobilní navigace ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  const navBackdrop = document.querySelector(".nav-backdrop");

  const closeNav = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    navBackdrop?.classList.remove("is-visible");
    document.body.style.overflow = "";
  };

  const openNav = () => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    navBackdrop?.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  };

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeNav() : openNav();
    });

    navBackdrop?.addEventListener("click", closeNav);

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }

  /* ---------- Akordeon (FAQ) ---------- */
  document.querySelectorAll(".faq-question").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const panel = trigger.closest("[data-accordion-item]")?.querySelector(".faq-answer");
      if (!panel) return;
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.dataset.open = String(!isOpen);
    });
  });

  /* ---------- Lightbox galerie ---------- */
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImg = lightbox?.querySelector("img");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");
  let lastFocused = null;

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lastFocused = document.activeElement;
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) openLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox?.classList.contains("is-open")) closeLightbox();
  });

  /* ---------- Reveal animace při scrollu ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Cookie lišta ---------- */
  const cookieBar = document.querySelector("[data-cookie-bar]");
  const COOKIE_KEY = "minoker-cookie-consent";

  if (cookieBar) {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      window.setTimeout(() => cookieBar.classList.add("is-visible"), 600);
    }

    const hideCookieBar = (value) => {
      localStorage.setItem(COOKIE_KEY, value);
      cookieBar.classList.remove("is-visible");
    };

    cookieBar.querySelector("[data-cookie-accept]")?.addEventListener("click", () => hideCookieBar("accepted"));
    cookieBar.querySelector("[data-cookie-decline]")?.addEventListener("click", () => hideCookieBar("declined"));
  }
})();
