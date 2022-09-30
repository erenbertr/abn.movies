<template>
  <div class="shows-list">
    <div class="shows-list-group" v-show="searching">
      <div class="shows-list-group-title">Searching for {{ keyword }}</div>
      <ShowsLoading v-if="searchLoading" />
      <ShowsNotFound v-else-if="notFound" />
      <ShowsSlider v-else :list="searchList" />
    </div>
    <div class="shows-list-group" v-for="group in groups" :key="group.title">
      <div class="shows-list-group-title">{{ group.title }}</div>
      <ShowsSlider v-if="!loading" :list="$getShows(group, list)" />
      <ShowsLoading v-else />
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    this.get();
  },
  props: [],
  computed: {
    searching() {
      return this.keyword.length > 2;
    },
    notFound() {
      return this.searchList.length <= 0;
    },
  },
  created() {
    this.$nuxt.$on("search", (response) => {
      this.keyword = response;
      this.search();
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("search");
  },
  methods: {
    search() {
      if (!this.searching) return false;
      this.searchLoading = true;
      this.$maze.$get("search/shows?q=" + this.keyword, {}).then((response) => {
        var list = response.map((e) => {
          return e.show;
        });
        this.searchList = list;
        this.searchLoading = false;
      });
    },
    get() {
      this.loading = true;

      this.$maze.$get("shows", {}).then((response) => {
        this.list = response;
        this.loading = false;
      });
    },
  },
  data() {
    return {
      searchLoading: false,
      searchList: [],
      groupShows: {},
      swiperOptions: {
        freeMode: true,
        slidesPerGroup: 2,
        navigation: {
          nextEl: ".swiper-nav-next",
          prevEl: ".swiper-nav-prev",
        },
        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        },
      },
      keyword: "",
      groups: [
        {
          title: "Best rated",
          filter: "rating",
        },
        {
          title: "Drama",
          filter: "genre",
        },
        {
          title: "Comedy",
          filter: "genre",
        },
        {
          title: "Sports",
          filter: "genre",
        },
        {
          title: "Action",
          filter: "genre",
        },
        {
          title: "Adventure",
          filter: "genre",
        },
      ],
      loading: true,
      list: [],
    };
  },
};
</script>
<style lang="scss">
</style>