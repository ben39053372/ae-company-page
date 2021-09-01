<template lang="">
  <div class="learnMore red">
    <span class="text">{{ $t('learn more') }}</span>
    <img
      width="4"
      height="9"
      src="/icons/rightArrowRed.png"
      srcset="/icons/rightArrowRed.png 1x, /icons/rightArrowRed@2x.png 2x"
    />
  </div>
</template>

<style scoped>
  .learnMore {
    display: inline-flex;
    /* display: -webkit-box; */
    /* display: -webkit-flex; */
    /* display: -ms-flexbox; */
    align-items: center;
  }

  .text {
    margin: 0px 8px;
    margin: 0px var(--space-sm);
  }
</style>
