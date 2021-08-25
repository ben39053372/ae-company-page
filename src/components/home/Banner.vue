<template lang="">
  <div class="container">
    <img
      id="banner"
      src="/images/homePage/导航条.webp"
      srcset="
        /images/homePage/导航条.webp    1x,
        /images/homePage/导航条@2x.webp 2x
      "
    />
    <Container class="center">
      <h1>{{ t('HONG KONG ASIA ELITE NETWORK TECHNOLOGY CO., LTD') }}</h1>

      <i18n-t keypath="homeBanner.p1" tag="p">
        <span class="red">{{ t('homeBanner.p1-red') }}</span>
      </i18n-t>

      <p>
        {{ t('homeBanner.p2') }}
      </p>
    </Container>
    <a class="more"
      >{{ t('learn more') }}
      <img width="4" height="9" src="/images/homePage/rightArrowWhite.webp"
    /></a>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Container from '../Container.vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'HomeBanner',
    components: {
      Container,
    },
    setup() {
      const { t } = useI18n();
      return { t };
    },
  });
</script>

<style scoped>
  .container {
    position: relative;
    text-align: center;
  }

  #banner {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 30px 0;
  }

  .red {
    color: #c32027;
  }

  .more {
    position: absolute;
    bottom: 10%;
    z-index: 1;
    left: 50%;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .more img {
    margin-left: var(--space-xs);
  }
</style>
