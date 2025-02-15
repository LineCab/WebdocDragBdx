import { writable } from "svelte/store";

const storedLang = typeof window !== "undefined" ? localStorage.getItem("langue") : "fr";
export const langue = writable<string>(storedLang || "fr");

langue.subscribe((value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("langue", value);
    }
});
