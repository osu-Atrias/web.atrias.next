import type { Writable } from "svelte/store"
import { get } from "svelte/store";
import type { Page, State } from "./state";

export default function statefulSwap(state: Writable<State>, initialPage: Page) {
	let nextState = initialPage;
	
	function transitionTo(newState: Page) {
		if(nextState === newState) return;
		nextState = newState
		state.set({ ...get(state), page: null })
	}
	
	function onOutro() {
		state.set({ ...get(state), page: nextState })
	}
	return {
		transitionTo,
		onOutro
	}
}