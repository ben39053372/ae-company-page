<template lang="">
  <div class="footer">
    <Container>
      <ol>
        <li>
          上述所示分期付款金额仅为使用特定期数免息分期付款估算得出的示例（仅显示整数数额，未显示小数点以后的金额)，实际支付金额以银行或花呗账单为准。最高可享
          24 期免息分期，到 Apple Store
          零售店和在线商店购买时可享受的免息分期期数和最低限额可能有所不同，银行和花呗提供的免息分期期数和最低限额可能有所不同。实际折抵金额取决于设备的状况、配置、制造年份，以及发售国家或地区。银行或花呗可能要求你的可用信用额度大于所购买产品的总金额，才能使用分期付款服务。有关信用卡或花呗分期服务的申请及使用问题，请与银行或花呗联系，Apple
          对此不做任何承诺和保证。Apple 的折抵换购服务为 Apple 与 Apple
          折抵服务合作伙伴共同推出，年满 18
          周岁及以上者才能享受此项折抵换购服务。店内折抵换购需出示政府颁发并附有照片的有效身份证件
          (当地法律可能会要求存储该信息)。可能需要遵守 Apple 或 Apple
          折抵服务合作伙伴的其他条款。本折抵换购服务不能与 Apple
          的其他优惠或折扣活动同时使用。如需了解更多免息分期付款信息，请点击此处。
        </li>
      </ol>
      <hr />
      <div></div>
      <div>
        更多选购方式：查找你附近的 Apple Store 零售店及更多门店，或者致电
        400-666-8800。
      </div>
    </Container>
  </div>
</template>
<script>
  import Container from './Container.vue';
  export default {
    components: {
      Container,
    },
  };
</script>

<style scoped>
  .footer {
    display: none;
    background-color: var(--footer-color);
  }
</style>
