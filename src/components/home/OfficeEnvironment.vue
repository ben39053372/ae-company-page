<template lang="">
  <div class="officeEnvironment">
    <h2>办公环境</h2>
    <LearnMore class="more" />
    <div class="images">
      <div>
        <img src="/images/homePage/辦公區域.webp" />
        <div>办公区域</div>
      </div>
      <div>
        <img src="/images/homePage/公共討論區.webp" />
        <div>公共讨论区</div>
      </div>
      <div>
        <img src="/images/homePage/咖啡廳.webp" />
        <div>咖啡厅</div>
      </div>
      <div>
        <img src="/images/homePage/公司外景.webp" />
        <div>公司外景</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import LearnMore from '../LearnMore.vue';
  export default defineComponent({
    components: {
      LearnMore,
    },
  });
</script>

<style scoped>
  .officeEnvironment {
    background-color: var(--bg-color);
    text-align: center;
    padding: var(--space-xl) calc(var(--space-3xl) * 2);
  }

  .images {
    display: flex;
    align-items: center;
    gap: var(--space-xl);
  }

  img {
    width: 100%;
    height: 100%;
  }

  .more {
    margin-top: var(--space-xl);
    margin-bottom: calc(var(--space-xl) * 2);
  }
</style>
