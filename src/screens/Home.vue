<template>
  <div class="home">
    <HomeBanner />
    <CompanyProfile />
    <OfficeEnvironment />
    <CompanyCulture />
    <ContactUs />
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';
  import CompanyProfile from '../components/home/CompanyProfile.vue';
  import OfficeEnvironment from '../components/home/OfficeEnvironment.vue';
  import CompanyCulture from '../components/home/CompanyCulture.vue';
  import ContactUs from '../components/home/ContactUs.vue';
  import HomeBanner from '../components/home/Banner.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      CompanyProfile,
      OfficeEnvironment,
      CompanyCulture,
      ContactUs,
      HomeBanner,
    },
    setup() {
      const { t } = useI18n();
      return {
        t,
      };
    },
  });
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }
</style>
