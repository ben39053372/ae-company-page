<template lang="">
  <div class="resumeDelivery">
    <Container class="container">
      <div class="box">
        <img
          width="33"
          height="25"
          src="/images/resumeDelivery/邮箱.png"
          srcset="
            /images/resumeDelivery/邮箱.png    1x,
            /images/resumeDelivery/邮箱@2x.png 2x
          "
        />
        <h6>{{ $t('resume.Resume receiving and consultation email') }}</h6>
        <p>
          {{ $t('resume.Contact person') }}：張小姐 <br />
          {{ EMAIL }}
        </p>
      </div>
      <div class="box">
        <img
          width="23"
          height="28"
          src="/images/resumeDelivery/电话.png"
          srcset="
            /images/resumeDelivery/电话.png    1x,
            /images/resumeDelivery/电话@2x.png 2x
          "
        />
        <h6>{{ $t('resume.Human Resources Department Phone number') }}</h6>
        <p>
          {{ $t('resume.Contact person') }}：張小姐 <br />
          {{ PHONE }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
  import Container from '../components/Container.vue';
  import { EMAIL, PHONE } from '../const';

  export default {
    components: {
      Container,
    },
    data: function () {
      return {
        EMAIL,
        PHONE,
      };
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: calc(var(--space-3xl) * 3);
    margin-bottom: calc(var(--space-3xl) * 3);
    padding: 0 20%;
  }
  .box {
    padding: var(--space-3xl) calc(var(--space-3xl) * 3);
    margin: var(--space-md) auto;
    background-color: var(--gray);
    text-align: center;
  }
</style>
