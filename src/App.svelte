<script>
  import { _, locale } from 'svelte-i18n'
  import Main from './lib/components/Main.svelte'
  locale.set('en')
</script>

<svelte:head>
  <title>{$_('page_title')}</title>
</svelte:head>


<Main />
