<template lang="">
  <div id="officeEnvironment" class="officeEnvironment">
    <h4>{{ $t('Office Environment') }}</h4>
    <LearnMore class="more" />
    <div class="images">
      <div>
        <img src="/images/homePage/辦公區域.webp" />
        <div>{{ $t('Office area') }}</div>
      </div>
      <div>
        <img src="/images/homePage/公共討論區.webp" />
        <div>{{ $t('Public discussion area') }}</div>
      </div>
      <div>
        <img src="/images/homePage/咖啡廳.webp" />
        <div>{{ $t('Cafe') }}</div>
      </div>
      <div>
        <img src="/images/homePage/公司外景.webp" />
        <div>{{ $t('Outdoor Scene') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LearnMore from '../LearnMore.vue';
</script>

<style scoped>
  .officeEnvironment {
    background-color: var(--bg-color);
    text-align: center;
    padding: var(--space-xl) calc(var(--space-3xl) * 2);
  }

  .images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  .images div {
    padding-bottom: 30px;
  }

  @media screen and (max-width: 640px) {
    .images {
      grid-template-columns: repeat(2, 1fr);
    }
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
