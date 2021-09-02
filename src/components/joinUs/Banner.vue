<template lang="">
  <div class="container">
    <img
      id="banner"
      src="/images/joinUs/导航条_low.png"
      srcset="
        /images/joinUs/导航条_low.png    1x,
        /images/joinUs/导航条_low@2x.png 2x
      "
    />
    <Container class="center">
      <h1>{{ $t('Join Us') }}</h1>
      <h5 class="hr">JOIN US</h5>
      {{ $t('joinUS.banner sub title') }}
    </Container>
  </div>
</template>
<script>
  import Container from '../Container.vue';
  export default {
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
    height: 522px;
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
  .hr {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-family: PingFang-SC-Light;
  }
  .hr::after,
  .hr::before {
    content: '';
    width: 33px;
    height: 1px;
    border-bottom: 1px solid #fff;
    margin: var(--space-lg);
  }
</style>
