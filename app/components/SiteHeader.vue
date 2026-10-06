<script setup>
import logo from '~/assets/images/logo/logo-toolbar.png'

const route = useRoute()
const navOpen = ref(false)

function openNav() {
  navOpen.value = true
  document.body.style.overflow = 'hidden'
}
function closeNav() {
  navOpen.value = false
  document.body.style.overflow = ''
}
function toggleNav() {
  navOpen.value ? closeNav() : openNav()
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <header>
    <div class="header-inner">
      <NuxtLink to="/" class="logo"><span class="logo-mark"><img :src="logo" alt=""></span></NuxtLink>

      <nav id="siteNav" :class="{ open: navOpen }">
        <ul>
          <li><NuxtLink to="/" :class="{ active: route.path === '/' }" @click="closeNav">Home</NuxtLink></li>
          <li><NuxtLink to="/about" :class="{ active: route.path === '/about' }" @click="closeNav">About</NuxtLink></li>
          <li><NuxtLink to="/get-involved" :class="{ active: route.path === '/get-involved' }" @click="closeNav">Get Involved</NuxtLink></li>
          <li><NuxtLink to="/venue-hire" :class="{ active: route.path === '/venue-hire' }" @click="closeNav">Venue Hire</NuxtLink></li>
          <li>
            <NuxtLink to="/contact" class="nav-cta" :class="{ active: route.path === '/contact' }" @click="closeNav">Contact Us</NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        class="nav-toggle"
        :class="{ open: navOpen }"
        aria-label="Toggle menu"
        :aria-expanded="navOpen"
        aria-controls="siteNav"
        @click="toggleNav"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="nav-overlay" :class="{ open: navOpen }" @click="closeNav"></div>
  </header>
</template>
