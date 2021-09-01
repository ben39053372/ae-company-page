<template lang="">
  <div id="contactUs" class="contactUs">
    <h1>{{ $t('Contact Us') }}</h1>

    <div class="grid">
      <hr class="hiddenOnMobile" />

      <div>
        <div>
          <img width="34" height="48" src="/images/homePage/地址.png" />
        </div>
        <span class="detail">{{ $t('company address') }}</span>
      </div>

      <div>
        <div>
          <img width="49" height="49" src="/images/homePage/电话.png" />
        </div>
        <span class="detail">{{ $t('phone') }}</span>
      </div>

      <div>
        <div>
          <img width="47" height="39" src="/images/homePage/邮箱.png" />
        </div>
        <span class="detail">{{ HR_EMAIL }}</span>
      </div>

      <div>
        <div>
          <img width="51" height="51" src="/images/homePage/互联网金额.png" />
        </div>
        <span class="detail">{{ WEB }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { HR_EMAIL, WEB } from '../../const';
  export default {
    data: function() {
      return {
        HR_EMAIL,
        WEB,
      };
    },
  };
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
    display: flex;
    position: relative;
    left: 0;
    justify-content: space-around;
    padding-bottom: 100px;
  }

  .grid > div {
    border-radius: 50%;
    height: 100px;
    height: var(--circle-size);
    width: 100px;
    width: var(--circle-size);
    box-shadow: inset 0 0 8px 1px #fff9;
    background-color: #21222a;
    border: 1px solid #fff;
    z-index: 1;
    position: relative;
  }

  .grid > div > div {
    border-radius: 50%;
    width: 100%;
    height: 100%;
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
    background: #fff;
    background: linear-gradient(to right, #fff3, #fff, #fff3);
    height: 2px;
    width: 100%;
    position: absolute;
    top: 45px;
    top: calc(var(--circle-size) / 2 - 5px);
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
  }

  @media screen and (max-width: 1024px) {
    .contactUs {
      --circle-size: 80px;

      font-size: 10px;
    }

    hr {
      display: none;
    }

    .grid {
      grid-template-columns: var(--circle-size) var(--circle-size);
      -ms-grid-columns: var(--circle-size) var(--circle-size);
      grid-gap: 30%;
    }

    .grid > div {
      margin-bottom: var(--space-3xl);
    }
  }

  span {
    position: absolute;
    white-space: nowrap;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 50px;
    padding-top: var(--space-3xl);
  }
</style>
