import { writable } from "svelte/store";

export const registion_data = writable({
    name: "",
    email: "",
    password: "",
    key: "",
})