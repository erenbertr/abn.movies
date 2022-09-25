<template>
  <div class="dashboard">
    <WebChannels :filter="filter" />
    <Filters :filter="filter" />
    <Types :filter="filter" />
    <Shows :filter="filter" />
    <Tabs :filter="filter" />
  </div>
</template>

<script>
// import { play } from 'ionicons/icons'
export default {
  fetch() {},
  props: [],
  computed: {},
  created() {
    this.$nuxt.$on("filter", (response) => {
      this.filter = response;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("filter");
  },
  methods: {},
  data() {
    return {
      filter: {
        genre: "",
        language: "",
        type: "",
        rating: "",
        runtime: "",
        network: "",
        country: "",
        channel: "",
        sort: 1,
      },
    };
  },
};
</script>
<style lang="scss">
</style>