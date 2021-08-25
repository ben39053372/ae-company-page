<template lang="">
  <div class="companyProfile">
    <Container class="container">
      <div class="more">
        <div class="red-block" />
        <LearnMore />
      </div>
      <img
        class="image"
        src="/images/homePage/摄图网_401355724_查看人物简介.webp"
        srcset="
          /images/homePage/摄图网_401355724_查看人物简介.webp    1x,
          /images/homePage/摄图网_401355724_查看人物简介@2x.webp 2x
        "
      />
      <div class="text">
        <h2>{{ t('Company Profile') }}</h2>
        <p>
          {{ t('companyProfile.p1') }}
        </p>
        <h3>{{ t('companyProfile.strategy&target') }}</h3>
        <p>
          {{ t('companyProfile.p2') }}
        </p>
        <p>
          {{ t('companyProfile.p3') }}
        </p>
      </div>
    </Container>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Container from '../Container.vue';
  import LearnMore from '../LearnMore.vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    components: {
      Container,
      LearnMore,
    },
    setup() {
      const { t } = useI18n();
      return {
        t,
      };
    },
  });
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
