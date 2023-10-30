<template>
  <div class="new-products pt-9">
    <v-container fluid>
      <div class="title mb-10 px-5 d-flex align-center justify-space-between">
        <h3 style="font-weight: 900" class="text-red">New Products</h3>
        <a href="#" class="text-black">Shop All</a>
      </div>
      <v-row>
        <v-col cols="7" class="pt-16" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader type="image,article"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="7" class="pt-16" v-else
          ><Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9"
            :autoplay="{ delay: 2000 }"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="5" class="pb-5">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 200px; overflow: hidden"
                  >
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
                      : `${item.title} ${item.description}`.substring(0, 57) +
                        "..."
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
                  <span
                    class="text-red"
                    style="font-weight: 900"
                    font-size="17px"
                    >${{
                      Math.ceil(
                        item.price -
                          (item.price * item.discountPercentage) / 100
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
            <div class="swiper-pagination"></div> </Swiper
        ></v-col>
        <v-col cols="5">
          <img src="@/assets/images/vr-banner.webp" alt="" class="w-100" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";

export default {
  props: {
    products: {
      type: Array,
    },
  },

  setup() {
    return {
      modules: [Pagination, Autoplay],
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
