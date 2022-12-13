<script lang="ts">
  import Sidebar from "./Layout/Sidebar.svelte";
  import NotificationPanel from "./Widget/NotificationPanel.svelte";
  import Home from "./Pages/Home.svelte";
  import Login from "./Pages/Login.svelte";
  import NotFound from "./Pages/NotFound.svelte";
  import Leaderboard from "./Pages/Leaderboard.svelte";
  import { state, Page } from "../modules/state";

  $: current_page = $state.page;
</script>

<NotificationPanel />
<Sidebar />

{#if current_page === Page.Home}
  <div>
    <Home />
  </div>
{:else if current_page === Page.Login}
  <div>
    <Login />
  </div>
{:else if current_page === Page.NotFound}
  <div>
    <NotFound />
  </div>
{:else if current_page === Page.Leaderboard}
  <div>
    <Leaderboard />
  </div>
{/if}
