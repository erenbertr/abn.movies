import { shallowMount, get, mount, createLocalVue } from '@vue/test-utils'
const axios = require('axios');
import Shows from '@/components/shows/index.vue'
import ShowsLoading from '@/components/shows/Loading.vue'
import ShowsNotFound from '@/components/shows/NotFound.vue'
import ShowsSlider from '@/components/shows/Slider.vue'


describe('Shows', () => {

    let wrapper;

    wrapper = shallowMount(Shows, {
        mocks: {
            $nuxt: {
                $emit: () => [],
                $on: () => [],
                $off: () => [],
            },
        },
        components: {
            'ShowsLoading': ShowsLoading,
            'ShowsSlider': ShowsSlider,
            'ShowsNotFound': ShowsNotFound
        },
    })

    test("mounts properly", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    test("has seearching list", () => {
        expect(wrapper.html()).toContain('Searching for');
    });

    test("MAZE API has response", () => {
        return axios.get('https://api.tvmaze.com/shows').then(e => {
            expect(e.status).toBe(200);
        });
    });

    test("MAZE API has data", () => {
        return axios.get('https://api.tvmaze.com/shows').then(e => {
            expect(e.data.length).toBeGreaterThan(0);
        });
    });

})

