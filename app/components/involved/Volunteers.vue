<script setup>
import image from '~/assets/images/involved/circles-garden.png';
</script>

<template>
  <section class="section-cream">
    <div class="site-container row g-5 align-items-center flex-lg-row-reverse split reverse">
      <div class="col-lg-6 split-media reveal-scale d-none d-lg-block">
        <img class="rect-photo" :src="image" alt="Young volunteers gardening together">
      </div>
      <div class="col-lg-6">
        <span class="eyebrow reveal">Young volunteers</span>
        <h2 class="reveal">Last year over 40 children &amp; young people volunteered</h2>
        <p class="reveal">Their time, energy &amp; enthusiasm for events and projects at the APG.</p>
        <p class="reveal" style="font-weight:700;color:var(--green-deep);">In the last year our young volunteers:</p>
        <ul class="check-list reveal">
          <li><span class="dot"></span> Undertook a birdwatch for the RSPB &amp; did a nature survey</li>
          <li><span class="dot"></span> Ran chocolate fountains &amp; popcorn stalls at fireworks night</li>
          <li><span class="dot"></span> Designed posters &amp; logos for our events</li>
          <li><span class="dot"></span> Helped run sports day events including the 3-legged race &amp; obstacle course</li>
          <li><span class="dot"></span> Acted as waiting staff at fundraisers</li>
          <li><span class="dot"></span> Transformed the hut into a chocolate factory</li>
          <li><span class="dot"></span> Dug, weeded and planted in our edible garden</li>
          <li><span class="dot"></span> Gained work experience at our half term camps</li>
          <li><span class="dot"></span> Made friends in their community</li>
        </ul>
        <p class="reveal">If you are aged 6–19 and would like to do some volunteering just get in touch.</p>
        <NuxtLink to="/contact" class="btn btn-orange reveal">Get in Touch</NuxtLink>
      </div>
    </div>
  </section>
</template>
