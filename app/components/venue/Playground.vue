<script setup>
import image1 from '~/assets/images/venue/hire1.jpg'
import image2 from '~/assets/images/venue/hire2.jpg'
import image3 from '~/assets/images/venue/hire3.jpg'
import image4 from '~/assets/images/venue/hire5.jpg'

const hireOptions = [
{
  icon: 'bi-balloon',
  title: 'Parties',
  text: 'Hire the Adventure Playground on Sundays with access to outdoor play structures, indoor activities, kitchen facilities and indoor spaces.'
},
{
  icon: 'bi-tree',
  title: 'Education & Workshops',
  text: 'Use the Octopus and edible garden for outdoor learning, nature activities, creative writing, biology sessions and practical workshops.'
},
{
  icon: 'bi-people',
  title: 'Community Events',
  text: 'Planning a community fundraiser, retreat or local event? Talk to us about how we can help make the space work for you.'
}
]
</script>

<template>
<section class="section-cream">
    <div class="site-container row g-5 align-items-center split">
      <div class="col-lg-6">
        <span class="eyebrow reveal">Your space, your event</span>
        <h2 class="reveal">More Than Just a Playground</h2>
        <p class="reveal">The Adventure Playground is available for party hire on Sundays. You'll have access to the outdoor playground structures, indoor play activities, kitchen facilities and indoor spaces.</p>
        <p class="reveal">For educational groups, our Octopus facility provides a covered, weatherproof space within the edible garden — ideal for outdoor learning, creative sessions and nature-based activities.</p>
        <p class="reveal">It also works beautifully for work retreats, yoga sessions, community gatherings and fundraising events.</p>
        <NuxtLink to="/contact" class="btn btn-orange reveal">Enquire About Venue Hire</NuxtLink>
      </div>
      <div class="col-lg-6 split-media reveal-scale">
        <div class="gallery-grid">
          <img class="g-main" :src="image1" alt="Aerial view of the outdoor playground structures on the lawn">
          <img :src="image2" alt="Open grassy area bordered by autumn trees">
          <img :src="image3" alt="Indoor hire room with tables and orange flooring">
        </div>
      </div>
    </div>
  </section>
</template>