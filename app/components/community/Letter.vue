<script setup>
import image1 from '~/assets/images/community/architect1-480x296.jpg'
import image2 from '~/assets/images/community/architect2-400x250.jpg'
import image3 from '~/assets/images/community/architect3-480x296.jpg'
import image4 from '~/assets/images/community/max-logo-480x296.jpg'
</script>

<template>
  <section class="section-cream">
    <div class="site-container row g-5 split">
      <div class="col-lg-7">
        <h2 class="reveal" style="font-size:1.5rem;max-width:640px;">Dear <span style="color:var(--orange-dark);">Friends and Neighbours</span> of Slade Gardens Adventure Playground</h2>
        <p class="reveal">Many of you have asked about progress on the proposed permanent home for the adventure playground, (Slade Gardens Community Hub), in light of the economic uncertainty surrounding the Covid-19 crisis.</p>
        <p class="reveal">As a reminder, this building is needed to enable the Adventure Playground to generate income and be financially self-sufficient in order to serve future generations of children and preserve this valuable playspace, with all Lambeth funding now ceased.</p>
        <p class="reveal">It is true that these unprecedented times have had a profound impact on the grant funding landscape for ambitious projects like this.</p>
        <p class="reveal">The Slade Gardens Community Play Association has taken the difficult decision to amend the plans for the new building to reduce costs and make the remaining fundraising more achievable.</p>
        <p class="reveal">The project benefits from Lambeth's support in the form of a £1m grant for the new building.</p>
        <p class="reveal">We have set ourselves the challenge of re-designing the building with the same scope, space, and facilities within a more achievable budget.</p>
        <p class="reveal">We hope you will support these revised proposals. The aim is to resubmit the scheme for planning before Christmas.</p>
        <p class="reveal">We welcome your comments at this stage, please submit any concerns or queries you may have via email to <a href="mailto:info@maxarchitects.co.uk" style="text-decoration:underline;color:var(--green);">info@maxarchitects.co.uk</a> with Slade Gardens Community Hub in the subject line.</p>
      </div>

      <div class="col-lg-5 split-media reveal-scale">
        <div style="display:flex;flex-direction:column;gap:24px;">
          <img class="rect-photo" :src="image1" alt="Architectural render of the proposed community hub building">
          <img class="rect-photo" :src="image2" alt="Render of the community hub set within the playground grounds">
          <img class="rect-photo" :src="image3" alt="Site plan showing the community hub layout within Slade Gardens">
          <img class="rect-photo" :src="image4" alt="Site plan showing the community hub layout within Slade Gardens">
        </div>
      </div>
    </div>
  </section>
</template>
