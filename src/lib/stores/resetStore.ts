import { get } from "svelte/store";
import { currentScenario, messages, responses, loadScenario } from "../stores/gameStore";
import { messagePv } from "$lib/stores/mpStore";
import { langue } from "$lib/stores/langueStore";
import { goto } from "$app/navigation";

export function reset() {

    localStorage.removeItem("currentScenario");
    localStorage.removeItem("messages");
    
    localStorage.removeItem("currentScenarioO");
    localStorage.removeItem("messagesO");
    
    localStorage.removeItem("currentScenarioB");
    localStorage.removeItem("messagesB");

    currentScenario.set("start");
    messages.set([]);
    responses.set([]);

    messagePv.set("reinitialiser");
    
    localStorage.setItem("isAccueilVisible", "true");
    localStorage.setItem("notifOrlaneDisplayed", "false");
    localStorage.setItem("conversationOrlaneAffichee", "false");
    localStorage.setItem("notifBergamoteDisplayed", "false");
    localStorage.setItem("conversationBergamoteAffichee", "false");

    loadScenario("start", get(langue));
    goto('/');
}