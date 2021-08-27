<template lang="">
  <div class="langSelector">
    <div class="trigger" @click="onTriggerClick">
      <img v-if="selectedLang?.id === 'zh-HK'" src="/icons/hk.webp" />
      <img v-if="selectedLang?.id === 'zh-CN'" src="/icons/china.webp" />
      <span class="hiddenOnMobile">{{ selectedLang?.name }}</span>
    </div>
    <div v-if="open" class="backdrop" @click="closeLangList" />
    <div v-show="open" class="list">
      <div
        v-for="(lang, i) in langs"
        :key="i"
        class="langItem"
        @click="onLangSelect(lang)"
      >
        <img v-if="lang.id === 'zh-HK'" src="/icons/hk.webp" />
        <img v-if="lang.id === 'zh-CN'" src="/icons/china.webp" />
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  const open = ref(false);
  const langs = [
    { id: 'zh-HK', name: '繁體中文' },
    { id: 'zh-CN', name: '简体中文' },
  ];
  const { locale } = useI18n();

  const selectedLang = computed(() => langs.find(i => i.id === locale.value));

  const onTriggerClick = () => {
    console.log(open.value);
    open.value = !open.value;
  };

  const onLangSelect = lang => {
    locale.value = lang.id;
  };

  const closeLangList = () => {
    open.value = false;
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
    align-items: center;
    gap: var(--space-md);
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
    width: 120px;
    padding: var(--space-sm);
    background-color: #000;
    text-align: center;
    justify-content: center;
    gap: var(--space-md);
    align-items: center;
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
