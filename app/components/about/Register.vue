<script setup>
import image from '~/assets/images/about/circles-swing.png'
</script>

<template>
    <section class="section-green on-dark">
      <div class="site-container row g-5 align-items-center split">
        <div class="col-lg-6">
          <span class="eyebrow reveal">Want to come along?</span>
          <h2 class="reveal">Just turn up all you need to do is register and sign in</h2>
          <p class="reveal">Staff are on hand to ensure everyone's play experience. Parents and carers are welcome.</p>
          <p class="reveal">Childcare and play activities are also available, but we ask that you contact us to book first to avoid overcrowding.</p>
          <NuxtLink to="/contact" class="btn btn-orange reveal">Contact Us</NuxtLink>
        </div>
        <div class="col-lg-6 split-media reveal-scale d-none d-lg-block">
          <img class="round-photo" :src="image" alt="Child on a swing">
        </div>
      </div>
    </section>
</template>
