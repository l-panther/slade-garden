<script setup>
import image from '~/assets/images/index/slade-photo.png'
</script>

<template>
  <section class="section-cream">
    <div class="site-container row g-5 align-items-center split">
      <div class="col-lg-6">
        <span class="eyebrow reveal">Welcome to</span>
        <h2 class="reveal">The Adventure</h2>
        <p class="reveal">Our Adventure Playground offers over an acre of safe, staffed space where children &amp; young people can come to play, build confidence, make new friends, develop skills &amp; try new things.</p>
        <p class="reveal">We are open to children and young people of every background between the ages of 0–21.</p>
        <p class="reveal">Accompanied children under 5 have Stay and Play activities in their own building with a mud kitchen, sand pit, and enclosed open space.</p>
        <p class="reveal">We also offer event hire of the facilities, especially on Sundays.</p>
        <p class="reveal">We are a registered charity and rely 100% on volunteers and donations to stay open.</p>
        <NuxtLink to="/about" class="btn btn-green reveal">About Us</NuxtLink>
      </div>
      <div class="col-lg-6 split-media reveal-scale d-none d-lg-block">
        <aside>
          <img
            :src="image"
            alt="Children playing in the Adventure Playground"
            class="img-fluid"
          >
        </aside>
      </div>
    </div>
  </section>
</template>
