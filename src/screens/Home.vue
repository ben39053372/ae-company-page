<template lang="">
  <div class="home">
    <HomeBanner />
    <CompanyProfile />
    <OfficeEnvironment />
    <CompanyCulture />
    <ContactUs />
  </div>
</template>
<script setup>
  import CompanyProfile from '../components/home/CompanyProfile.vue';
  import OfficeEnvironment from '../components/home/OfficeEnvironment.vue';
  import CompanyCulture from '../components/home/CompanyCulture.vue';
  import ContactUs from '../components/home/ContactUs.vue';
  import HomeBanner from '../components/home/Banner.vue';
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
</style>
