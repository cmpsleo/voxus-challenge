<template>
  <header class="the-header">
    <div class="wrap">
      <figure class="logo">
        <img class="image" src="@/assets/images/logos/voxus-primary.svg" title="Voxus - Mídia  programática para e-commerces" alt="Voxus - Mídia  programática para e-commerces">
      </figure>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .the-header {
    height: 3.125rem;
    margin-bottom: 3.125rem;

    display: flex;
    align-items: center;

    background-color: #FFF;
    border-bottom: 1px solid rgba(45, 58, 64, .1);

    > .wrap {
      @include media-query('greaterThan', large) {
        width: 940px;
        margin: 0 auto;
      }

      @include media-query('lessThan', large) { padding: 0 1rem; }

      > .logo {
        > .image { height: 1rem }
      }
    }
  }
</style>
