<template>
  <div class="products-swiper pt-16 px-5">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h3 style="font-weight: 900" class="text-red">{{ title }}</h3>
      <a href="#" class="text-black">Shop All</a>
    </div>
    <v-container fluid v-if="!products.length">
      <v-col cols="12" class="pt-16">
        <v-row>
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader type="image,article,button"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <Swiper
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      :space-between="35"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: 'swiper-next' }"
      class="pb-9"
      :autoplay="{ delay: 2000 }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <v-card elevation="5" class="pb-5">
          <v-hover v-slot="{ isHovering, props }">
            <div class="img-parent" style="height: 200px; overflow: hidden">
              <img
                :src="
                  showenItem[item.title]
                    ? showenItem[item.title]
                    : item.thumbnail
                "
                class="w-100"
                :style="`height: 100% ; transition : 0.5s  all ease-in-out ; scale : ${
                  isHovering ? 1.05 : 1
                } ; cursor : pointer`"
                v-bind="props"
                alt=""
              />
            </div>
          </v-hover>

          <v-card-text class="pl-0 pb-1">
            {{
              `${item.title} ${item.description}`.length <= 57
                ? `${item.title} ${item.description}`
                : `${item.title} ${item.description}`.substring(0, 57) + "..."
            }}
          </v-card-text>
          <v-rating
            v-model="item.rating"
            half-increments
            readonly
            color="yellow-darken-3"
            size="x-small"
            density="compact"
          ></v-rating>

          <v-card-text class="pl-0 pt-0">
            <del>${{ item.price }}</del> From
            <span class="text-red" style="font-weight: 900" font-size="17px"
              >${{
                Math.ceil(
                  item.price - (item.price * item.discountPercentage) / 100
                )
              }}</span
            >
          </v-card-text>
          <v-btn-toggle v-model="showenItem[item.title]">
            <v-btn
              v-for="(pic, i) in item.images"
              :value="pic"
              :key="i"
              size="x-small"
              rounded="xl"
              :ripple="false"
            >
              <img
                :src="pic"
                alt=""
                width="30"
                height="30"
                style="border-radius: 50%; border: 1px solid black"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="mt-5">
            <v-btn
              size="x-small"
              density="compact"
              class="py-2 px-12"
              variant="outlined"
              style="text-transform=: none; border-radius: 30px"
              >choose options</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>

      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

export default {
  props: {
    products: {
      type: Array,
    },
    title: {
      type: String,
    },
  },

  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },

  data: () => ({
    showenItem: {},
  }),
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    top: 40%;
    border-radius: 50%;
    background-color: white;
    border: 2px solid rgb(53, 53, 53);

    &::after {
      font-size: 15px;
      color: rgb(53, 53, 53);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 9px;
    height: 9px;
  }
}
</style>
