import { mount } from "@vue/test-utils";
import ProfessionalSkills from "../../ProfessionalSkillsSection.vue";

describe("ProfessionalSkills", () => {
    test("renders the correct number of skills", () => {
        const wrapper = mount(ProfessionalSkills);
        const skillElements = wrapper.findAll(".skillz");
        const skills = wrapper.vm.skills;

        expect(skillElements).toHaveLength(Object.keys(skills).length);
    });
});
