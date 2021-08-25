<template>
  <div class="header">
    <Container>
      <img src="/LOGO.png" />
      <a id="anchor-index">{{ t('index') }}</a>
      <a id="anchor-company-profile">{{ t('Company Profile') }}</a>
      <a id="anchor-office-environment">{{ t('Office Environment') }}</a>
      <a id="anchor-company-culture">{{ t('Company Culture') }}</a>
      <a id="anchor-contact-us">{{ t('Contact Us') }}</a>
      <a id="anchor-join-us">{{ t('Join Us') }}</a>
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
</style>
