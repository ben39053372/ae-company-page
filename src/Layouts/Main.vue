<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
  import Header from '../components/Header.vue';
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    name: 'MainLayout',
    components: {
      Header,
    },
  });
</script>
