<template>
  <section class="section-green on-dark">
    <div class="site-container row g-5 align-items-start split">
      <div class="col-lg-6">
        <span class="eyebrow reveal">Indicative hourly rates</span>
        <ul class="rate-list reveal">
          <li><span>5 &amp; under, US &amp; P</span> <strong>£45 per hour</strong></li>
          <li><span>APG</span> <strong>£60 per hour</strong></li>
          <li><span>Friends of Slade Gardens</span> <strong>10% discount</strong></li>
        </ul>
        <a href="#" class="btn btn-orange reveal" style="margin-top:20px;">See Bookings Calendar</a>
      </div>
      <div class="col-lg-6 contact-card reveal">
        <span class="eyebrow reveal">Hire us</span>
        <form @submit.prevent>
          <div class="row g-3 form-grid">
            <div class="field col-md-6">
              <label for="vh-name">Full Name</label>
              <input id="vh-name" type="text" placeholder="Your name">
            </div>
            <div class="field col-md-6">
              <label for="vh-email">Email Address</label>
              <input id="vh-email" type="email" placeholder="you@example.com">
            </div>
          </div>
          <div class="field" style="margin-bottom:20px;">
            <label for="vh-message">Message</label>
            <textarea id="vh-message" placeholder="Tell us about your event — date, group size and what you're planning."></textarea>
          </div>
          <button type="submit" class="btn btn-orange">Send Request</button>
        </form>
      </div>
    </div>
  </section>
</template>
