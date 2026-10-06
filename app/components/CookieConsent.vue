<template>
  <Transition name="rise">
    <div v-if="bannerVisible" class="cookie-banner" role="dialog" aria-modal="false" aria-labelledby="cookieHeading">
      <div class="site-container cookie-inner">
        <div class="cookie-text">
          <span class="eyebrow">A note about cookies</span>
          <h2 id="cookieHeading" class="cookie-heading">We use a few cookies</h2>
          <p class="cookie-body">
            Some are strictly necessary for the site to work. With your permission,
            we'd also like to use a few that help us understand how the site is used —
            you can change your mind any time from the link in the footer.
          </p>

          <div v-if="expanded" class="cookie-categories">
            <div class="cookie-category">
              <div class="cookie-category-head">
                <span>Necessary</span>
                <span class="cookie-locked-tag">Always on</span>
              </div>
              <p class="cookie-category-desc">Required for the site to function — can't be switched off.</p>
            </div>

            <div class="cookie-category">
              <div class="cookie-category-head">
                <label class="cookie-switch">
                  <span>Analytics</span>
                  <input type="checkbox" v-model="analyticsChoice" />
                  <span class="cookie-switch-track" aria-hidden="true"></span>
                </label>
              </div>
              <p class="cookie-category-desc">Helps us understand which pages get visited, so we can improve the site.</p>
            </div>

            <div class="cookie-category">
              <div class="cookie-category-head">
                <label class="cookie-switch">
                  <span>Marketing</span>
                  <input type="checkbox" v-model="marketingChoice" />
                  <span class="cookie-switch-track" aria-hidden="true"></span>
                </label>
              </div>
              <p class="cookie-category-desc">Not currently used on this site, included here in case that changes.</p>
            </div>
          </div>
        </div>

        <div class="cookie-actions">
          <button v-if="!expanded" class="btn btn-navy-outline cookie-btn" type="button" @click="expanded = true">
            Customize
          </button>
          <button v-else class="btn btn-navy-outline cookie-btn" type="button" @click="saveCustom">
            Save preferences
          </button>
          <button class="btn btn-navy-outline cookie-btn" type="button" @click="rejectNonEssential">
            Reject non-essential
          </button>
          <button class="btn btn-green cookie-btn" type="button" @click="acceptAll">
            Accept all
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const {
  bannerVisible,
  loadFromStorage,
  acceptAll,
  rejectNonEssential,
  saveConsent,
  consent,
} = useCookieConsent();

const expanded = ref(false);
const analyticsChoice = ref(false);
const marketingChoice = ref(false);

function saveCustom() {
  saveConsent(analyticsChoice.value, marketingChoice.value);
  expanded.value = false;
}

onMounted(() => {
  loadFromStorage();
  // Pre-fill toggles with any existing choice, so reopening
  // preferences later shows what's actually active, not defaults.
  if (consent.value) {
    analyticsChoice.value = consent.value.analytics;
    marketingChoice.value = consent.value.marketing;
  }
});
</script>

<style scoped>
/*
  Deliberately reuses Slade Gardens' own design tokens (--green-deep,
  --orange, --cream, etc.) and real button classes (.btn-green,
  .btn-navy-outline) from the site's global stylesheet, rather than
  inventing a separate parallel style system. This assumes the site's
  shared CSS (with those custom properties + .btn classes + Baloo 2 /
  Inter fonts already loaded) is available globally — which it will be,
  since this drops into the existing site.
*/

.cookie-banner{
  position:fixed;
  left:0; right:0; bottom:0;
  z-index:300;
  background:var(--cream);
  border-top:3px solid var(--green);
  box-shadow:0 -10px 30px rgba(18,67,44,0.14);
  padding:26px 0;
}
.cookie-inner{
  display:flex;
  flex-wrap:wrap;
  gap:24px;
  align-items:flex-end;
  justify-content:space-between;
}
.cookie-text{ flex:1; min-width:280px; }
.cookie-heading{
  font-family:'Baloo 2', sans-serif;
  font-weight:700;
  font-size:1.3rem;
  color:var(--green-deep);
  margin-bottom:8px;
}
.cookie-body{
  font-size:.92rem;
  color:var(--ink-light);
  line-height:1.6;
  max-width:62ch;
}

.cookie-categories{
  margin-top:18px;
  display:flex;
  flex-direction:column;
  gap:14px;
}
.cookie-category{
  border-top:1px solid var(--line);
  padding-top:12px;
}
.cookie-category-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-family:'Baloo 2', sans-serif;
  font-size:.95rem;
  color:var(--ink);
  font-weight:600;
}
.cookie-category-desc{
  font-size:.84rem;
  color:var(--ink-light);
  margin-top:4px;
  line-height:1.55;
}
.cookie-locked-tag{
  font-family:'Inter', sans-serif;
  font-size:.75rem;
  font-weight:500;
  color:var(--ink-light);
}

.cookie-switch{
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  position:relative;
}
.cookie-switch input{
  position:absolute;
  opacity:0;
  width:1px; height:1px;
}
.cookie-switch-track{
  width:38px; height:20px;
  border-radius:999px;
  background:var(--line);
  border:1px solid var(--line);
  position:relative;
  transition:background .15s ease, border-color .15s ease;
  flex-shrink:0;
  order:2;
}
.cookie-switch-track::after{
  content:'';
  position:absolute;
  top:2px; left:2px;
  width:14px; height:14px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 1px 3px rgba(0,0,0,.25);
  transition:transform .15s ease;
}
.cookie-switch input:checked + .cookie-switch-track{
  background:var(--green);
  border-color:var(--green);
}
.cookie-switch input:checked + .cookie-switch-track::after{
  transform:translateX(18px);
}
.cookie-switch input:focus-visible + .cookie-switch-track{
  outline:3px solid var(--orange);
  outline-offset:2px;
}

.cookie-actions{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  flex-shrink:0;
}
.cookie-btn{
  white-space:nowrap;
}

.rise-enter-active, .rise-leave-active{ transition:transform .25s ease, opacity .25s ease; }
.rise-enter-from, .rise-leave-to{ transform:translateY(20px); opacity:0; }

@media (max-width:760px){
  .cookie-inner{ flex-direction:column; align-items:stretch; }
  .cookie-actions{ flex-direction:column; }
  .cookie-actions .cookie-btn{ width:100%; text-align:center; }
}
</style>
