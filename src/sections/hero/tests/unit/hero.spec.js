import {
    mount
} from "@vue/test-utils";
import Hero from "../../HeroView.vue";
import texts from "../../data.json";

describe("Hero", () => {
    test("affiche le message de bienvenue", () => {
        const wrapper = mount(Hero);
        const welcomeMessage = wrapper.find(".title-min").text();
        expect(welcomeMessage).toBe(texts._home.say_hello + " " +"👋");
    });

    test("affiche le nom correct", () => {
        const wrapper = mount(Hero);

        // Vérifie que le nom est correctement rendu
        const name = wrapper.find(".text-3xl").text();
        expect(name).toBe(texts._home.name);
    });

    test("affiche les titres correctement", () => {
        const wrapper = mount(Hero);

        const title = wrapper.find(".mt-5").text();
        expect(title).toContain(texts._home.title_1);
    });
});

