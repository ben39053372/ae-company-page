<template lang="">
  <div class="learnMore red">
    <span class="text">{{ $t('learn more') }}</span>
    <img
      width="4"
      height="9"
      src="/icons/rightArrowRed.webp"
      srcset="/icons/rightArrowRed.webp 1x, /icons/rightArrowRed@2x.webp 2x"
    />
  </div>
</template>

<style scoped>
  .learnMore {
    display: inline-flex;
    align-items: center;
  }

  .text {
    margin: 0 var(--space-sm);
  }
</style>
