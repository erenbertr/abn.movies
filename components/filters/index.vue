<template>
  <div class="filters" :class="{ open: isFilterOpen }">
    <div class="filters-close" @click="closeFilter">close</div>
    <div class="filters-group">
      <div class="filters-group-item">
        <div class="filters-group-item-title">Search</div>
        <div class="filters-group-item-input">
          <input type="text" v-model="keyword" @keypress="key($event)" />
        </div>
      </div>
      <div class="filters-group-item is-show-type">
        <div class="filters-group-item-title">Show Type</div>
        <div class="filters-group-item-input">
          <select v-model="filter.type" @change="set('type', $event)">
            <option value="">All</option>
            <option value="1">Scripted</option>
            <option value="2">Animation</option>
            <option value="3">Reality</option>
            <option value="4">Talk Show</option>
            <option value="5">Documentary</option>
            <option value="6">Game Show</option>
            <option value="7">News</option>
            <option value="8">Sports</option>
            <option value="9">Variety</option>
            <option value="10">Award Show</option>
            <option value="11">Panel Show</option>
          </select>
        </div>
      </div>
      <div class="filters-group-item">
        <div class="filters-group-item-title">Genre</div>
        <div class="filters-group-item-input">
          <select v-model="filter.genre" @change="set('genre', $event)">
            <option value="">All</option>
            <option value="3">Action</option>
            <option value="19">Adult</option>
            <option value="4">Adventure</option>
            <option value="5">Anime</option>
            <option value="6">Children</option>
            <option value="2">Comedy</option>
            <option value="8">Crime</option>
            <option value="24">DIY</option>
            <option value="1">Drama</option>
            <option value="25">Espionage</option>
            <option value="9">Family</option>
            <option value="10">Fantasy</option>
            <option value="7">Food</option>
            <option value="23">History</option>
            <option value="11">Horror</option>
            <option value="27">Legal</option>
            <option value="22">Medical</option>
            <option value="12">Music</option>
            <option value="18">Mystery</option>
            <option value="20">Nature</option>
            <option value="13">Romance</option>
            <option value="14">Science-Fiction</option>
            <option value="26">Sports</option>
            <option value="28">Supernatural</option>
            <option value="15">Thriller</option>
            <option value="21">Travel</option>
            <option value="16">War</option>
            <option value="17">Western</option>
          </select>
        </div>
      </div>
      <div class="filters-group-item">
        <div class="filters-group-item-title">Language</div>
        <div class="filters-group-item-input">
          <select v-model="filter.language" @change="set('language', $event)">
            <option value="">All</option>
            <option value="3">Afrikaans</option>
            <option value="5">Albanian</option>
            <option value="7">Arabic</option>
            <option value="8">Armenian</option>
            <option value="11">Azerbaijani</option>
            <option value="14">Basque</option>
            <option value="15">Belarusian</option>
            <option value="16">Bengali</option>
            <option value="18">Bosnian</option>
            <option value="20">Bulgarian</option>
            <option value="22">Catalan</option>
            <option value="24">Chechen</option>
            <option value="26">Chinese</option>
            <option value="29">Croatian</option>
            <option value="30">Czech</option>
            <option value="31">Danish</option>
            <option value="32">Divehi</option>
            <option value="33">Dutch</option>
            <option value="35">English</option>
            <option value="36">Estonian</option>
            <option value="39">Finnish</option>
            <option value="40">French</option>
            <option value="42">Galician</option>
            <option value="44">Georgian</option>
            <option value="45">German</option>
            <option value="46">Greek</option>
            <option value="49">Gujarati</option>
            <option value="52">Hebrew</option>
            <option value="54">Hindi</option>
            <option value="55">Hungarian</option>
            <option value="56">Icelandic</option>
            <option value="58">Indonesian</option>
            <option value="59">Irish</option>
            <option value="60">Italian</option>
            <option value="61">Japanese</option>
            <option value="62">Javanese</option>
            <option value="63">Kannada</option>
            <option value="65">Kazakh</option>
            <option value="68">Kongo</option>
            <option value="69">Korean</option>
            <option value="73">Latin</option>
            <option value="74">Latvian</option>
            <option value="76">Lithuanian</option>
            <option value="78">Luxembourgish</option>
            <option value="81">Malay</option>
            <option value="82">Malayalam</option>
            <option value="84">Marathi</option>
            <option value="85">Mongolian</option>
            <option value="91">Norwegian</option>
            <option value="97">Panjabi</option>
            <option value="98">Pashto</option>
            <option value="99">Persian</option>
            <option value="100">Polish</option>
            <option value="101">Portuguese</option>
            <option value="103">Romanian</option>
            <option value="106">Russian</option>
            <option value="110">Serbian</option>
            <option value="113">Sinhalese</option>
            <option value="114">Slovak</option>
            <option value="115">Slovenian</option>
            <option value="118">Spanish</option>
            <option value="120">Swahili</option>
            <option value="122">Swedish</option>
            <option value="123">Tagalog</option>
            <option value="126">Tamil</option>
            <option value="128">Telugu</option>
            <option value="129">Thai</option>
            <option value="135">Turkish</option>
            <option value="139">Ukrainian</option>
            <option value="140">Urdu</option>
            <option value="141">Uzbek</option>
            <option value="143">Vietnamese</option>
            <option value="144">Welsh</option>
            <option value="150">Zulu</option>
            <option value="151">Scottish Gaelic</option>
          </select>
        </div>
      </div>
      <div class="filters-group-item">
        <div class="filters-group-item-title">Runtime</div>
        <div class="filters-group-item-input">
          <select v-model="filter.runtime" @change="set('runtime', $event)">
            <option value="">All</option>
            <option value="30">30 minutes or less</option>
            <option value="60">30 to 60 minutes</option>
            <option value="90">Over 60 minutes</option>
          </select>
        </div>
      </div>
      <div class="filters-group-item">
        <div class="filters-group-item-title">Rating</div>
        <div class="filters-group-item-input">
          <select v-model="filter.rating" @change="set('rating', $event)">
            <option value="">All</option>
            <option value="20">2+</option>
            <option value="30">3+</option>
            <option value="40">4+</option>
            <option value="50">5+</option>
            <option value="60">6+</option>
            <option value="70">7+</option>
            <option value="80">8+</option>
            <option value="90">9+</option>
          </select>
        </div>
      </div>
      <div class="filters-group-item">
        <div class="filters-group-item-title">Sort by</div>
        <div class="filters-group-item-input">
          <select v-model="filter.sort" @change="set('sort', $event)">
            <option value="1" selected>Most popular</option>
            <option value="2">Least popular</option>
            <option value="7">Highest rating</option>
            <option value="8">Lowest rating</option>
            <option value="3">A to Z</option>
            <option value="4">Z to A</option>
            <option value="5">Most recently added</option>
            <option value="6">Least recently added</option>
            <option value="9">Most followed</option>
          </select>
        </div>
      </div>

      <div class="filters-group-item" v-show="showReset">
        <button @click="reset" class="filters-group-item-reset">
          Reset filters
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { play } from 'ionicons/icons'
export default {
  fetch() {},
  props: ["filter"],
  computed: {
    isFilterOpen() {
      return this.isOpen;
    },
    showReset() {
      if (
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
    this.$nuxt.$on("filter", (response) => {
      this.keyword = "";
    });
    this.$nuxt.$on("openFilter", (response) => {
      this.isOpen = true;
    });
    this.$nuxt.$on("closeFilter", (response) => {
      this.isOpen = false;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("filter");
    this.$nuxt.$off("openFilter");
    this.$nuxt.$off("closeFilter");
  },
  methods: {
    closeFilter() {
      this.$nuxt.$emit("closeFilter");
    },
    search(keyword) {
      this.reset(true);
      this.$nuxt.$emit("search", keyword);
      this.keyword = keyword;
    },
    key(key) {
      if (key.key == "Enter") {
        this.search(key.target.value);
      }
    },
    reset(ping) {
      this.filter.genre = "";
      this.filter.language = "";
      this.filter.rating = "";
      this.filter.runtime = "";
      this.filter.network = "";
      this.filter.country = "";
      this.filter.sort = 1;
      if (!ping) this.$nuxt.$emit("filter", this.filter);
    },
    set(type, e) {
      this.filter[type] = e.target.value;
      this.$nuxt.$emit("filter", this.filter);
    },
  },
  data() {
    return {
      keyword: "",
      isOpen: false,
    };
  },
};
</script>
<style lang="scss">
</style>