<template>
  <div class="form-card">
    <BaseInput
      v-model="form.name"
      :type="'text'"
      :label="'Nome completo'" />

    <BaseInput
      v-model="form.phone"
      v-mask="'(##) #####-####'"
      :type="'tel'"
      :label="'Telefone'" />
    
    <BaseInput
      v-model="form.email"
      :type="'email'"
      :label="'Endereço de e-mail'" />

    <BaseInput
      v-model="form.company"
      :type="'text'"
      :label="'Nome da empresa'" />

    <BaseInput
      v-model="form.website"
      :type="'url'"
      :label="'URL do site'" />

    <div class="bottom">
      <button
        v-if="!wasSubmitted"
        @click="submitForm"
        class="btn -primary">Experimentar gratuitamente</button>
      <button
        v-else
        class="btn -primary -disabled">Obrigado</button>

      <transition name="fade">
        <p
          v-if="submitted"
          class="feedback">Entraremos em contato em até 24hs úteis.</p>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { mask } from 'vue-the-mask'

import BaseInput from './BaseInput'

export default {
  directives: { mask },
  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      company: ''
    },
    wasSubmitted: false
  }),
  components: {
    BaseInput
  },
  computed: mapState(['submitted']),
  methods: {
    submitForm(target) {
      this.$store.dispatch('submitForm')

      this.wasSubmitted = true
    }
  }
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
