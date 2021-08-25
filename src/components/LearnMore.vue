<template lang="">
  <div class="learnMore red">
    <span class="text">{{ t('learn more') }}</span>
    <img
      width="4"
      height="9"
      src="/images/homePage/rightArrowRed.webp"
      srcset="
        /images/homePage/rightArrowRed.webp    1x,
        /images/homePage/rightArrowRed@2x.webp 2x
      "
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';
  export default defineComponent({
    setup() {
      const { t } = useI18n();
      return { t };
    },
  });
</script>

<style scoped>
  .learnMore {
    display: inline-flex;
    align-items: center;
  }

  .text {
    margin: 0 var(--space-sm);
  }
</style>
