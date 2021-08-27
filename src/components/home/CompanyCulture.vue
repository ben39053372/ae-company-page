<template lang="">
  <div class="companyCulture">
    <h4>{{ $t('Company Culture') }}</h4>
    <LearnMore />
    <div class="grid">
      <div id="vision">
        <img
          width="74"
          height="76"
          src="/images/homePage/企业愿景.webp"
          srcset="
            /images/homePage/企业愿景.webp    1x,
            /images/homePage/企业愿景@2x.webp 2x
          "
        />
        <h4>{{ $t('companyCulture.vision.title') }}</h4>
        <h6>{{ $t('companyCulture.vision.sub') }}</h6>
        <p>
          {{ $t('companyCulture.vision.p') }}
        </p>
      </div>

      <div id="mission">
        <img
          width="79"
          height="80"
          src="/images/homePage/企业使命.webp"
          srcset="
            /images/homePage/企业使命.webp    1x,
            /images/homePage/企业使命@2x.webp 2x
          "
        />
        <h4>{{ $t('companyCulture.mission.title') }}</h4>
        <h6>{{ $t('companyCulture.mission.sub') }}</h6>
        <p>
          {{ $t('companyCulture.mission.p') }}
        </p>
      </div>
      <div id="values">
        <img
          width="97"
          height="73"
          src="/images/homePage/眼睛.webp"
          srcset="
            /images/homePage/眼睛.webp    1x,
            /images/homePage/眼睛@2x.webp 2x
          "
        />
        <h4>{{ $t('companyCulture.values.title') }}</h4>
        <h6>{{ $t('companyCulture.values.sub') }}</h6>
        <p>
          {{ $t('companyCulture.values.p') }}
        </p>
      </div>
      <div id="management">
        <img width="76" height="75" src="/images/homePage/互联网.webp" />
        <h4>{{ $t('companyCulture.management.title') }}</h4>
        <h6>{{ $t('companyCulture.management.sub') }}</h6>
        <p>
          {{ $t('companyCulture.management.p') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import LearnMore from '../LearnMore.vue';
</script>

<style scoped>
  .companyCulture {
    text-align: center;
  }

  .grid {
    display: grid;
    grid-gap: 10px;
    margin: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .grid > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: calc(var(--space-xl) * 3);
    background-color: var(--bg-color);
  }

  #values {
    background-color: var(--red);
    color: #fff;
  }
</style>
