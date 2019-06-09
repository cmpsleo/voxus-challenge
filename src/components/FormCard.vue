<template>
  <form
    @submit.prevent="submitForm"
    class="form-card">
    <BaseInput
      v-model="form.name"
      v-validate="'required'"
      :type="'text'"
      :name="'nome completo'"
      :label="'Nome completo'">

      <template v-slot:error>
        <span v-if="errors.has('nome completo')" class="form-error">
          {{ errors.first('nome completo') }}
        </span>
      </template>
    </BaseInput>

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
        v-validate="'required'"
        :type="'tel'"
        :name="'telefone'"
        :label="'Telefone'">

        <template v-slot:error>
          <span v-if="errors.has('telefone')" class="form-error">
            {{ errors.first('telefone') }}
          </span>
        </template>
      </BaseInput>
    </div>
    
    <BaseInput
      v-model="form.email"
      v-validate="'required|email'"
      :type="'email'"
      :name="'e-mail'"
      :label="'Endereço de e-mail'">

      <template v-slot:error>
        <span v-if="errors.has('e-mail')" class="form-error">
          {{ errors.first('e-mail') }}
        </span>
      </template>
    </BaseInput>

    <BaseInput
      v-model="form.company"
      v-validate="'required'"
      :type="'text'"
      :name="'nome da empresa'"
      :label="'Nome da empresa'">

      <template v-slot:error>
        <span v-if="errors.has('nome da empresa')" class="form-error">
          {{ errors.first('nome da empresa') }}
        </span>
      </template>
    </BaseInput>

    <BaseInput
      v-model="form.website"
      v-validate="'required|url'"
      :type="'text'"
      :name="'URL do site'"
      :label="'URL do site'">

      <template v-slot:error>
        <span v-if="errors.has('URL do site')" class="form-error">
          {{ errors.first('URL do site') }}
        </span>
      </template>
    </BaseInput>

    <div class="select-group">
      <Multiselect
        v-model="form.spent"
        v-validate="'required'"
        :options="options.spent"
        :searchable="false"
        :show-labels="false"
        name="verba mensal em mídia"
        placeholder="Verba mensal em mídia" />
      
      <span v-if="errors.has('verba mensal em mídia')" class="form-error">
        {{ errors.first('verba mensal em mídia') }}
      </span>
    </div>

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
import VeeValidate from '@/plugins/VeeValidate.js'

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
      website: '',
      spent: ''
    },
    wasSubmitted: false
  }),
  computed: mapState(['submitted']),
  methods: {
    submitForm() {
      this.$validator.validate().then(valid => {
        if(valid) {
          this.$store.dispatch('submitForm')

          this.wasSubmitted = true
        }
      })
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
