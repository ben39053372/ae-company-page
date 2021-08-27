<template lang="">
  <Banner />
  <SubTitleBar />
  <router-view></router-view>
</template>
<script setup>
  import Banner from '../components/joinUs/Banner.vue';
  import SubTitleBar from '../components/joinUs/Navbar.vue';
</script>
