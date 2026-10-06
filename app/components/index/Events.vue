<<script setup>

import image1 from '~/assets/images/events/summer-program.jpg';
import image2 from '~/assets/images/events/seasonal-worker.jpg';
import image3 from '~/assets/images/events/recruit.jpg';
import image4 from '~/assets/images/events/summer-apg.jpg';
import image5 from '~/assets/images/events/comedy-night.jpg';
import image6 from '~/assets/images/events/sports-day.jpg';
import image7 from '~/assets/images/events/may-term.jpg';
import image8 from '~/assets/images/events/life-drawing.jpg';
import image9 from '~/assets/images/events/egg-hunt.jpg';

const events = [
  {
    title: 'Summer Program 2026',
    subtitle: 'Express yourself',
    description: 'Take part in drama activities, games and performances.',
    image: image1,
    alt: 'Children taking part in drama activities',
  },
  {
    title: 'We are recruiting',
    subtitle: 'Grow and explore',
    description: 'Learn about plants, nature and growing food.',
    image: image2,
    alt: 'Children gardening at Slade Gardens',
  },
  {
    title: 'We are recruiting a charity manager',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image3,
    alt: 'Children taking part in arts and crafts',
  },
  {
    title: 'Save the date',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image4,
    alt: 'Children taking part in arts and crafts',
  },
  {
    title: 'Comedy night',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image5,
    alt: 'Children taking part in arts and crafts',
  },
  {
    title: 'Sports day',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image6,
    alt: 'Children taking part in arts and crafts',
  },
  {
    title: 'May half term',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image7,
    alt: 'Children taking part in arts and crafts',
  },
  {
    title: 'Charcoal social arrives',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image8,
    alt: 'Children taking part in arts and crafts',
  },
  {
    title: 'Easter hunt',
    subtitle: 'Get creative',
    description: 'Explore painting, making and creative activities.',
    image: image9,
    alt: 'Children taking part in arts and crafts',
  },
]
</script>

<template>
  <section class="section-green on-dark" id="whats-on">
    <div class="site-container">
      <div class="section-head">
        <span class="eyebrow reveal">What's On</span>
        <h2 class="reveal">All The Fun Things We Do</h2>
      </div>

        <div class="row">
        <div
          v-for="event in events"
          :key="event.title"
          class="col-12 col-md-4 mb-4"
        >
          <div class="card event-card h-100">
            <img
              :src="event.image"
              :alt="event.alt"
              class="card-img-top"
            >

            <div class="body">
              <h3 class="title">
                {{ event.title }}
              </h3>

              <h4 class="tag">
                {{ event.subtitle }}
              </h4>

              <p class="card-text">
                {{ event.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>