<script setup>
import image from '~/assets/images/about/circles-garden1.png'
</script>

<template>
  <section class="section-light">
    <div class="site-container row g-5 align-items-center flex-lg-row-reverse split reverse">
      <div class="col-lg-6 split-media reveal-scale d-none d-lg-block">
        <aside>
          <img class="rect-photo" :src="image" alt="Volunteer tending the edible garden">
        </aside>
      </div>
      <div class="col-lg-6">
        <span class="eyebrow reveal">So much to do</span>
        <h2 class="reveal">Slade Gardens is well kept</h2>
        <p class="reveal">There is big emphasis on outdoor play with gardening and the edible playground as well as our exciting structures and their being. You can also come outside and play, arts and crafts, cookery, table tennis and much more.</p>
        <p class="reveal" style="font-weight:700;color:var(--green-deep);">Recent activities, events &amp; projects include:</p>
        <ul class="check-list reveal">
          <li><span class="dot"></span> In partnership with Urban Growth, we planted a bed of growing veg and greenhouse to teach children and young people gardening</li>
          <li><span class="dot"></span> Bee Urban and our thriving bee hives produced over 120kg of honey to sell — it is our winter bee hotel we call our home</li>
          <li><span class="dot"></span> British Chamber Orchestra held a concert</li>
          <li><span class="dot"></span> We lead a community sports bus — in partnership for Bonfire Night we can see the community coming together for a fun-filled event, keeping alive a slime-making workshop and much more festive.</li>
        </ul>
      </div>
    </div>
  </section>
</template>
