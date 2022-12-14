<script lang="ts">
  import avaUrl from "./atri_ava_small.png";
  import Score from "../../Component/Score.svelte";
  import { ShownType, Size } from "../../../modules/score";
</script>

<div class="bg-black/[.5] h-[12rem] text-white rounded-t-xl">
  <div class="rounded-t-xl w-full h-12 bg-black/[.6] flex">
    <div class="flex flex-row">
      <div class="m-3 flex flex-col">
        <div
          class="bg-slate-400 h-6 w-14 absolute rounded-br-lg rounded-tl-lg pl-1 translate-x-[4.5rem] translate-y-[6.5rem]"
        >
          Offline
        </div>
        <img src={avaUrl} alt="" class="max-h-[8rem] rounded-2xl" />
        <div class="text-xs ml-2 mt-1">Last seen 2 hours ago</div>
      </div>
      <div class="flex flex-col">
        <div class="text-3xl mt-2 ml-1">MyAngelATRI</div>
        <div class="text-sm ml-2">Joined August 2021</div>
        <div class="text-4xl font-bold mt-3 ml-1">#51</div>
      </div>
    </div>
    <div class="flex mr-2 ml-auto w-[75%]">
      <div class="w-1/3">
        <div class="mt-12">Achievements</div>
        <div class="bg-black/[.5] w-full h-[7rem] rounded-lg" />
      </div>
      <div class="w-2/3 ml-3 flex flex-col mt-10">
        <div class="mt-3">
          <Score artist={"kakichoco"} title={"Zan'ei"} diff={"Illusion"} show_type={ShownType.Rank} size={Size.Small}/>
        </div>
        <div class="mt-3">
          <Score artist={"kakichoco"} title={"Zan'ei"} diff={"Illusion"} show_type={ShownType.Rank} size={Size.Small}/>
        </div>
      </div>
    </div>
  </div>
</div>
