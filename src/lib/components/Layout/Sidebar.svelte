<script lang="ts">
  import IoMdHome from "svelte-icons/io/IoMdHome.svelte";
  import IoIosStats from "svelte-icons/io/IoIosStats.svelte";
  import IoIosListBox from "svelte-icons/io/IoIosListBox.svelte";
  import MdSettings from "svelte-icons/md/MdSettings.svelte";
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte";
  import StatusPanel from "../Widget/StatusPanel.svelte";
  import { _ } from "svelte-i18n";
  import { user, test_login } from "../../modules/user";
  import { Page, state } from "../../modules/state";
  import { fly } from 'svelte/transition';
  import Leaderboard from "../Pages/Leaderboard.svelte";
  const selected_class = "rounded-r-none shadow-none translate-x-2";
  $: selected = $state.page;

  function set(page: Page){
    $state.page = page;
  }
</script>

<div
  class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-blue-300 text-gray-600 shadow-lg jost"
>
  <button disabled={selected === Page.Home} class="sidebar-icon group {selected === Page.Home ? selected_class : ""}" on:click={() => set(Page.Home)}>
    <div class="m-2">
      <span class="sidebar-tooltip group-enabled:group-hover:scale-100">
        {$_("home")}
      </span>
      <IoMdHome />
    </div>
  </button>
  <button disabled={selected === Page.Leaderboard} class="sidebar-icon group {selected === Page.Leaderboard ? selected_class : ""}" on:click={() => set(Page.Leaderboard)}>
    <div class="m-2">
      <span class="sidebar-tooltip group-enabled:group-hover:scale-100">
        {$_("leaderboard")}
      </span>
      <IoIosListBox />
    </div>
  </button>
  {#if $user === null}
    <button disabled={selected === Page.User} class="sidebar-icon group blink {selected === Page.User ? selected_class : ""}" transition:fly="{{ x: -50, duration: 200 }}" on:click={() => set(Page.User)}>
      <div class="m-2">
        <span class="sidebar-tooltip group-enabled:group-hover:scale-100">
          {$_("account")}
        </span>
        <MdAccountCircle />
      </div>
    </button>
  {/if}
  <button disabled={selected === Page.Settings} class="sidebar-icon group mt-auto mb-0 {selected === Page.Settings ? selected_class : ""}" on:click={() => set(Page.Settings)}>
    <div class="m-2">
      <span class="sidebar-tooltip group-hover:scale-100">
        {$_("settings")}
      </span>
      <MdSettings />
    </div>
  </button>
  <button class="sidebar-icon group">
    <div class="m-2">
      <span class="sidebar-status group-hover:scale-100">
        <div>
          <StatusPanel />
        </div>
      </span>
      <IoIosStats />
    </div>
  </button>
</div>

<style>
  .jost {
    font-family: "Jost", sans-serif;
  }

  .blink {
  animation: blinker 300ms ease-in-out 2;
}

@keyframes blinker {
  50% {
    background-color: rgb(118, 95, 247);
  }
}
</style>
