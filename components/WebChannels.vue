<template>
  <div class="web-channels">
    <div class="web-channels-list">
      <div
        class="web-channels-list-item"
        :class="{ activated: active.id == item.id }"
        v-for="item in list"
        :key="item.id"
      >
        <div
          class="web-channels-list-item-active"
          :class="{ show: active.id == item.id }"
          :style="`background-color: ${item.active}`"
        ></div>
        <div
          class="web-channels-list-item-image"
          @click="select(item)"
          :style="`background-color: ${item.bg}`"
        >
          <img :src="`/web-channels/${item.logo}`" :alt="`${item.name} logo`" />
        </div>
      </div>

      <div class="web-channels-filter" :class="{ hasFilter }">
        <button @click="openFilter">Filter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    setTimeout(() => {
      this.select(this.list[0]);
    }, 200);
  },
  props: ["filter"],
  computed: {
    hasFilter() {
      if (
        this.filter.type ||
        this.filter.genre ||
        this.filter.language ||
        this.filter.rating ||
        this.filter.runtime ||
        this.filter.network ||
        this.filter.country ||
        this.filter.sort != 1
      )
        return true;

      return false;
    },
  },
  created() {
    this.$nuxt.$on("channel", (response) => {
      this.set(response);
    });
  },
  beforeDestroy() {},
  methods: {
    openFilter() {
      this.$nuxt.$emit("openFilter");
    },
    set(id) {
      this.select(this.list.find((e) => e.id == id));
    },
    select(item) {
      this.active = item;
      this.filter.channel = item.id;
      this.$nuxt.$emit("filter", this.filter);
    },
  },
  data() {
    return {
      active: {},
      list: [
        {
          id: -1,
          name: "ABN",
          logo: "all.png",
          active: "#009586",
          bg: "#000",
        },
        {
          id: 1,
          name: "Netflix",
          logo: "netflix.png",
          active: "#E50914",
          bg: "#E50914",
        },

        {
          id: 287,
          name: "Disney+",
          logo: "disney.png",
          active: "#1A00FA",
          bg: "#040C80",
        },
        {
          id: 310,
          name: "Apple TV+",
          logo: "apple.png",
          active: "#777",
          bg: "#444",
        },

        {
          id: 2,
          name: "hulu",
          logo: "hulu.png",
          active: "#38E783",
          bg: "#38E783",
        },
        {
          id: 21,
          name: "Youtube",
          logo: "youtube.png",
          active: "#FF0000",
          bg: "#FF0000",
        },
        {
          id: 329,
          name: "HBO Max",
          logo: "hbomax.png",
          active: "#8921DE",
          bg: "#8921DE",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>