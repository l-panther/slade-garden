<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import image from '~/assets/images/about/circles-win.png'

const statistics = ref(null)

let observer

const animateValue = (el) => {
  const target = Number(el.dataset.target)
  const suffix = el.dataset.suffix || ''
  const duration = 3500

  let startTime = null

  const step = (timestamp) => {
    if (!startTime) {
      startTime = timestamp
    }

    const progress = Math.min(
      (timestamp - startTime) / duration,
      1
    )

    const value = Math.floor(progress * target)

    el.textContent = value.toLocaleString() + suffix
    el.setAttribute('aria-valuenow', value)

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      el.textContent = target.toLocaleString() + suffix
      el.setAttribute('aria-valuenow', target)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  if (!statistics.value) return

  const stats = statistics.value.querySelectorAll('div[data-target]')

  stats.forEach((stat) => {
    stat.setAttribute('aria-valuemin', '0')
    stat.setAttribute('aria-valuemax', stat.dataset.target)
    stat.setAttribute('aria-valuenow', '0')
  })

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        stats.forEach((stat) => animateValue(stat))

        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.3
    }
  )

  observer.observe(statistics.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
    <section class="section-green-deep on-dark">
      <div class="site-container">
        <div class="section-head center">
          <span class="eyebrow reveal">Who uses us?</span>
          <p class="reveal">During the holidays we average over 100 children each day. Over the year we have well over 4,000 visits to the playground alone, while we do not target a particular ethnic group, over 72% of the children that use us are from Black and multi-ethnic backgrounds.</p>
        </div>

        <!-- Stats Display -->
        <div class="row g-4 stat-grid" id="statistics" ref="statistics">
          <div class="reveal col-6 col-lg-3">
            <div class="stat-num"
              data-target="100"
              aria-label="100 children per day">0</div>
            <div class="stat-label">Children per day</div>
          </div>
          <div class="reveal col-6 col-lg-3">
            <div class="stat-num"
              data-target="420"
              aria-label="420 visits per year">0</div>
            <div class="stat-label">Play sessions per year</div>
          </div>
          <div class="reveal col-6 col-lg-3">
            <div class="stat-num"
              data-target="73"
              data-suffix="%"
              aria-label="73 percent Black and multi-ethnic groups">0%</div>
            <div class="stat-label">Black &amp; multi-ethnic groups</div>
          </div>
          <div class="reveal col-6 col-lg-3">
            <div class="stat-num" 
              data-target="75"
              data-suffix="%"
              aria-label="75 percent qualifying for free school meals">0%</div>
            <div class="stat-label">Qualify for free dinners</div>
          </div>
        </div>
        <p class="reveal" style="margin-top:44px;">Registration data: over 950 local families with 1,213 children are registered, 35% of the children have boys and 65% were girls, and about 22% have allergies. Lambeth data: we are one of the most deprived areas locally, and Stockwell West is a highest proportion of 0–14 year olds (36%) in the borough.</p>
        <p class="reveal" style="margin-top:14px;">Most Saturdays there are at least 10 green-fingered good-natured volunteers in the edible garden. Families love the facilities on Sundays for your child's party.</p>
      </div>
    </section>
</template>
