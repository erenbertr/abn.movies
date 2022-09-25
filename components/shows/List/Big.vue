<template>
  <div class="shows-list-big">
    <div class="shows-list-big-items" v-if="loading">
      <div
        class="shows-list-big-items-item loading"
        v-for="item in 20"
        :key="item"
      >
        <div class="shows-list-big-items-item-image"></div>
      </div>
    </div>
    <div class="shows-list-big-items" v-else-if="hasShows">
      <div
        class="shows-list-big-items-item"
        v-for="item in list"
        :key="item.id"
        :class="{ open: isOpen(item.id) }"
        @click="tab(item.id)"
      >
        <div class="shows-list-big-items-item-image">
          <img
            :src="item.image"
            v-if="item.image"
            :alt="`${item.name} cover`"
          />
        </div>
        <div class="shows-list-big-items-item-rating" v-if="item.rating">
          <b>{{ item.rating }} ✭ </b> {{ item.count }}
        </div>
      </div>
    </div>
    <div v-else>
      <div class="shows-list-big-not-found">
        <span>No shows yet. You can check back later.</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { play } from 'ionicons/icons'
export default {
  fetch() {},
  props: ["list", "title", "loading"],
  computed: {
    hasShows() {
      return this.list.length > 0;
    },
  },
  created() {
    this.$nuxt.$on("tabsUpdated", (response) => {
      this.tabs = response;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("tabsUpdated");
  },
  methods: {
    isOpen(id) {
      return this.tabs.find((e) => id == e.id);
    },
    tab(id) {
      this.$nuxt.$emit("openTab", id);
    },
  },
  data() {
    return {
      tabs: [],
    };
  },
};
</script>
<style lang="scss">
</style>