<template lang="">
  <div class="contactUs">
    <h1>聯系我們</h1>
    <div class="grid">
      <div>
        <div>
          <img width="34" height="48" src="/images/homePage/地址.webp" />
        </div>
        <span class="detail">{{ t('company address') }}</span>
      </div>

      <div>
        <div>
          <img width="49" height="49" src="/images/homePage/电话.webp" />
        </div>
        <span class="detail">{{ t('phone') }}</span>
      </div>

      <div>
        <div>
          <img width="47" height="39" src="/images/homePage/邮箱.webp" />
        </div>
        <span class="detail">hr@asia-elites.net</span>
      </div>

      <div>
        <div>
          <img width="51" height="51" src="/images/homePage/互联网金额.webp" />
        </div>
        <span class="detail">www.asia-elites.com</span>
      </div>
    </div>

    <hr />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    setup() {
      const { t } = useI18n();
      return { t };
    },
  });
</script>

<style scoped>
  .contactUs {
    --circle-size: 100px;

    margin-top: -10px;
    text-align: center;
    color: #fff;
    padding: calc(var(--space-3xl) * 3) 0;
    background: linear-gradient(90deg, #21222a 0%, #262939 50%, #21222a 100%);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, var(--circle-size));
    grid-auto-rows: var(--circle-size);
    grid-gap: 20%;
    justify-content: center;
    align-items: center;
  }

  .grid > div {
    border-radius: 50%;
    height: var(--circle-size);
    box-shadow: inset 0 0 8px 1px #fff9;
    background-color: #21222a;
    border: 1px solid #fff;
    z-index: 1;
    position: relative;
  }

  .grid > div > div {
    border-radius: 50%;
    height: var(--circle-size);
    box-shadow: 0 0 8px 1px #fff9;
    position: relative;
    z-index: 2;
  }

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  hr {
    border: 0;
    background: linear-gradient(to right, #fff3, #fff, #fff3);
    height: 2px;
    width: 100%;
    position: relative;
    top: calc(calc(var(--circle-size) + 12px) / -2);
    transform: translateY(-50%);
    z-index: 0;
  }

  span {
    position: absolute;
    white-space: nowrap;
    transform: translateX(-50%);
    padding-top: var(--space-3xl);
  }
</style>
