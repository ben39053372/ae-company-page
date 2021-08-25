<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default defineComponent({
    name: 'MainLayout',
    components: {
      Header,
      Footer,
    },
  });
</script>
