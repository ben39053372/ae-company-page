<template>
  <div class="header">
    <div class="logo">
      <a>CompanyLogo</a>
    </div>
    <div class="links">
      <a>Home</a>
      <a>Contact</a>
      <a>About</a>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({});
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    background-color: #eae0d5;
  }

  .links > * {
    margin: 5px 10px;
  }
</style>
