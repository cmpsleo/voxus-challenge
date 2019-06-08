<template>
  <header class="the-header">
    <figure class="logo">
      <img class="image" src="@/assets/images/logos/voxus-primary.svg" title="Voxus - Mídia  programática para e-commerces" alt="Voxus - Mídia  programática para e-commerces">
    </figure>
  </header>
</template>

<style lang="scss" scoped>
  .the-header {
    width: 100%;
    height: 3.125rem;
    padding: 0 1rem;
    margin-bottom: 3.125rem;

    display: flex;
    align-items: center;

    background-color: #FFF;
    border-bottom: 1px solid rgba(45, 58, 64, .1);

    @include media-query('greaterThan', large) {
      padding: 0 12rem;
      margin-bottom: 3.75rem;
    }

    > .logo {
      > .image { height: 1rem }
    }
  }
</style>
