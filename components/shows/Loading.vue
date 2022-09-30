<template>
  <swiper class="shows-list-group-items" :options="swiperOptions">
    <swiper-slide
      class="shows-list-group-item loading"
      v-for="show in 20"
      :key="show"
    >
      <div class="shows-list-group-item-image"></div>

      <div
        class="shows-list-group-item-title"
        :style="`width: ${Math.floor(30 + Math.random() * (100 - 30 + 1))}%`"
      >
        &nbsp;
      </div>

      <div class="shows-list-group-item-rating">&nbsp;</div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
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
<style lang="scss">
</style>