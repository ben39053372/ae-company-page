<template>
  <div class="header">
    <Container>
      <img src="/LOGO.png" />
      <router-link id="anchor-index" to="/">{{ t('index') }}</router-link>
      <router-link id="anchor-company-profile" to="/">{{
        t('Company Profile')
      }}</router-link>
      <router-link id="anchor-office-environment" to="/">{{
        t('Office Environment')
      }}</router-link>
      <router-link id="anchor-company-culture" to="/">{{
        t('Company Culture')
      }}</router-link>
      <router-link id="anchor-contact-us" to="/">{{
        t('Contact Us')
      }}</router-link>
      <router-link id="anchor-join-us" to="/join_us">{{
        t('Join Us')
      }}</router-link>
    </Container>
  </div>
</template>
<script>
  import { defineComponent } from '@vue/runtime-core';
  import { useI18n } from 'vue-i18n';
  import Container from './Container.vue';
  export default defineComponent({
    components: { Container },
    setup() {
      const { t } = useI18n();
      return { t };
    },
  });
</script>

<style scoped>
  .header {
    background-color: #000;
    color: rgba(255, 255, 255, 0.6);
  }

  .header > div {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 16px 0;
  }

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }

  #anchor-join-us.router-link-exact-active {
    color: #fff;
  }
</style>
