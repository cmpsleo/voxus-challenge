<template>
  <main>
    <TheHeader />

    <section>
      <TheHeading />

      <FormCard />

      <FormTerms />
    </section>
    
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheHeading from './components/TheHeading'
import FormCard from './components/FormCard'
import FormTerms from './components/FormTerms'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheHeading,
    FormCard,
    FormTerms
  }
}
</script>

<style lang="scss" scoped>
  section {
    margin: 0 1rem;

    @include media-query('greaterThan', medium) {
      width: 620px;
      margin: 0 auto;
    }
  }
</style>
