<template lang="">
  <div class="header">
    <Container>
      <img src="/logos/LOGO.png" />
      <router-link id="anchor-index" class="hiddenOnMobile" to="/">{{
        $t('index')
      }}</router-link>
      <router-link id="anchor-company-profile" class="hiddenOnMobile" to="/">{{
        $t('Company Profile')
      }}</router-link>
      <router-link
        id="anchor-office-environment"
        class="hiddenOnMobile"
        to="/"
        >{{ $t('Office Environment') }}</router-link
      >
      <router-link id="anchor-company-culture" class="hiddenOnMobile" to="/">{{
        $t('Company Culture')
      }}</router-link>
      <router-link id="anchor-contact-us" class="hiddenOnMobile" to="/">{{
        $t('Contact Us')
      }}</router-link>
      <router-link id="anchor-join-us" class="hiddenOnMobile" to="/join_us">{{
        $t('Join Us')
      }}</router-link>
      <LangSelector />
    </Container>
  </div>
</template>
<script setup>
  import Container from './Container.vue';
  import LangSelector from './LangSelector.vue';
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
