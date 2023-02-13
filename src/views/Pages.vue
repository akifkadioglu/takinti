<template>
  <v-container>
    <v-responsive class="mx-auto" max-width="750">
      <swiper
        :slides-per-view="1"
        :space-between="100"
        :loop="false"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <Home />
        </swiper-slide>

        <swiper-slide>
          <Account />
        </swiper-slide>
      </swiper>
    </v-responsive>
  </v-container>
</template>

<script>
import { Navigation, Pagination } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

import Home from "./Home/View.vue";
import Account from "./Account/View.vue";
import { appController } from "./app-controller";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Home,
    Account,
  },

  methods: {
    onSwiper(a) {
      this.$emit(appController.PAGE, a.activeIndex);
    },
    onSlideChange(a) {
      this.$emit(appController.PAGE, a.activeIndex);
    },
  },
};
</script>
