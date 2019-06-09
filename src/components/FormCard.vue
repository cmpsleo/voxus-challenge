<template>
  <div class="form-card">
    <BaseInput
      v-for="(item, index) in schema"
      :key="index"
      :label="item.label" />

    <div class="actions">
      <button class="btn -primary">Experimentar gratuitamente</button>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>


<style lang="scss" scoped>
  .form-card {
    padding: 1rem;
    margin-bottom: 5rem;

    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 0px 4px 40px rgba(116, 130, 150, .2);

    @include media-query('greaterThan', medium) { padding: 1.6rem 10.6rem; }

    > .actions { padding: 0 1rem; }
  }
</style>
