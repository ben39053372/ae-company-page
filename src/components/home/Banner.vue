<template lang="">
  <div class="container">
    <img
      id="banner"
      src="images/homePage/导航条.png"
      srcset="images/homePage/导航条.png 1x, images/homePage/导航条@2x.png 2x"
    />
    <Container class="center">
      <h1>{{ $t('HONG KONG ASIA ELITE NETWORK TECHNOLOGY CO., LTD') }}</h1>

      <i18n path="homeBanner.p1" tag="p">
        <span class="red">{{ $t('homeBanner.p1-red') }}</span>
      </i18n>

      <p class="hiddenOnMobile">
        {{ $t('homeBanner.p2') }}
      </p>
    </Container>
    <a class="more">
      {{ $t('learn more') }}
      <img width="4" height="9" src="public/icons/rightArrowWhite.png" />
    </a>
  </div>
</template>
<script lang="ts">
  import Container from '../Container.vue';
  export default {
    name: 'HomeBanner',
    components: {
      Container,
    },
  };
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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    align-items: center;
    transform: translateX(-50%);
  }

  .more img {
    margin-left: var(--space-xs);
  }
</style>
