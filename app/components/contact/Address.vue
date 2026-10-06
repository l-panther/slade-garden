<script setup>
import { company } from '@/data/company'

const displayTelephone = company.telephone.replace(
  /(\d{4})(\d{3})(\d{4})/,
  '$1 $2 $3'
)
</script>

<template>
  <section class="section-cream" style="padding-top:56px;">
    <div class="site-container row g-5 split">
      <div class="col-lg-6">
        <span class="eyebrow reveal">Get in touch</span>
        <h2 class="reveal">We'd Love to Hear From You</h2>
        <div class="reveal" style="margin-top:22px;">
          <h4 style="font-size:1rem;margin-bottom:6px;">Address</h4>
          <p style="color:var(--ink-light);margin-bottom:20px;">Slade Gardens Adventure Playground<br>{{ company.address.line1 }}<br>{{ company.address.city }} {{ company.address.postcode }}</p>
        </div>
        <div class="reveal">
          <h4 style="font-size:1rem;margin-bottom:6px;">Telephone</h4>
          <p style="margin-bottom:20px;"><a href="tel:${company.telephone}" style="text-decoration:underline;color:var(--green);">{{ displayTelephone }}</a></p>
        </div>
        <div class="reveal">
          <h4 style="font-size:1rem;margin-bottom:6px;">Email</h4>
          <p><a href="mailto:${company.email}" style="text-decoration:underline;color:var(--green);">{{ company.email }}</a></p>
        </div>
      </div>
      <div class="col-lg-6">
        <span class="eyebrow reveal">Find us</span>
        <h2 class="reveal">Getting Here</h2>
        <div class="reveal" style="margin-top:22px;">
          <h4 style="font-size:1rem;margin-bottom:6px;">By Tube</h4>
          <p style="color:var(--ink-light);margin-bottom:20px;">Take the Victoria line to Stockwell tube. We are about a 5-minute walk from Stockwell Station.</p>
        </div>
        <div class="reveal">
          <h4 style="font-size:1rem;margin-bottom:6px;">By Bus</h4>
          <p style="color:var(--ink-light);">Brixton Road: 3, 59, 159, 133, 333<br>Stockwell Road: 2, 345, 196<br>Clapham Road: 155, 255, 88</p>
        </div>
      </div>
    </div>
  </section>
</template>
