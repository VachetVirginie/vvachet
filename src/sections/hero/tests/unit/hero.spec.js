import { mount } from "@vue/test-utils";
import Hero from "../../HeroView.vue";

describe("Hero", () => {
    test("affiche le message de bienvenue", () => {
        const wrapper = mount(Hero);

        const welcomeMessage = wrapper.find(".title-min").text();
        expect(welcomeMessage).toBe("Hola 👋");
    });

    test("affiche le nom correct", () => {
        const wrapper = mount(Hero);

        // Vérifie que le nom est correctement rendu
        const name = wrapper.find(".text-3xl").text();
        expect(name).toBe("Virginie Vachet");
    });

    test("affiche les titres correctement", () => {
        const wrapper = mount(Hero);

        const title = wrapper.find(".mt-5").text();
        expect(title).toContain("Developpeuse web Front et Back end, vivant à Lyon.");
    });
});

