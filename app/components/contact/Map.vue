<!-- <script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let map

onMounted(async () => {
  const L = await import('leaflet')
  const leaflet = L.default

  await import('leaflet/dist/leaflet.css')

  const icon = (await import('leaflet/dist/images/marker-icon.png')).default
  const shadow = (await import('leaflet/dist/images/marker-shadow.png')).default

  delete leaflet.Icon.Default.prototype._getIconUrl

  leaflet.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: shadow,
  })


  map = leaflet
    .map('map-canvas')
    .setView([51.471105, -0.11405], 16)


  leaflet
    .tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors'
      }
    )
    .addTo(map)


  const store = {
    name: "Slade Gardens Adventure Playground",
    address: "Slade Gardens, Stockwell, London SW9",
    coords: {
      lat: 51.471105,
      lng: -0.11405
    }
  }


  const redIcon = leaflet.icon({
    iconUrl:
      'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -51],
    shadowSize: [41, 41]
  })


  const popup = `
    <div class="store-popup text-center">
      <strong>${store.name}</strong><br>
      ${store.address}
    </div>
  `


  leaflet
    .marker(
      [store.coords.lat, store.coords.lng],
      { icon: redIcon }
    )
    .addTo(map)
    .bindPopup(popup)
    .openPopup()


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {

      const userIcon = leaflet.divIcon({
        className: "user-location-dot",
        html: "📍"
      })

      leaflet
        .marker(
          [pos.coords.latitude, pos.coords.longitude],
          { icon: userIcon }
        )
        .addTo(map)
        .bindPopup("<strong>You are here</strong>")

    })
  }

})


onBeforeUnmount(() => {
  if (map) {
    map.remove()
  }
})
</script> -->

<template>
  <!--<section
    id="map"
    aria-labelledby="map-title"
  >
    <h2 id="map-title" class="visually-hidden">
      Slade Gardens location
    </h2>

    <div
      id="map-canvas"
      role="region"
      aria-label="Slade Gardens location map"
    />

    <noscript>
      <p class="no-js">
        JavaScript is needed to view the map.
      </p>
    </noscript>
  </section> -->

      <section class="reveal" style="padding:0;">
      <div class="map-wrap">
       <iframe
          title="Map showing Slade Gardens Adventure Playground"
          loading="lazy"
          allowfullscreen
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.11905%2C51.468105%2C-0.10905%2C51.474105&layer=mapnik&marker=51.471105%2C-0.11405"
        ></iframe>
      </div>
    </section>
</template>

<style scoped>
#map-canvas {
  width: 100%;
  height: 450px;
}
</style>
