<script setup>
import image from '~/assets/images/about/safeguarding.jpg'
</script>

<template>
    <section class="section-light">
      <div class="site-container row g-5 align-items-center split">
        <div class="col-lg-6">
          <span class="eyebrow reveal">Important information</span>
          <h2 class="reveal">Our safeguarding policy</h2>
          <p class="reveal">View and download a copy of our safeguarding policy. If you have any questions about our work or our place for the future please don't hesitate to <NuxtLink to="/contact" class="text-orange" style="text-decoration:underline;">get in touch</NuxtLink>.</p>
          <a href="#" class="btn btn-orange reveal">Safeguarding Policy</a>
        </div>
        <div class="col-lg-6 split-media reveal-scale">
          <img class="rect-photo" :src="image" alt="Children playing safely on playground equipment">
        </div>
      </div>
    </section>

</template>
