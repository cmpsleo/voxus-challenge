<template>
  <main>
    <TheHeader />

    <section>
      <TheHeading />
    </section>
    
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import TheHeading from './components/TheHeading'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheHeading
  }
}
</script>
