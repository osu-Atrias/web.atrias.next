import { writable, get } from "svelte/store";

export const user = writable(null);

export class User {
    public name: string;
    public email: string;
}


export function test_login() {
    if (get(user) === null) {
        user.set({
            name: "John Doe",
        });
    } else {
        user.set(null);
    }
}