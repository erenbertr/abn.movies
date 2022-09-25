<template>
  <div
    class="shows-list"
    :class="{ hasTabs: tabs.length > 0 }"
    v-if="filter.channel"
  >
    <ShowsListBig :loading="loading" :list="list" />
  </div>
</template>

<script>
export default {
  fetch() {},
  props: ["filter"],
  computed: {},
  created() {
    this.$nuxt.$on("filter", (response) => {
      this.get();
    });
    this.$nuxt.$on("search", (response) => {
      this.search(response);
    });
    this.$nuxt.$on("tabsUpdated", (response) => {
      this.tabs = response;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("filter");
    this.$nuxt.$off("search");
    this.$nuxt.$off("tabsUpdated");
  },
  methods: {
    search(keyword) {
      this.loading = true;
      this.$api
        .$post("/api/search", {
          keyword: keyword,
        })
        .then((response) => {
          if (response.success) {
            this.list = response.list;
            this.loading = false;
          }
        });
    },
    get() {
      this.loading = true;
      this.$api
        .$post(`/api/shows`, {
          filter: this.filter,
        })
        .then((response) => {
          this.list = response.list;
          this.loading = false;
        });
    },
  },
  data() {
    return {
      channel: null,
      loading: true,
      list: [],
      tabs: [],
    };
  },
};
</script>
<style lang="scss">
</style>