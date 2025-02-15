import { writable } from "svelte/store";
import { messagePv } from "$lib/stores/mpStore";
import { scenarios } from "$lib/scripts/scenario";
import { scenariosEn } from "$lib/scripts/scenarioEn";
import { scenariosEs } from "$lib/scripts/scenarioEs";
import { langue } from "$lib/stores/langueStore";

export const currentScenario = writable<string>("start");
export const messages = writable<any[]>([]);
export const responses = writable<any[]>([]);

export async function loadScenario(scenarioKey: string, currentLang: string) {
    let scenario;
    
    switch (currentLang) {
        case "en":
            scenario = scenariosEn[scenarioKey];
            break;
        case "es":
            scenario = scenariosEs[scenarioKey];
            break;
        case "fr":
        default:
            scenario = scenarios[scenarioKey];
            break;
    }

    if (!scenario) return;

    currentScenario.set(scenarioKey);
    responses.set([...scenario.responses]);

    messages.update((msgs) => [...msgs]);

    for (const msg of scenario.messages) {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (msg.mp) {
            messagePv.set(msg.mp);
        }

        messages.update((msgs) => [
            ...msgs,
            { 
                ...msg, 
                heure: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            }
        ]);
    }
}
