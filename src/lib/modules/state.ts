import { get, writable } from "svelte/store";
import type { User } from "./user";
import statefulSwap from "./stateful_swap";
import navaid from "navaid";

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

let router = navaid();

router.on("/home", () => {
    get(state).page = Page.Home
});

router.on("/leaderboard", () => {
    get(state).page = Page.Leaderboard
});

router.on("/user", () => {
    get(state).page = Page.User
});

router.on("/login", () => {
    get(state).page = Page.Login
});

router.on("/registion", () => {
    get(state).page = Page.Register
});

router.on("/settings", () => {
    get(state).page = Page.Settings
});


router.listen();

export const { onOutro, transitionTo } = statefulSwap(state, Page.Home)
