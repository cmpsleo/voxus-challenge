<template>
  <form
    @submit.prevent="submitForm"
    class="form-card">
    <BaseInput
      v-model="form.name"
      :type="'text'"
      :label="'Nome completo'" />

    <div class="select-flag">
      <Multiselect
        v-model="form.country"
        :options="options.country"
        :searchable="false"
        :show-labels="false">
        <template slot="singleLabel" slot-scope="props">
          <i :class="props.option.flag"></i>
        </template>

        <template slot="option" slot-scope="props">
          <i :class="props.option.flag"></i>

          <span>{{ props.option.title }}</span>
        </template>
      </Multiselect>

      <BaseInput
        v-model="form.phone"
        v-mask="'(##) #####-####'"
        :type="'tel'"
        :label="'Telefone'" />
    </div>
    
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

    <Multiselect
      v-model="form.spent"
      :options="options.spent"
      :searchable="false"
      :show-labels="false"
      placeholder="Verba mensal em mídia" />

    <div class="bottom">
      <button
        v-if="!wasSubmitted"
        type="submit"
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
  </form>
</template>

<script>
import { mapState } from 'vuex'

import { mask } from 'vue-the-mask'
import Multiselect from 'vue-multiselect'

import BaseInput from './BaseInput'

export default {
  directives: { mask },
  components: {
    BaseInput,
    Multiselect
  },
  data: () => ({
    options: {
      country: [
        { title: 'Brasil', flag: 'flag-brazil' },
        { title: 'Dinamarca', flag: 'flag-denmark' },
        { title: 'Espanha', flag: 'flag-spain' },
        { title: 'Reino Unido', flag: 'flag-united-kingdom' },
        { title: 'Estados Unidos', flag: 'flag-united-states' }
      ],
      spent: [
        '<= R$ 5.000',
        '>= R$ 5.001 e <= R$ 30.000',
        '>= R$ 30.001 e <= R$ 100.000',
        '>= R$ 100.001 e <= R$ 500.000',
        '>= R$ 500.001',
        'Não se aplica'
      ]
    },
    form: {
      name: '',
      country: {
        title: 'Brasil',
        flag: 'flag-brazil'
      },
      phone: '',
      email: '',
      company: '',
      spent: ''
    },
    wasSubmitted: false
  }),
  computed: mapState(['submitted']),
  methods: {
    submitForm(target) {
      this.$store.dispatch('submitForm')

      this.wasSubmitted = true

      console.log(this.form)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
  .form-card {
    position: relative;

    padding: 1rem;
    margin-bottom: 3rem;

    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 0px 4px 40px rgba(116, 130, 150, .2);

    @include media-query('greaterThan', medium) { padding: 1.6rem 10rem 5rem; }

    > .select-flag {
      display: grid;
      grid-template-columns: 4rem auto;
    }

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
