<script setup>
import image1 from '~/assets/images/involved/pedal-logo.jpg';
import image2 from '~/assets/images/involved/pedal-img.png';
import image3 from '~/assets/images/involved/circles-bag.png';
</script>

<template>
  <section class="section-light">
    <div class="site-container">
      <span class="eyebrow reveal">Recent, upcoming events &amp; activities</span>
      <h2 class="reveal">We Have an Active Events Team</h2>
      <p class="reveal" style="max-width:760px;">Helping to run events and activities at the APG. We always welcome new members so get in touch if you'd like to get involved.</p>
      <p class="reveal" style="font-weight:700;color:var(--green-deep);margin-top:10px;">Recent projects include:</p>
      <ul class="check-list reveal" style="max-width:760px;margin-bottom:36px;">
        <li><span class="dot"></span> A community sports day in partnership with Stockwell Park Residents Association which gave over 100 children the chance to test their skills and improve their fitness</li>
        <li><span class="dot"></span> An open day &amp; BBQ to celebrate the end of the summer holidays</li>
        <li><span class="dot"></span> Our Fireworks night provided a dazzling night for over 450 APG users, their families and local residents</li>
        <li><span class="dot"></span> Our Young Advisors group is making sure our children make choices and decisions about their playground &amp; how best it can serve them</li>
      </ul>

      <div class="row g-4 align-items-center split">
        <div class="col-lg-6">
          <img class="rect-photo reveal-scale" :src="image1" alt="Group cycling fundraiser poster wall">
          <img class="reveal-scale mt-3" :src="image2" alt="Group cycling fundraiser poster wall">
        </div>
        <div class="col-lg-6">
          <span class="eyebrow reveal">Volunteer created sponsorship</span>
          <h3 class="reveal">Pedal for Your Playground!</h3>
          <p class="reveal" style="font-weight:700;color:var(--green-deep);">2021's 21st anniversary ride</p>
          <p class="reveal">2021 was the 21st anniversary of the APG as a community-run and managed charity. We celebrated with a fundraising drive beginning a 24-hour cycle challenge with a team of over 70 riders covering 768 miles. This raised over £5,000 towards our operating expenses!</p>
          <p class="reveal">We always welcome volunteers so please get in touch if you'd like to join the fun.</p>
          <p class="reveal" style="font-weight:700;color:var(--green-deep);">There are lots of ways to help including:</p>
          <ul class="check-list reveal">
            <li><span class="dot"></span> Raising funds through a sponsored event — from marathon to coffee morning</li>
            <li><span class="dot"></span> Donating raffle or auction prizes</li>
            <li><span class="dot"></span> Joining the events team and helping to plan events or taking a role from ticket collecting to running the tombola</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
