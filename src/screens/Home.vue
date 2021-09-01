<template lang="">
  <div class="home">
    <HomeBanner />
    <CompanyProfile />
    <OfficeEnvironment />
    <CompanyCulture />
    <ContactUs />
  </div>
</template>
<script>
  import CompanyProfile from '../components/home/CompanyProfile.vue';
  import OfficeEnvironment from '../components/home/OfficeEnvironment.vue';
  import CompanyCulture from '../components/home/CompanyCulture.vue';
  import ContactUs from '../components/home/ContactUs.vue';
  import HomeBanner from '../components/home/Banner.vue';

  export default {
    components: {
      CompanyProfile,
      OfficeEnvironment,
      CompanyCulture,
      ContactUs,
      HomeBanner,
    },
  };
</script>

<style scoped>
  .home {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    gap: var(--space-md);
  }
</style>
