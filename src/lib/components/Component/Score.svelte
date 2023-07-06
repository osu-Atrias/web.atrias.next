<script lang="ts">
  import { ShownType, Size } from "../../modules/score";
  import bgUrl from "./card.jpg";
  import sUrl from "./ranking-S-small@2x.png";
  import Time from "svelte-time";

  export let artist: string;
  export let title: string;
  export let diff: string;
  export let show_type: ShownType;
  export let size: Size;
  let score: number = null;
  let max_combo: number = null;
  let acc: number = null;
  let pp: number = null;
  let time: Date = null;
  let play_count: number = null;

  let size_num: number;
  switch (size) {
    case Size.Small:
      size_num = 14;
      break;
    case Size.Medium:
      size_num = 16;
      break;
    case Size.Large:
      size_num = 28;
      break;
  }
</script>

<div class="relative shadow-2xl">
  <img
    src={bgUrl}
    alt=""
    class="h-{size_num} rounded-l-xl object-cover min-w-[85%]"
  />
  <div
    class="drop-shadow-lg rounded-xl absolute top-0 bg-gradient-to-r from-white/[.0] to-black h-{size_num} w-full"
  >
    <div
      class="drop-shadow-lg rounded-xl absolute top-0 bg-black/[.4] h-{size_num} w-full"
    />
  </div>
  <div class="absolute top-0 h-{size_num}">
    <div class="text-white text-sm ml-2 mt-1">{artist}</div>
    <div class="text-white text-sm ml-2 mt-1">{title} [{diff}]</div>
  </div>
  {#if show_type === ShownType.Rank}
    <div class="absolute top-0 right-0">
      <div class="flex flex-row-reverse">
        <img src={sUrl} alt="" class="max-h-12 m-1" />
        <div class="text-xs text-right">
          <div class="flex flex-col">
            <div>
              {score} / {max_combo}x {acc}%
            </div>
            <div>
              <Time
                class="text-white text-sm"
                timestamp={time}
                format="YYYY-MM-DD HH:mm:ss"
              />
            </div>
            <div>
              {pp} pp
            </div>
          </div>
        </div>
      </div>
    </div>
  {:else if show_type === ShownType.Times}
  <div class="absolute bottom-0 right-3">
    <div class="text-white text-2xl">
      {play_count}
    </div>
  </div>
  {/if}
</div>

<style>
</style>
