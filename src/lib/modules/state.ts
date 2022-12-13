import { writable } from "svelte/store";
import type { User } from "./user";
import statefulSwap from "./stateful_swap";

export enum Page {
    Home,
    Login,
    Register,
    User,
    Settings,
    NotFound,
    Leaderboard,
}

export class State {
    public page: Page;
    public user: User;
    constructor() {
        this.page = Page.Home;
        this.user = null;
    }
}

export const state = writable<State>(new State());

export const {onOutro, transitionTo} = statefulSwap(state, Page.Home)