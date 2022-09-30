<template>
  <swiper class="shows-list-group-items" :options="swiperOptions">
    <swiper-slide
      class="shows-list-group-item"
      v-for="show in list"
      :key="show.id"
      @click.native="open(show)"
    >
      <div
        class="shows-list-group-item-image"
        :style="`background-image: url(${$image(show)})`"
      ></div>

      <div class="shows-list-group-item-title">{{ show.name }}</div>

      <div class="shows-list-group-item-rating" v-if="show.rating">
        {{ show.rating.average }}
      </div>
    </swiper-slide>
    <div slot="button-prev" class="swiper-nav swiper-nav-prev">
      <img src="/chevron-left.svg" />
    </div>
    <div slot="button-next" class="swiper-nav swiper-nav-next">
      <img src="/chevron-right.svg" />
    </div>
  </swiper>
</template>

<script>
export default {
  fetch() {},
  props: ["list"],
  methods: {
    open(show) {
      this.$router.push("/show/" + show.id);
    },
  },
  data() {
    return {
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
    };
  },
};
</script>