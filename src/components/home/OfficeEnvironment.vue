<template lang="">
  <div id="officeEnvironment" class="officeEnvironment">
    <h4>{{ $t('Office Environment') }}</h4>
    <LearnMore class="more" />
    <div class="images">
      <div>
        <img src="/images/homePage/辦公區域.png" />
        <div>{{ $t('Office area') }}</div>
      </div>
      <div>
        <img src="/images/homePage/公共討論區.png" />
        <div>{{ $t('Public discussion area') }}</div>
      </div>
      <div>
        <img src="/images/homePage/咖啡廳.png" />
        <div>{{ $t('Cafe') }}</div>
      </div>
      <div>
        <img src="/images/homePage/公司外景.png" />
        <div>{{ $t('Outdoor Scene') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import LearnMore from '../LearnMore.vue';
  export default {
    components: {
      LearnMore,
    },
  };
</script>

<style scoped>
  .officeEnvironment {
    background-color: #eee;
    background-color: var(--bg-color);
    text-align: center;
    padding: 16px 32px;
  }
  .images {
    display: flex;
    flex-wrap: wrap;
  }
  .images div {
    flex: 1;
    margin: 10px;
    padding-bottom: 30px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .more {
    margin-top: 20px;
    margin-top: var(--space-xl);
    margin-bottom: 40px;
    margin-bottom: calc(var(--space-xl) * 2);
  }
</style>
