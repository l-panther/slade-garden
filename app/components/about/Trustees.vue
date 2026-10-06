<script setup>
import image from '~/assets/images/about/staff-group-summer.jpg'
</script>

<template>
  <section class="section-cream">
    <div class="site-container row g-5 people-grid">
      <div class="col-lg-7">
        <span class="eyebrow reveal">Staff</span>
        <div class="people-block reveal">
          <h3>Simone Lindsey</h3>
          <p><em>Senior play worker</em> — the first point of call for all enquiries.</p>
          <p>Our team of dedicated play workers are here to help and enhance every visit.</p>
        </div>
        <div class="people-block reveal">
          <h3>Olga Muniz</h3>
          <p>Manages the Edible Garden and Gardening Club.</p>
        </div>
        <div class="people-block reveal">
          <p>Please join us in celebrating <strong>Janis Marsh</strong>, our interim Charity Manager, who returns to being our lead safeguarding trustee, and <strong>Codella Patterson</strong>, who moved to a new role at the end of 2025. We will miss her and wish her well.</p>
        </div>

        <span class="eyebrow reveal" style="margin-top:20px;">Trustees</span>
        <div class="people-block reveal">
          <p><strong>Katherine Bielenberg</strong>, Chair · <strong>Frances Carter</strong>, Secretary · <strong>Roy Simpson</strong>, Treasurer · <strong>Jamie Bullock</strong> · <strong>Michelle Carmichael</strong> · <strong>Kelly Johnson</strong> · <strong>Janis Marsh</strong> · <strong>Nkechi Adiedu</strong> · <strong>Olga Muniz</strong></p>
          <p>Contact us if you'd like to learn more about being a trustee. We are actively looking for trustees with financial IT, building project management, carpentry, painting, community development, social media, communications, marketing or fundraising experience. We are also seeking carer preferences for the facilities on a parent or carer of a young person (18–25 yrs) to be represented on the board. Is this you? Your time commitment is two hours per month, and more if you can spare it.</p>
        </div>

        <span class="eyebrow reveal" style="margin-top:20px;">Past trustees</span>
        <div class="people-block reveal">
          <p>In March 2025, we said goodbye to two amazing trustees <strong>Robin Langton</strong>, who stepped down as Chair, and <strong>Veronica Flowden</strong>, who was Secretary. They have joined the Adventure Playground community for over five years and their considered locals, they formed this charity in the 90s to keep the adventure playground open.</p>
          <p>Thank you also to <strong>Renata Funari</strong> our most recent Secretary, <strong>Tom Stabler</strong>, our most recent Treasurer and <strong>Annabel Elkington</strong> previously Co-Chair.</p>
          <p>All of our trustees, past and present, make a positive difference to the lives of neighbourhood children. Thank you.</p>
        </div>
      </div>

      <div class="col-lg-5">
        <img class="rect-photo reveal-scale" :src="image" alt="Volunteer team at a community event" style="margin-bottom:26px;">
        <div class="contact-card" style="background:var(--green-light);border:1px solid var(--line);">
          <span class="eyebrow reveal">Membership</span>
          <p class="reveal" style="color:var(--ink-light);">There is no charge for membership — it's FREE to be a member. Members vote at AGMs and can have an active and crucial role in how we work.</p>
          <p class="reveal" style="color:var(--ink-light);">When you register as a user family, you automatically become a member.</p>
          <p class="reveal" style="color:var(--ink-light);">As a community charitable organisation, we encourage all members of the community, be it caregivers, local schools, friends, or neighbours, to join the conversation and have a voice in our work.</p>
          <p class="reveal" style="color:var(--ink-light);">We are our community. Please get involved. Everyone is welcome.</p>
          <NuxtLink to="/get-involved" class="btn btn-orange reveal">Become a Member</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
