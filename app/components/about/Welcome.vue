<script setup>
import image from '~/assets/images/about/circles-win.png'
</script>

<template>
  <section class="section-cream">
    <div class="site-container row g-5 align-items-center split">
      <div class="col-lg-6">
        <span class="eyebrow reveal">About us</span>
        <p class="reveal">Our Adventure Playground offers over an acre of safe, staffed space where children &amp; young people can come to play, make new friends, develop skills and try new things.</p>
        <p class="reveal">We are open to children of every background between the ages of 6–16.</p>
        <p class="reveal" style="font-weight:700;color:var(--green-deep);">We believe:</p>
        <ul class="check-list reveal">
          <li><span class="dot"></span> Children thrive with positive social interactions</li>
          <li><span class="dot"></span> Play helps children develop responsibility through risk</li>
          <li><span class="dot"></span> Children can develop strong social skills and positive risk-taking by playing freely</li>
          <li><span class="dot"></span> Children need space to take responsibility, explore and challenge themselves</li>
        </ul>
        <p class="reveal">We also have a Under 5s Stay and Play program, community volunteer opportunities in our edible garden, an employment and training program, and rent our premises for parties.</p>
        <div class="mt-5">
          <span class="eyebrow reveal">Our mission</span>
          <p class="reveal" style="max-width:760px;color:var(--ink-light);">We believe that children in the borough of Lambeth and beyond — of one and twenty-one — have the right to play freely and safely in a healthy outdoor environment. We believe such activity is important to their social, mental and physical well-being and as such contributes to their present and future lives.</p>
        </div>
      </div>
      <div class="col-lg-6 split-media reveal-scale">
        <aside>
        <img class="round-photo" :src="image" alt="Children celebrating at the adventure playground">
        </aside>
      </div>
    </div>
  </section>
</template>
