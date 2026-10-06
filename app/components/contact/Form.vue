<template>
    <section class="section-green on-dark">
      <div class="site-container row g-5 align-items-start split">
        <div class="col-lg-6">
          <span class="eyebrow reveal">Get in touch</span>
          <h2 class="reveal">Please Get in Touch, We Would Love to Hear From You</h2>
        </div>
        <div class="col-lg-6 contact-card reveal">
          <form @submit.prevent>
            <div class="row g-3 form-grid">
              <div class="field col-md-6">
                <label for="c-name">Full name</label>
                <input id="c-name" type="text" placeholder="Your name">
              </div>
              <div class="field col-md-6">
                <label for="c-email">Email address</label>
                <input id="c-email" type="email" placeholder="you@example.com">
              </div>
            </div>
            <div class="field" style="margin-bottom:20px;">
              <label for="c-message">Message</label>
              <textarea id="c-message" placeholder="Type a message…"></textarea>
            </div>
            <button type="submit" class="btn btn-orange">Send Message</button>
          </form>
        </div>
      </div>
    </section>
</template>
