<template>
  <div class="langSelector">
    <div class="trigger" @click="onTriggerClick">
      <img v-if="selectedLang.id === 'zh-HK'" src="/icons/hk.png" />
      <img v-if="selectedLang.id === 'zh-CN'" src="/icons/china.png" />
      <span class="hiddenOnMobile">{{ selectedLang.name }}</span>
    </div>
    <div v-if="open" class="backdrop" @click="closeLangList" />
    <div v-show="open" class="list">
      <div
        v-for="(lang, i) in langs"
        :key="i"
        class="langItem"
        @click="onLangSelect(lang)"
      >
        <img v-if="lang.id === 'zh-HK'" src="/icons/hk.png" />
        <img v-if="lang.id === 'zh-CN'" src="/icons/china.png" />
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>
<script scoped>
  export default {
    data: function() {
      return {
        open: false,
        langs: [
          { id: 'zh-HK', name: '繁體中文' },
          { id: 'zh-CN', name: '简体中文' },
        ],
      };
    },
    methods: {
      onTriggerClick() {
        this.open = !this.open;
      },
      onLangSelect(lang) {
        this.$root.$i18n.locale = lang.id;
      },
      closeLangList() {
        this.open = false;
      },
    },
    computed: {
      selectedLang: function() {
        console.log(this.$root.$i18n);
        return this.langs.find(i => i.id === this.$root.$i18n.locale);
      },
    },
  };
</script>

<style scoped>
  .langSelector {
    position: relative;
  }

  img {
    width: 22px;
    height: 22px;
  }

  .trigger {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    align-items: center;
    gap: var(--space-md);
    cursor: pointer;
  }

  .list {
    position: absolute;
    left: 50%;
    top: 100%;
    margin-top: 10px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .list div {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    position: relative;
    right: 0;
    width: 120px;
    padding: var(--space-sm);
    background-color: #000;
    text-align: center;
    justify-content: center;
    gap: var(--space-md);
    align-items: center;
    cursor: pointer;
  }

  @media screen and (max-width: 530px) {
    .list {
      right: 0;
      left: initial;
      transform: initial;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
</style>
