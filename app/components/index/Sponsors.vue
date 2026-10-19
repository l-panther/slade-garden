
<script setup>
import { mainSponsors } from '~/data/sponsors'
</script>

<template>
  <section class="section-cream sponsors-section">
    <div class="site-container">

      <div class="section-head center">
        <span class="eyebrow reveal">Our Sponsors</span>
        <h2 class="reveal">The People Who Help Us</h2>
      </div>

      <div class="row g-3 align-items-center logo-grid">
        <div
          v-for="sponsor in mainSponsors"
          :key="sponsor.name"
          class="col-6 col-md-4 col-lg-2 text-center sponsor main"
        >
          <img
            :src="sponsor.image"
            :alt="`${sponsor.name} sponsor`"
            class="img-fluid p-2 p-lg-4"
          >
        </div>
      </div>

      <p class="sponsors-description">
        See our
        <a href="/about#full-sponsors" class="text-orange">
          full list of sponsors
        </a>,
        friends, and contributors.
        Find out how you can add your logo to this list
        of generous organisations by
        <NuxtLink to="/contact" class="text-orange">
          contacting us
        </NuxtLink>.
      </p>

    </div>
  </section>
</template>
