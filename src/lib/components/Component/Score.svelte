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
  export let score: number = null;
  export let max_combo: number = null;
  export let acc: number = null;
  export let pp: number = null;
  export let time: number = null;
</script>

<div class="relative w-[50%]">
  <img
    src={bgUrl}
    alt=""
    class="max-h-14 rounded-l-xl object-cover min-w-[85%]"
  />
  <div
    class="drop-shadow-lg rounded-xl absolute top-0 bg-gradient-to-r from-white/[.0] to-black h-14 w-full"
  >
    <div
      class="drop-shadow-lg rounded-xl absolute top-0 bg-black/[.4] h-14 w-full"
    />
  </div>
  <div class="absolute top-0">
    <div class="text-white text-sm ml-2 mt-1">{artist}</div>
    <div class="text-white text-sm ml-2 mt-1">{title} [{diff}]</div>
  </div>
  <div class="absolute top-0 right-0">
    {#if show_type === ShownType.Rank }
    <div class="flex flex-row-reverse">
        <img src="{sUrl}" alt="" class="max-h-12 m-1">
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
  {/if}
  </div>
</div>

<style>
</style>
