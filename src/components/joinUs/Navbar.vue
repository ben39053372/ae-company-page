<template lang="">
  <div class="subTitleBar">
    <div class="m-h">
      <Container class="container">
        <!-- <router-link :to="{ name: 'Social Recruitment' }">
          {{ $t('joinUS.Social recruitment') }}
        </router-link> -->
        <router-link :to="{ name: 'Company benefits' }">
          {{ $t('joinUS.Company benefits') }}
        </router-link>
        <router-link :to="{ name: 'Process & FAQ' }">
          {{ $t('joinUS.Process & FAQ') }}
        </router-link>
        <router-link :to="{ name: 'Resume Delivery' }">
          {{ $t('joinUS.Resume delivery') }}
        </router-link>
      </Container>
    </div>
  </div>
</template>
<script setup>
  import Container from '../Container.vue';
</script>

<style scoped>
  .subTitleBar {
    background-color: var(--gray);
    padding: 30px;
    font-size: 14px;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .container * {
    padding: var(--space-xs);
  }

  .m-h {
    margin-left: 25%;
    margin-right: 25%;
  }

  a {
    color: #1e1e20;
    text-decoration: none;
    font-weight: bold;
  }

  a.router-link-exact-active {
    color: var(--red);
  }
</style>
