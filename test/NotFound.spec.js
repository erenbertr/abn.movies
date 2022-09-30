import { shallowMount } from '@vue/test-utils'
import NotFound from '@/components/shows/NotFound.vue'

const factory = () => {
    return shallowMount(NotFound, {
    });
};


describe('NotFound', () => {

    const wrapper = factory();

    test("mounts properly", () => {
        expect(wrapper.vm).toBeTruthy();
    });
    test("has text", () => {
        expect(wrapper.html()).toContain('No shows found for now.');
    });
})

