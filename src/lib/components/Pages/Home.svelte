<script lang="ts">
  import { user, test_login } from "../../modules/user";
  import { _ } from "svelte-i18n";
</script>

<div class="flex items-stretch min-h-screen bg-blue-100">
  <div class="flex self-center mr-auto ml-auto">
    <div class="flex flex-col">
      <div class="home-h1">Atrias</div>
      <div class="home-h2">アトリは、高性能ですから!</div>
      <div class="flex flex-row">
        <button class="slide button">{$_("login_in")}</button>
        <button class="slide button">{$_("sign_up")}</button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .home-h1 {
    font-family: "Jost", sans-serif;
    font-size: 3rem;
  }
  .home-h2 {
    font-family: "Jost", sans-serif;
    font-size: 1.5rem;
  }

  .slide:hover,
  .slide:focus {
    box-shadow: inset 8rem 0 0 0 var(--hover);
  }

  $colors: (
    slide: #19bc8b,
  );

  @each $button, $color in $colors {
    .#{$button} {
      --color: #{$color};
      --hover: #{adjust-hue($color, 45deg)};
    }
  }

  button {
    color: var(--color);
    transition: 0.25s;

    &:hover,
    &:focus {
      border-color: var(--hover);
      color: #fff;
    }
  }

  button {
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    border-radius: 1rem;
  }
</style>
