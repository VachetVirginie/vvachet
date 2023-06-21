import { mount } from "@vue/test-utils";
import Career from "../../CareerSection.vue";

describe("Career", () => {
    it("renders the component", () => {
        const wrapper = mount(Career);
        expect(wrapper.exists()).toBe(true);
    });

    it("has the correct data", () => {
        const wrapper = mount(Career);
        const datas = wrapper.vm.datas;

        expect(datas._about.step_1.label).toBe("Step 1");
        expect(datas._about.step_1.title).toBe("Les Bases");
    });
});
