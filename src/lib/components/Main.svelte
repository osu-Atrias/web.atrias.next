<script lang="ts">
  import Sidebar from "./Layout/Sidebar.svelte";
  import NotificationPanel from "./Widget/NotificationPanel.svelte";
  import Home from "./Pages/Home.svelte";
  import Login from "./Pages/Login.svelte";
  import Registion from "./Pages/Registion.svelte";
  import NotFound from "./Pages/NotFound.svelte";
  import Leaderboard from "./Pages/Leaderboard.svelte";
  import { state, Page } from "../modules/state";
  import User from "./Pages/User.svelte";
  import { onOutro } from "../modules/state";
  import { fly } from "svelte/transition";
  import Settings from "./Pages/Settings.svelte";

  $: current_page = $state.page;

  state.subscribe((s) => {
    console.log(s.page);
  });
</script>

{#if current_page === Page.Home}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <Home />
  </div>
{:else if current_page === Page.User}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <User />
  </div>
{:else if current_page === Page.Login}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <Login />
  </div>
{:else if current_page === Page.Register}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <Registion />
  </div>
{:else if current_page === Page.NotFound}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <NotFound />
  </div>
{:else if current_page === Page.Leaderboard}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <Leaderboard />
  </div>
{:else if current_page === Page.Settings}
  <div in:fly={{ x: -100 }} out:fly={{ x: -100 }} on:outroend={onOutro}>
    <Settings />
  </div>
{/if}

<NotificationPanel />
<Sidebar />
