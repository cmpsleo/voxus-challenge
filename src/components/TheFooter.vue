<template>
  <footer class="the-footer">
    <figure class="logo">
      <img class="image" src="@/assets/images/logos/voxus-secondary.svg" title="Voxus - Mídia  programática para e-commerces" alt="Voxus - Mídia  programática para e-commerces">
    </figure>

    <nav class="links">
      <a class="item" href="#">Termos de serviço</a>
      <a class="item" href="#">Política de privacidade</a>
      <a class="item" href="#">Opções de anúncio</a>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
  .the-footer {
    padding: 1.25rem 0 3.125rem;
    
    border-top: 2px solid rgba(0, 0, 0, .1);

    @include media-query('greaterThan', large) {
      width: 940px;
      margin: 0 auto;
    }

    @include media-query('greaterThan', medium) {
      display: flex;
      align-items: center;
    }

    @include media-query('lessThan', large) { padding: 1.25rem 1rem 3.125rem; }

    > .logo {
      height: 1rem;

      @include media-query('greaterThan', medium) { margin-right: 1.25rem; }

      @include media-query('lessThan', small) { margin-bottom: .625rem; }

      > .image { height: 100%; }
    }

    > .links {
      > .item {
        transition: .3s;
        font-size: .875rem;
        color: map-get($gray-color, normal);
        
        @include media-query('greaterThan', medium) {
          &:not(:last-of-type) { margin-right: 1.25rem; }

          &:hover {
            color: $primary-color;
            transition: .3s;
          }
        }

        @include media-query('lessThan', small) {
          display: block;

          &:not(:last-of-type) { margin-bottom: .625rem; }
        }
      }
    }
  }
</style>
