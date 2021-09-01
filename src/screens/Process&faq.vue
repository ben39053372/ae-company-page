<template lang="">
  <div class="container">
    <Container>
      <svg viewBox="0 0 800 260" width="800" height="260">
        <defs>
          <filter id="solid" x="-0.1" y="0" width="1.2" height="1">
            <feFlood flood-color="#fff" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line y2="165" x2="800" y1="165" x1="0" stroke="#ccc" in="bg" />
        <g transform="translate(60,60)">
          <image href="/icons/发布.png" height="70" width="70" />
          <text
            filter="url(#solid)"
            text-anchor="start"
            font-size="20"
            y="112.5"
          >
            {{ $t('process.Resume delivery') }}
          </text>
          <circle r="3" cx="-10" cy="105" fill="var(--red)" />
        </g>
        <g transform="translate(260,60)">
          <image href="/icons/筛选.png" height="70" width="70" />
          <text
            filter="url(#solid)"
            text-anchor="start"
            font-size="20"
            y="112.5"
          >
            {{ $t('process.Resume screening') }}
          </text>
          <circle r="3" cx="-10" cy="105" fill="var(--red)" />
          <text
            filter="url(#solid)"
            text-anchor="start"
            font-size="14"
            x="0"
            y="150"
            fill="#ccc"
          >
            3-7{{ $t('process.working day') }}
          </text>
        </g>

        <g transform="translate(460,60)">
          <image href="/icons/考试安排.png" height="70" width="70" />
          <text
            filter="url(#solid)"
            text-anchor="start"
            font-size="20"
            y="112.5"
          >
            {{ $t('process.Written interview') }}
          </text>
          <circle r="3" cx="-10" cy="105" fill="var(--red)" />
          <text
            filter="url(#solid)"
            text-anchor="start"
            font-size="14"
            x="-25"
            y="150"
            fill="#ccc"
          >
            2-4{{ $t('process.round') }}，3-7{{ $t('process.working day') }}
          </text>
        </g>

        <g transform="translate(660,60)">
          <image href="/icons/工作包.png" height="70" width="70" />
          <text
            filter="url(#solid)"
            text-anchor="start"
            font-size="20"
            y="112.5"
          >
            {{ $t('process.Get Offer') }}
          </text>
          <circle r="3" cx="-10" cy="105" fill="var(--red)" />
        </g>
      </svg>

      <ol class="faq">
        <li>
          <div>
            <h6>{{ $t('faq.q1') }}</h6>
            <i18n-t keypath="faq.a1" tag="p">
              <span class="red">{{ EMAIL }}</span>
            </i18n-t>
          </div>
        </li>
        <li>
          <div>
            <h6>{{ $t('faq.q2') }}</h6>
            <p>{{ $t('faq.a2') }}</p>
          </div>
        </li>
        <li>
          <div>
            <h6>{{ $t('faq.q3') }}</h6>
            <p>{{ $t('faq.a3') }}</p>
          </div>
        </li>
        <li>
          <div>
            <h6>{{ $t('faq.q4') }}</h6>
            <p>{{ $t('faq.a4') }}</p>
          </div>
        </li>
        <li>
          <div>
            <h6>{{ $t('faq.q5') }}</h6>
            <p>{{ $t('faq.a5') }}</p>
          </div>
        </li>
        <li>
          <div>
            <h6>{{ $t('faq.q6') }}</h6>
            <p>{{ $t('faq.a6') }}</p>
          </div>
        </li>
      </ol>
      <hr />
      <div>
        {{ $t('Email') }}：<span class="red">{{ EMAIL }}</span>
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
    data: function() {
      return {
        EMAIL,
        PHONE,
      };
    },
  };
</script>

<style scoped>
  .container {
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-2xl);
  }

  ol {
    --ball-size: 42px;

    list-style: none;
    counter-reset: counter;
  }

  ol li {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    gap: var(--space-md);
    counter-increment: counter;
    padding-bottom: var(--space-xl);
  }

  ol li h6 {
    margin-top: 0;
    margin-bottom: var(--space-sm);
  }

  ol li::before {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    min-width: var(--ball-size);
    width: var(--ball-size);
    height: var(--ball-size);
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--red);
    color: #fff;
  }

  ol li:nth-child(n + 9)::before {
    content: counter(counter);
  }

  ol li:nth-child(-n + 9)::before {
    content: '0' counter(counter);
  }
</style>
