<template lang="">
  <div id="companyCulture" class="companyCulture">
    <h4>{{ $t('Company Culture') }}</h4>
    <LearnMore />
    <div class="grid">
      <div id="vision">
        <img
          width="74"
          height="76"
          src="/images/homePage/企业愿景.png"
          srcset="
            /images/homePage/企业愿景.png    1x,
            /images/homePage/企业愿景@2x.png 2x
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
          src="/images/homePage/企业使命.png"
          srcset="
            /images/homePage/企业使命.png    1x,
            /images/homePage/企业使命@2x.png 2x
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
          src="/images/homePage/眼睛.png"
          srcset="/images/homePage/眼睛.png 1x, /images/homePage/眼睛@2x.png 2x"
        />
        <h4>{{ $t('companyCulture.values.title') }}</h4>
        <h6>{{ $t('companyCulture.values.sub') }}</h6>
        <p>
          {{ $t('companyCulture.values.p') }}
        </p>
      </div>
      <div id="management">
        <img width="76" height="75" src="/images/homePage/互联网.png" />
        <h4>{{ $t('companyCulture.management.title') }}</h4>
        <h6>{{ $t('companyCulture.management.sub') }}</h6>
        <p>
          {{ $t('companyCulture.management.p') }}
        </p>
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
  .companyCulture {
    text-align: center;
  }

  p,
  h4,
  h6 {
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
    overflow-wrap: break-word;
    hyphens: auto;
  }

  .grid {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }

  .grid > div {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 60px;
    padding: calc(var(--space-xl) * 3);
    background-color: #eaeaea;
    background-color: var(--bg-color);
    flex: 40%;
  }

  #values {
    background-color: #c32027;
    background-color: var(--red);
    color: #fff;
  }
</style>
