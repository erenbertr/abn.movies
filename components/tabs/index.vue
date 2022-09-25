<template>
  <div class="tabs" :class="{ hasShow: tabs.length > 0 }">
    <div class="tabs-nav">
      <div
        class="tabs-nav-item"
        :key="tab.id"
        @click="set(tab)"
        :class="{ active: activeTab.id == tab.id }"
        v-for="tab in tabs"
      >
        <span>{{ tab.name }}</span>
        <a @click="close(tab.id)">X</a>
      </div>

      <div class="tabs-nav-item" v-if="tabs.length > 5">
        <span class="close-all" @click="closeAll()">Close All</span>
      </div>
    </div>

    <a class="tabs-nav-close-mobile" @click="closeAll()">close</a>

    <div class="tabs-list">
      <div
        class="tabs-list-item"
        v-for="tab in tabs"
        :class="{ active: activeTab.id == tab.id }"
      >
        <div class="tabs-list-item-image">
          <div
            class="tabs-list-item-image-bg"
            :style="`background-image: url(${tab.image.original})`"
          ></div>
          <a :href="tab.image.original" target="_blank"
            ><img :src="tab.image.original" :alt="`${tab.name} poster`"
          /></a>
          <div class="tabs-list-item-rating">
            {{ tab.rating.average }}
          </div>
        </div>
        <div class="tabs-list-item-title">
          {{ tab.name }}
        </div>
        <div class="tabs-list-item-genres">
          <div class="tabs-list-item-genres-item" v-for="genre in tab.genres">
            {{ genre }}
          </div>
        </div>
        <div class="tabs-list-item-description" v-html="tab.summary"></div>

        <table class="tabs-list-item-table">
          <tr>
            <td>Premiered</td>
            <td>{{ tab.premiered }}</td>
          </tr>
          <tr>
            <td>Average Runtime</td>
            <td>{{ tab.averageRuntime }} mins</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{{ tab.status }}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{{ tab.type }}</td>
          </tr>
          <tr v-if="tab.network">
            <td>Network</td>
            <td>
              <a :href="tab.network.officialSite" target="_blank"
                >{{ tab.network.name }}
                <small>({{ tab.network.country.name }})</small></a
              >
            </td>
          </tr>
          <tr v-if="tab.webChannel">
            <td>Web Channel</td>
            <td>
              <a :href="tab.webChannel.officialSite" target="_blank">{{
                tab.webChannel.name
              }}</a>
            </td>
          </tr>
        </table>

        <div class="tabs-list-item-footer">
          <a
            :href="tab.officialSite"
            target="_blank"
            class="tabs-list-item-watch"
            >Watch &nbsp;now</a
          >

          <a
            :href="`https://www.imdb.com/title/${tab.externals.imdb}`"
            target="_blank"
            class="tabs-list-item-imdb"
            >IMDb</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {},
  props: ["filter"],
  computed: {},
  created() {
    this.$nuxt.$on("openTab", (id) => {
      var find = this.tabs.find((e) => e.id == id);
      if (find && find.id == this.activeTab.id) {
        this.close(id);
        return false;
      }
      if (find) {
        this.set(find);
        return false;
      }

      this.$api.$get(`/api/show/${id}`, {}).then((response) => {
        if (response.success) {
          if (find == undefined || !find) this.tabs.push(response.data);
          this.set(response.data);
        }
      });
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("openTab");
  },
  methods: {
    closeAll() {
      this.tabs = [];
      this.activeTab = {};
      this.$nuxt.$emit("tabsUpdated", this.tabs);
    },
    close(id) {
      this.tabs = this.tabs.filter((e) => e.id != id);
      if (this.tabs) this.set(this.tabs[0]);
      this.$nuxt.$emit("tabsUpdated", this.tabs);
    },
    set(tab) {
      this.activeTab = tab;
      this.$nuxt.$emit("tabsUpdated", this.tabs);
    },
  },
  data() {
    return {
      activeTab: {},
      tabs: [],
    };
  },
};
</script>
<style lang="scss">
</style>