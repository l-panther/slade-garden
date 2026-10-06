<script setup>
import image from '~/assets/images/about/circles-win.png'
</script>

<template>
  <AppSection id="welcome"
    aria="welcome-title">
       <div class="row align-middle">
      <div class="col-sm-12 col-lg-6">
        <article>
          <h2><span>About</span> Us</h2>
          <p>Our Adventure Playground offers over an acre of safe, staffed space where children &amp; young people can come to play, make new friends, develop skills &amp; try new things.</p>
          <p>We are open to children of every background between the ages of 6 – 16.</p>
          <dl class="bullet-list">
            <dt>We believe</dt>
            <dd>Children thrive with positive social interactions</dd>
            <dd>Play helps children develop responsibility through risk</dd>
            <dd>Children can develop strong social skills and positive connections by playing freely</dd>
            <dd>Children need space to take responsibility, explore and challenge themselves</dd>
          </dl>
          <p>We also have a Under 5s Stay and Play program, community volunteer days in our edible garden, corporate volunteer opportunities, 17-21 employment and training programs, and rent our premises for parties.</p>
        </article>

        <article id="mission" class="mt-5">
          <h2>Our <span>Mission</span></h2>
          <p>We believe that children in the borough of Lambeth between the ages of one and twenty-one have the right to play freely and safely in a healthy outdoor environment. We believe such activity is important to their social, mental and physical well-being and as such contributes to their present and future lives.</p>
        </article>
      </div>

      <!-- Mission Image -->
      <div class="col-sm-12 col-lg-6 d-none d-lg-inline-flex d-flex justify-content-center align-items-center center">
        <aside class="responsive-img">
          <img :src="image" alt="Circles Win" />
        </aside>
      </div>
    </div>
  </AppSection>
</template>
