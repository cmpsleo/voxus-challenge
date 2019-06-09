<template>
  <div class="form-card">
    <BaseInput
      v-for="(item, index) in schema"
      :key="index"
      :label="item.label" />

    <div class="bottom">
      <button class="btn -primary" @click="submitForm">Experimentar gratuitamente</button>

      <transition name="fade">
        <div class="feedback" v-if="submitted">Entraremos em contato em até 24hs úteis.</div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import BaseInput from './BaseInput'

export default {
  data: () => ({
    schema: [
      { label: 'Nome completo' },
      { label: 'Telefone' },
      { label: 'Endereço de e-mail' },
      { label: 'Nome da empresa' },
      { label: 'URL do site' }
    ]
  }),
  components: {
    BaseInput
  },
  computed: mapState(['submitted']),
  methods: mapActions(['submitForm'])
}
</script>


<style lang="scss" scoped>
  .form-card {
    position: relative;

    padding: 1rem;
    margin-bottom: 3rem;

    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 0px 4px 40px rgba(116, 130, 150, .2);

    @include media-query('greaterThan', medium) { padding: 1.6rem 10.6rem 5rem; }

    > .bottom {
      padding: 0 1rem;

      > .feedback {
        padding: .6rem 1.25rem;
        
        font-size: .8rem;
        border-radius: 3px;
        text-align: center;
        background-color: #F5F7FA;
        color: map-get($gray-color, dark);

        @include media-query('greaterThan', medium) {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        @include media-query('lessThan', medium) { margin-top: 1rem; }
      }
    }
  }
</style>
