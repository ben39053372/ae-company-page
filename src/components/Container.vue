<template lang="">
  <div class="container"><slot></slot></div>
</template>

<style scoped>
  .container {
    max-width: calc(100% - 28px);
    margin: 0 auto;
  }

  @media only screen and (min-width: 640px) {
    .container {
      max-width: 90%;
    }
  }

  @media only screen and (min-width: 768px) {
    .container {
      max-width: 80%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .container {
      max-width: 75%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .container {
      max-width: 70%;
    }
  }

  @media only screen and (min-width: 1536px) {
    .container {
      max-width: 65%;
    }
  }
</style>
