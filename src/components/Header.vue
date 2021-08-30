<template lang="">
  <div class="header">
    <Container>
      <img
        class="showOnMobile"
        src="/icons/hamburger.svg"
        @click="onHamburgerClick"
      />
      <img src="/logos/LOGO.png" />
      <div :class="[{ hidden: !open }, 'links']">
        <router-link id="anchor-index" to="/">
          {{ $t('index') }}
        </router-link>
        <router-link id="anchor-company-profile" to="/#companyProfile">
          {{ $t('Company Profile') }}
        </router-link>
        <router-link id="anchor-office-environment" to="/#officeEnvironment">
          {{ $t('Office Environment') }}
        </router-link>
        <router-link id="anchor-company-culture" to="/#companyCulture">
          {{ $t('Company Culture') }}
        </router-link>
        <router-link id="anchor-contact-us" to="/#contactUs">
          {{ $t('Contact Us') }}
        </router-link>
        <router-link id="anchor-join-us" :to="{ name: 'Company benefits' }">
          {{ $t('Join Us') }}
        </router-link>
      </div>
      <LangSelector />
    </Container>
  </div>
  <div v-if="open" class="backdrop" @click="open = false" />
</template>
<script setup>
  import { ref } from 'vue';
  import Container from './Container.vue';
  import LangSelector from './LangSelector.vue';

  const open = ref(false);
  const onHamburgerClick = () => {
    open.value = !open.value;
  };
</script>

<style scoped>
  .header {
    background-color: #000;
    color: rgba(255, 255, 255, 0.6);
  }

  .header > div {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
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

  .links {
    display: flex;
    padding: 0 var(--space-xl);
    flex: 1;
    justify-content: space-around;
  }

  .container {
    position: relative;
  }

  @media screen and (max-width: 530px) {
    .links {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 1;
      flex-direction: column;
      width: 100%;
      padding: 0;
      background-color: #000;
    }

    .links a {
      padding: var(--space-md) 0;
      border-bottom: 1px solid #fff;
    }

    .hidden {
      display: none;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
</style>
