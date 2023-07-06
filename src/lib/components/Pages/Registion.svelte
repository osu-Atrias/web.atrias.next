<script>
    import { registion_data } from "../../modules/registion";
    import { _ } from "svelte-i18n";
</script>

<div class="bg-blue-100 min-h-screen">
    <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-20">
                    <form class="mt-8">
                        <div class="mx-auto max-w-lg">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600"
                                    >Username</span
                                >
                                <input
                                    placeholder=""
                                    type="text"
                                    class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600"
                                    >Email</span
                                >
                                <input
                                    placeholder=""
                                    type="email"
                                    class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600"
                                    >Password</span
                                >
                                <input
                                    placeholder=""
                                    type="password"
                                    class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600"
                                    >Password Confirm</span
                                >
                                <input
                                    placeholder=""
                                    type="password"
                                    class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>

                            <button
                                class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
