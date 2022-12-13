<script lang="ts">
  import GoNote from "svelte-icons/go/GoNote.svelte";
  import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";
  import { _ } from "svelte-i18n";
  import Notification from "./Notification.svelte";
  import {
    NotificationType,
    notifications,
    addNotification,
    NotificationMessage,
    setAllRead,
  } from "../../modules/notification";
  import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';


  $: unread_count = $notifications.filter((n) => !n.alreadyRead).length;
</script>

<div
  class="offcanvas offcanvas-end max-w-full bg-white bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 border-none"
  tabindex="-1"
  id="offcanvasRight"
  aria-labelledby="offcanvasRightLabel"
>
  <div
    class="offcanvas-header flex items-center justify-between bg-blue-200 m-1 shadow-xl"
  >
    <h5
      class="offcanvas-title mb-0 leading-normal font-semibold"
      id="offcanvasRightLabel"
    >
      {$_("notifications")}
    </h5>
    <button
      type="button"
      class="box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      <IoIosArrowForward />
    </button>
    <button
      on:click={() => {
        //randomly choose a notification type
        const types = Object.values(NotificationType);
        const type = types[Math.floor(Math.random() * types.length)];
        addNotification(type, "Test notification" + Math.random());
      }}
    >
      add test notification
    </button>
  </div>
  <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
    {#each [...$notifications].reverse() as notification, i (notification)}
      <div animate:flip={{duration: 200}} transition:scale>
        <Notification
          index={$notifications.length - i - 1}
          message={notification.message}
          title={notification.title}
          type={notification.type}
        />
      </div>
    {/each}
  </div>
</div>

<button
  class="absolute bottom-0 right-0 w-14 h-14 m-2 inline-flex rounded shadow-md bg-blue-300 hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasRight"
  aria-controls="offcanvasRight"
  on:click={setAllRead}
>
  {#if unread_count > 0}
    <div
      class="absolute inline-block top-0 right-0 bottom-auto left-auto -translate-x-[140%] -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded-full z-10"
    >
      {unread_count}
    </div>
  {/if}
  <div
    class="flex items-center justify-center text-center rounded-lg shadow-lg p-2"
  >
    <div class="m-1">
      <GoNote />
    </div>
  </div>
</button>
