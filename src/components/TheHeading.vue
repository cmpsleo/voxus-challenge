<template>
  <hgroup class="the-heading">
    <h1 class="title">Você está a poucos passos de otimizar suas campanhas!</h1>
    
    <h2 class="text">Queremos conhecer mais sobre sua empresa para melhorar sua experiência com a Voxus.</h2>
  </hgroup>
</template>

<style lang="scss" scoped>
  .the-heading {
    text-align: center;

    @include media-query('greaterThan', medium) { margin-bottom: 4.5rem; }

    @include media-query('lessThan', medium) {
      margin-bottom: 3.5rem;
      padding: 0 1rem;
    }

    > .title {
      padding-bottom: 1.1rem;

      font-weight: 500;
      color: map-get($gray-color, dark);

      @include media-query('greaterThan', medium) { font-size: 2rem; }
    }

    > .text {
      color: map-get($gray-color, normal);
      font: {
        size: .875rem;
        weight: normal;
      };
    }
  }
</style>
