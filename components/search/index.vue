<template>
  <div class="search">
    <h1>search your new world</h1>
    <input @change="search" @keyup="lookup" type="text" v-model="keyword" />
  </div>
</template>

<script>
export default {
  methods: {
    search() {
      this.$nuxt.$emit("search", this.keyword);
    },
    lookup() {
      if (this.keyword.length == 0) this.$nuxt.$emit("search", "");
    },
  },
  data() {
    return {
      keyword: "",
    };
  },
};
</script>