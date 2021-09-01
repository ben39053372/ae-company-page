<template lang="">
  <div id="companyProfile" class="companyProfile">
    <Container class="container">
      <div class="more">
        <div class="red-block" />
        <LearnMore />
      </div>
      <img
        class="image hiddenOnMobile"
        src="/images/homePage/摄图网_401355724_查看人物简介.png"
        srcset="
          /images/homePage/摄图网_401355724_查看人物简介.png    1x,
          /images/homePage/摄图网_401355724_查看人物简介@2x.png 2x
        "
      />
      <div class="text">
        <h4>{{ $t('Company Profile') }}</h4>
        <p>
          {{ $t('companyProfile.p1') }}
        </p>
        <h6>{{ $t('companyProfile.strategy&target') }}</h6>
        <p>
          {{ $t('companyProfile.p2') }}
        </p>
        <p>
          {{ $t('companyProfile.p3') }}
        </p>
      </div>
    </Container>
  </div>
</template>
<script lang="ts">
  import Container from '../Container.vue';
  import LearnMore from '../LearnMore.vue';
  export default {
    name: 'CompanyProfile',
    components: {
      Container,
      LearnMore,
    },
  };
</script>

<style scoped>
  .companyProfile {
    background-color: var(--bg-color);
  }

  .container {
    padding: var(--space-md);
  }

  .red-block {
    display: inline-block;
    width: 43px;
    height: 10px;
    background-color: #c32027;
    background-color: var(--red);
  }

  .image {
    width: 300px;
    height: auto;
    float: right;
    object-fit: cover;
  }

  .more {
    margin-top: 70px;
    margin-bottom: 50px;
  }

  .text {
    padding-top: var(--space-lg);
  }

  .text::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
