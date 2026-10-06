<script setup>
import image from '~/assets/images/about/circles-win.png'
import autism from '~/assets/images/partners/autism.png'
import baytree from '~/assets/images/partners/baytree.png'
import brownies from '~/assets/images/partners/brownies.png'
import rainbow from '~/assets/images/partners/rainbow.png'

const partners = [
  {
    name: 'Beyond Autism',
    image: autism,
  },
  {
    name: 'Baytree',
    image: baytree,
  },
  {
    name: 'Brownies',
    image: brownies,
  },
  {
    name: 'Rainbow',
    image: rainbow,
  },
]
</script>

<template>
  <section class="section-cream">
    <div class="site-container">
      <div class="section-head">
        <span class="eyebrow reveal">Who we partner with</span>
        <p class="reveal">We are a proud partner of <a href="#" style="text-decoration:underline;">Lambeth Community Hubs</a>. Founded in 2011, Lambeth Community Hubs is a partnership of five community anchor charities that provide community building based services in their local areas.</p>
      </div>
      <span class="eyebrow reveal">Who we work with</span>
      <p class="reveal" style="max-width:700px;color:var(--ink-light);margin-bottom:24px;">We work with many other groups, schools, charities and local services including Bay Tree, Beyond Autism, Brownies, The Children's Village (a home schooling group), Kristi's Older People Pilates Classes, and Norman Powell and Sustainable Communities.</p>
      <div class="row g-3 align-items-center logo-grid">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="col-12 col-sm-3 text-center partner"
        >
          <img
            :src="partner.image"
            :alt="`${partner.name} logo`"
            class="img-fluid partner-img"
          >
        </div>
      </div>
    </div>
  </section>
</template>