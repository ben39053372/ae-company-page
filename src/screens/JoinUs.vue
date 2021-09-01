<template lang="">
  <div>
    <Banner />
    <SubTitleBar />
    <router-view></router-view>
  </div>
</template>
<script>
  import Banner from '../components/joinUs/Banner.vue';
  import SubTitleBar from '../components/joinUs/Navbar.vue';
  export default {
    components: {
      Banner,
      SubTitleBar,
    },
  };
</script>
