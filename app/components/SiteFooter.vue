<script setup>
import { company } from '@/data/company'

const displayTelephone = company.telephone.replace(
  /(\d{4})(\d{3})(\d{4})/,
  '$1 $2 $3'
)
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="site-container footer-top">
      <div class="row g-4 container footer-grid">
        <div class="reveal col-lg-5">
          <div class="logo" style="color:#fff;margin-bottom:14px;"><span class="logo-mark">🌳</span> Slade Gardens</div>
          <p>{{ company.name }} offers over an acre of safe, staffed space where children &amp; young people can play, make friends and try new things.</p>
          <div class="social-row">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="X">𝕏</a>
          </div>
        </div>
        <div class="reveal col-sm-6 col-lg-3">
          <h4>Opening Hours</h4>
          <p><strong>Holiday Hours</strong><br>We are open! Visit <a href="#" style="text-decoration:underline;">What's On</a> for current activities and events.</p>
          <p><strong>Adventure Playground</strong><br>Mon–Fri: 10:00 AM – 5:00 PM<br>Sat: 11:00 AM – 4:00 PM</p>
          <p><strong>Under 5s Stay &amp; Play</strong><br>Wed–Fri: 10:00 AM – 1:00 PM</p>
          <p><strong>Family Garden Volunteers</strong><br>Sat: 11:00 AM – 2:00 PM</p>
        </div>
        <div class="reveal col-sm-6 col-lg-4">
          <h4>Safety &amp; Care</h4>
          <ul class="foot-check">
            <li><span class="tick">✓</span> Hand sanitiser stations</li>
            <li><span class="tick">✓</span> Equipment regularly cleaned and disinfected</li>
            <li><span class="tick">✓</span> Safeguarding policy in place</li>
            <li><span class="tick">✓</span> First Aid trained play workers</li>
          </ul>
          <h4 style="margin-top:24px;">Contact Us</h4>
          <p>{{ company.address.line1 }}<br>{{ company.address.city }} {{ company.address.postcode }}</p>
          <p><a href="tel:${company.telephone}" style="text-decoration:underline;">{{ displayTelephone }}</a></p>
          <p><a href="mailto:${ompany.email}" style="text-decoration:underline;">{{ company.email }}</a></p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="site-container">
        <p><strong>{{ company.name }}</strong>, is a registered charity <strong>No. 1165347</strong>.</p>
        <p>© {{ currentYear }} {{ company.name}}. All rights reserved.</p>
        <p>Original design by <a href="#">lucymaddison.com</a> · Redesign by <a href="#" class="text-yellow">Leroy Russell</a></p>
      </div>
    </div>
  </footer>
</template>