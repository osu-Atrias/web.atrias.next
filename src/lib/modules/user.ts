import { writable, get, type Writable } from "svelte/store";

export const user: Writable<User | null> = writable(null);

export class User {
    public id: number;
    public name: string;
    public email: string;
    public online: boolean;
    public last_seen: Date;
    public joined_at: Date;
    rank: number;
}


// test code
export function test_login() {
    if (get(user) === null) {
        user.set({
            id: 1,
            name: "MyAngelATRI",
            email: "test@test.com",
            online: true,
            last_seen: new Date(),
            joined_at: new Date(),
            rank: 1,
        });
    } else {
        user.set(null);
    }
}

test_login();