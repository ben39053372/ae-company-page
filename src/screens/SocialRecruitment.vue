<template lang="">
  <div class="jobList">
    <Container>
      <table>
        <thead>
          <tr>
            <th v-for="(item, i) in Object.keys(jobsData[0])" :key="i">
              {{ $t(`jobList.${item}`) }}
            </th>
            <th>{{ $t('jobList.operation') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(jobs, i) in jobsData" :key="i">
            <td v-for="(jobField, j) in jobs" :key="j">
              {{ jobField }}
            </td>
            <td class="red">
              {{ $t('jobList.check') }}
              <img width="4" height="9" src="/icons/rightArrowRed.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  </div>
</template>
<script>
  import Container from '../components/Container.vue';
  const jobsData = [
    {
      'Job Title': 'Java Developer',
      'Number Of Recruits': 'Recruits1',
      'Working Place': 'Place1',
      'Released At': 'Released1',
    },
    {
      'Job Title': 'Title2',
      'Number Of Recruits': 'Recruits2',
      'Working Place': 'Place2',
      'Released At': 'Released2',
    },
  ];

  export default {
    components: {
      Container,
    },
    data: function() {
      return {
        jobsData,
      };
    },
  };
</script>

<style scoped>
  .jobList {
    margin: 13px auto 29px auto;
  }

  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  thead {
    background-color: var(--gray);
  }

  th,
  td {
    padding: var(--space-2xl) 0;
  }

  tbody {
    color: #666;
    font-size: 14px;
  }

  tbody td {
    border-bottom: 1px solid #ccc;
  }
</style>
