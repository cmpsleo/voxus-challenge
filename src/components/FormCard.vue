<template>
  <div class="form-card">
    <BaseInput :label="'Nome completo'" />

    <BaseInput :label="'Telefone'" />

    <BaseInput :label="'Endereço de e-mail'" />

    <BaseInput :label="'Nome da empresa'" />

    <BaseInput :label="'URL do site'" />

    <div class="actions">
      <button class="btn -primary">Experimentar gratuitamente</button>
    </div>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
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
