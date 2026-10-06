<script setup>
import { mainSponsors } from '~/data/sponsors'
</script>

<template>
    <section class="section-cream" style="padding-top:0;">
    <div class="site-container">
      <div class="section-head center">
        <span class="eyebrow reveal">Our Sponsors</span>
        <h2 class="reveal">The Person That Help Us</h2>
      </div>
      <div class="row g-3 align-items-center logo-grid">
        <div
          v-for="sponsor in mainSponsors"
          :key="sponsor.name"
          class="col-12 col-sm-2 text-center sponsor main"
        >
          <img
            :src="sponsor.image"
            :alt="`${sponsor.name} sponsor`"
            class="img-fluid p-4"
          >
        </div>
      </div>
      <p style="margin-top:26px;color:var(--ink-light);">
        See our <a href="/about#full-sponsors" class="text-orange" style="text-decoration:underline;">full list of sponsors</a>, friends, and contributors.
        Find out how you can add your logo to this list of generous organisations by
        <NuxtLink to="/contact" class="text-orange" style="text-decoration:underline;">contacting us</NuxtLink>.
      </p>
    </div>
  </section>
</template>
