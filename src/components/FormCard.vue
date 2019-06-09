<template>
  <div class="form-card">
    hello world
  </div>
</template>

<style lang="scss" scoped>
  .form-card {
    padding: 1rem;
    margin-bottom: 5rem;

    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 0px 4px 40px rgba(116, 130, 150, .2);

    @include media-query('greaterThan', medium) { padding: 1.6rem; }
  }
</style>
