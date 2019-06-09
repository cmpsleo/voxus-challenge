<template>
  <transition name="fade">
    <p class="form-terms" v-if="submitted">
      *Para usar o trial grátis você precisa ser um e-commerce e concordar com os termos e requisitos do trial gratuito. Saiba mais em:
      <a class="link" href="#">Termos e requisitos de trial gratuito</a>
    </p>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['submitted'])
}
</script>

<style lang="scss" scoped>
  .form-terms {
    margin-bottom: 5rem;
    text-align: center;
    font-size: .875rem;
    color: map-get($gray-color, normal);

    > .link {
      color: $primary-color;
      text-decoration: underline;
    }
  }
</style>
