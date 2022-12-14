<script>
    import { _ } from "svelte-i18n";
    import bgUrl from "./345t3.jpg";

    import TopPanel from "./UserComponents/TopPanel.svelte";
</script>

<div class="bg-blue-100 min-w-screen ml-16 max-h-screen flex flex-row">
    <div class="flex max-h-screen">
        <img src="{bgUrl}" alt="background" class="p-2 object-cover rounded-3xl">
    </div>
</div>

<div class="absolute top-0 left-0 jostfont w-screen">
    <div class="ml-16">
        <div class="ml-28 mr-28 mt-3 flex flex-col">
            <div class="basis-1/4">
                <TopPanel />
            </div>
        </div>
    </div>
</div>