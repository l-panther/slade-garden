<script setup>
import image from '~/assets/images/about/circles-win.png'
import { mainSponsors, extraSponsors } from '~/data/sponsors'
</script>

<template>
  <section id="full-sponsors" class="section-cream">
    <div class="site-container">
      <div class="section-head center">
        <span class="eyebrow reveal">Sponsors, friends and contributors</span>
        <p class="reveal">As our organisation relies 100% on grants, donations, gifts in kind, legacies, and volunteers, we are very grateful to the following.</p>
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
      <div
        v-for="sponsor in extraSponsors"
        :key="sponsor.name"
        class="col-12 col-sm-2 text-center sponsor main p-3"
      >
        <img
          :src="sponsor.image"
          :alt="`${sponsor.name} sponsor`"
          class="img-fluid p-4"
        >
      </div>
      </div>
    </div>
  </section>
</template>
