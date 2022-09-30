<template>
  <div class="dashboard show" v-if="!loading">
    <div class="show-left">
      <div class="show-image">
        <img :src="$image(show, true)" :alt="`${show.name} cover`" />
      </div>
    </div>
    <div class="show-right">
      <h1 class="show-title">
        {{ show.name }}
      </h1>
      <div class="show-genres">
        <div class="show-genres-item" v-for="genre in show.genres" :key="genre">
          {{ genre }}
        </div>
      </div>
      <div class="show-summary" v-html="show.summary"></div>

      <table class="show-table">
        <tr>
          <td>Premiered</td>
          <td>{{ show.premiered }}</td>
        </tr>
        <tr>
          <td>Average Runtime</td>
          <td>{{ show.averageRuntime }} mins</td>
        </tr>
        <tr>
          <td>Status</td>
          <td>{{ show.status }}</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>{{ show.type }}</td>
        </tr>
        <tr v-if="show.network">
          <td>Network</td>
          <td>
            <a :href="show.network.officialSite" target="_blank"
              >{{ show.network.name }}
              <small>({{ show.network.country.name }})</small></a
            >
          </td>
        </tr>
        <tr v-if="show.webChannel">
          <td>Web Channel</td>
          <td>
            <a :href="show.webChannel.officialSite" target="_blank">{{
              show.webChannel.name
            }}</a>
          </td>
        </tr>
      </table>

      <div class="show-footer">
        <a :href="show.officialSite" target="_blank" class="show-button watch"
          >Watch &nbsp;now</a
        >

        <a
          :href="`https://www.imdb.com/title/${show.externals.imdb}`"
          target="_blank"
          class="show-button imdb"
          >IMDb</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { play } from 'ionicons/icons'
export default {
  fetch() {
    this.id = this.$route.params.id;
    this.get();
  },
  props: [],
  computed: {},
  created() {},
  beforeDestroy() {},
  methods: {
    get() {
      this.loading = true;
      this.$maze.$get(`shows/${this.id}`, {}).then((response) => {
        this.loading = false;
        this.show = response;
      });
    },
  },
  data() {
    return {
      loading: true,
      id: "",
    };
  },
};
</script>
<style lang="scss">
</style>