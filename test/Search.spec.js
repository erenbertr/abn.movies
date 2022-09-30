import { shallowMount } from '@vue/test-utils'
import Search from '@/components/search/index.vue'
const axios = require('axios');

const factory = () => {
    return shallowMount(Search, {
    });
};


describe('Search', () => {

    const wrapper = factory();

    test("mounts properly", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test("has label", () => {
        expect(wrapper.html()).toContain('search your new world');
    });

    test("has input", () => {
        expect(wrapper.html()).toContain('input');
    });

    test("MAZE API has response", () => {
        return axios.get('https://api.tvmaze.com/search/shows?q=game').then(e => {
            expect(e.status).toBe(200);
        });
    });

    test("MAZE API has data", () => {
        return axios.get('https://api.tvmaze.com/search/shows?q=game').then(e => {
            expect(e.data.length).toBeGreaterThan(0);
        });
    });

})

