/* ============================================================
   Benjamin Barron — Portfolio JS
   ============================================================ */

(function () {
  'use strict';

  /* --- Nav: scroll state --- */
  const nav = document.getElementById('site-nav');
  function updateNavScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', updateNavScroll, { passive: true });
  updateNavScroll();

  /* --- Hero parallax --- */
  const heroBg = document.getElementById('hero-bg');
  if (heroBg) {
    // Disable on iOS/Android where fixed-position parallax is janky
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    if (!prefersReducedMotion && !isTouchDevice) {
      function updateParallax() {
        // Move bg at 40% of scroll speed — subtle depth without dizziness
        heroBg.style.transform = 'translateY(' + (window.scrollY * 0.4) + 'px)';
      }
      window.addEventListener('scroll', updateParallax, { passive: true });
      updateParallax();
    }
  }

  /* --- Hamburger: mobile nav toggle --- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav when a link inside it is clicked
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* --- Experiences dropdown: JS toggle for touch / mobile --- */
  const dropdownBtn  = document.getElementById('exp-dropdown-btn');
  const dropdownMenu = document.getElementById('exp-dropdown');

  function closeDropdown() {
    dropdownMenu.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
  }

  dropdownBtn.addEventListener('click', function (e) {
    // On mobile (nav is vertical), always use JS toggle.
    // On desktop, CSS :hover handles it — but JS can still assist for keyboard / click.
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.toggle('open');
    dropdownBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      closeDropdown();
    }
  });

  // Close dropdown when a menu item is chosen
  dropdownMenu.addEventListener('click', function (e) {
    if (e.target.classList.contains('dropdown-item')) {
      closeDropdown();
      // Also close mobile nav if open
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Keyboard: close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  /* --- Headshot: show placeholder when image fails to load --- */
  const headshotImg = document.querySelector('.headshot-img');
  const headshotPlaceholder = document.querySelector('.headshot-placeholder');
  if (headshotImg && headshotPlaceholder) {
    headshotImg.addEventListener('error', function () {
      headshotImg.style.display = 'none';
      headshotPlaceholder.style.display = 'flex';
    });
    headshotImg.addEventListener('load', function () {
      headshotPlaceholder.style.display = 'none';
    });
    // If already broken on page load
    if (!headshotImg.naturalWidth) {
      headshotImg.style.display = 'none';
      headshotPlaceholder.style.display = 'flex';
    }
  }

  /* --- Fade-up animations via IntersectionObserver --- */
  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

})();
