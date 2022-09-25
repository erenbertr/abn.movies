<template>
  <div class="show-types">
    <div class="show-types-list">
      <div
        class="show-types-list-item"
        :class="{ active: filter.type == item.id }"
        @click="select(item.id)"
        v-for="item in list"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
// import { play } from 'ionicons/icons'
export default {
  fetch() {},
  props: ["filter"],
  computed: {},
  created() {},
  beforeDestroy() {},
  methods: {
    select(id) {
      this.filter.type = id;
      this.$nuxt.$emit("filter", this.filter);
    },
  },
  data() {
    return {
      list: [
        {
          id: "",
          name: "All",
        },
        {
          id: "1",
          name: "Scripted",
        },
        {
          id: "2",
          name: "Animation",
        },
        {
          id: "3",
          name: "Reality",
        },
        {
          id: "4",
          name: "Talk Show",
        },
        {
          id: "5",
          name: "Documentary",
        },
        {
          id: "6",
          name: "Game Show",
        },
        {
          id: "7",
          name: "News",
        },
        {
          id: "8",
          name: "Sports",
        },
        {
          id: "9",
          name: "Variety",
        },
        {
          id: "10",
          name: "Award Show",
        },
        {
          id: "11",
          name: "Panel Show",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>