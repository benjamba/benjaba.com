---
layout: default
title: Home
---

<!-- ===== HERO ===== -->
<section class="hero" aria-label="Introduction">
  <!-- Parallax background -->
  <div class="hero-bg" id="hero-bg" aria-hidden="true"></div>

  <!-- Centered card -->
  <div class="hero-card fade-up">

    <!-- Top: #BFCFE6 block with headshot -->
    <div class="hero-card__photo">
      <div class="headshot-frame">
        <img src="/assets/images/headshot.jpg" alt="Benjamin Barron professional headshot" class="headshot-img" />
        <!-- Placeholder silhouette shown until a real photo is added -->
        <div class="headshot-placeholder" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="20" r="11" fill="rgba(255,255,255,0.5)"/>
            <path d="M6 50c0-12.15 9.85-22 22-22s22 9.85 22 22" fill="rgba(255,255,255,0.5)"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Bottom: white block with text -->
    <div class="hero-card__text">
      <p class="hero-eyebrow">Biomedical Engineering · University of Michigan</p>
      <h1 class="hero-heading">Hello, I am Benjamin</h1>
      <p class="hero-sub">
        I am a Biomedical Engineering student at the University of Michigan – Ann Arbor.<br>
        I am passionate about building at the intersection of engineering and clinical medicine.<br>
        Explore my research and experiences here!
      </p>
      <div class="hero-ctas">
        <a href="/resume.pdf" class="btn btn-primary" target="_blank" rel="noreferrer noopener">Resume</a>
        <a href="https://linkedin.com/in/placeholder" class="btn btn-outline" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        <a href="/portfolio.pdf" class="btn btn-outline" target="_blank" rel="noreferrer noopener">Portfolio (PDF)</a>
      </div>
    </div>

  </div>

  <a href="#experiences" class="scroll-arrow" aria-label="Scroll to experiences">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</section>

<!-- ===== EXPERIENCES ===== -->
<section class="section experiences-section" id="experiences" aria-labelledby="experiences-heading">
  <div class="section-inner">
    <div class="section-header fade-up">
      <h2 class="section-heading" id="experiences-heading">Research &amp; Experiences</h2>
      <p class="section-intro">I have research and project experience spanning structural biology, epidemiological modeling, and medical device development.</p>
    </div>

    <div class="project-grid">

      <!-- Card 1 -->
      <article class="project-card fade-up" id="structural-biology">
        <div class="project-card__image project-card__image--bio" role="img" aria-label="Structural Biology Research placeholder image"></div>
        <div class="project-card__body">
          <h3 class="project-card__title">Structural Biology Research</h3>
          <p class="project-card__desc">Research assistant at Scripps Research Institute. Performed cryo-electron microscopy analysis of tuberculin complexes and vinculin purification via FPLC, contributing to structural characterization of key biological targets.</p>
          <a href="#" class="project-card__link">Learn more →</a>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="project-card fade-up" id="dengue-modeling">
        <div class="project-card__image project-card__image--epi" role="img" aria-label="Epidemiological Modeling placeholder image"></div>
        <div class="project-card__body">
          <h3 class="project-card__title">Dengue Transmission Modeling</h3>
          <p class="project-card__desc">Developed mechanistic ODE and universal differential equation models for dengue fever transmission in Julia, including Sobol sensitivity analysis and next-generation matrix derivation for R₀.</p>
          <a href="#" class="project-card__link">Learn more →</a>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="project-card fade-up" id="medical-device">
        <div class="project-card__image project-card__image--device" role="img" aria-label="Medical Device Development placeholder image"></div>
        <div class="project-card__body">
          <h3 class="project-card__title">Medical Device Development</h3>
          <p class="project-card__desc">Designed and prototyped peripheral IV catheter securement devices (J-Loop clip, insertion-site sleeves) and cast pressure monitoring systems using force-sensitive resistors, including MRI safety testing and FDA regulatory pathway analysis.</p>
          <a href="#" class="project-card__link">Learn more →</a>
        </div>
      </article>

      <!-- Card 4 -->
      <article class="project-card fade-up" id="barronmd">
        <div class="project-card__image project-card__image--youtube" role="img" aria-label="BarronMD YouTube placeholder image"></div>
        <div class="project-card__body">
          <h3 class="project-card__title">BarronMD — YouTube</h3>
          <p class="project-card__desc">Producer and Creative Director of a YouTube channel creating content at the intersection of medicine, engineering, and storytelling.</p>
          <a href="#" class="project-card__link">Learn more →</a>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- ===== COURSEWORK ===== -->
<section class="section coursework-section" id="coursework" aria-labelledby="coursework-heading">
  <div class="section-inner">
    <div class="section-header fade-up">
      <h2 class="section-heading" id="coursework-heading">Advanced Coursework</h2>
    </div>

    <div class="course-grid">

      <article class="course-tile fade-up">
        <span class="course-number">BME 474</span>
        <span class="course-title">Biomedical Engineering Lab</span>
        <span class="course-instructor">Instructor TBD</span>
      </article>

      <article class="course-tile fade-up">
        <span class="course-number">Physiol 541</span>
        <span class="course-title">Reproductive Physiology <span class="course-tag">Graduate</span></span>
        <span class="course-instructor">Instructor TBD</span>
      </article>

      <article class="course-tile fade-up">
        <span class="course-number">Math 564</span>
        <span class="course-title">Math and Music</span>
        <span class="course-instructor">Instructor TBD</span>
      </article>

    </div>
  </div>
</section>

<!-- ===== CONTACT / FOOTER ===== -->
<footer class="section contact-section" id="contact" aria-labelledby="contact-heading">
  <div class="section-inner contact-inner">

    <div class="contact-left fade-up">
      <h2 class="section-heading" id="contact-heading">Let's connect!</h2>
      <ul class="contact-list">
        <li>
          <span class="contact-label">LinkedIn</span>
          <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noreferrer noopener">linkedin.com/in/placeholder</a>
        </li>
        <li>
          <span class="contact-label">Email</span>
          <a href="mailto:placeholder@umich.edu">placeholder@umich.edu</a>
        </li>
        <li>
          <span class="contact-label">Location</span>
          <span>Ann Arbor, MI, USA</span>
        </li>
      </ul>
    </div>

    <div class="contact-right fade-up">
      <h3 class="quick-links-heading">Quick Links</h3>
      <ul class="quick-links">
        <li><a href="/resume.pdf" target="_blank" rel="noreferrer noopener">Resume</a></li>
        <li><a href="#experiences">Research &amp; Experiences</a></li>
      </ul>
    </div>

  </div>

  <div class="footer-bar">
    <p class="footer-copy">© 2026 Benjamin Barron</p>
  </div>
</footer>
