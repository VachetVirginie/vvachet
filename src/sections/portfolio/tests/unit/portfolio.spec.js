import { shallowMount } from "@vue/test-utils";
import Portfolio from "../../PortfolioSection.vue";

describe("Portfolio", () => {
    it("renders correctly", () => {
        const wrapper = shallowMount(Portfolio, {
            propsData: {
                msg: "Test message",
            },
        });

        expect(wrapper.exists()).toBe(true);
    });

    it("renders the MainChips component", () => {
        const wrapper = shallowMount(Portfolio, {
            propsData: {
                msg: "Test message",
            },
        });

        expect(wrapper.findComponent({ name: "MainChips" }).exists()).toBe(true);
    });

    it("sets the \"msg\" prop correctly", () => {
        const msg = "Test message";
        const wrapper = shallowMount(Portfolio, {
            propsData: {
                msg: msg,
            },
        });

        expect(wrapper.props("msg")).toBe(msg);
    });
});
