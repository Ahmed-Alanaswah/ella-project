<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProducstComponent :products="flashDeals" title="Flash Deals" />
    <TopCategories />
    <NewProducts :products="laptops" />
    <QualityFeatures />
    <ProducstComponent :products="mobilePhones" title="top Mobiles" />
    <v-container fluid="">
      <v-row>
        <v-col cols="6">
          <img src="@/assets/images/band-left-cover.webp" alt="" />
        </v-col>
        <v-col cols="6">
          <img src="@/assets/images/band-right-cover.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <ProducstComponent :products="fragrances" title="Top Fragrances" />
    <img src="@/assets/images/tv-banner.webp" class="w-100" alt="" />
    <ProducstComponent :products="groceries" title="Top Groceries" />
    <WhyShopWithus />
  </div>
</template>

<script>
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import { productsModulle } from "@/stores/products";
import ProducstComponent from "@/components/home_page/ProductsSwiper.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
import WhyShopWithus from "@/components/home_page/WhyShopWithus.vue";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProducstComponent,
    TopCategories,
    NewProducts,
    QualityFeatures,
    WhyShopWithus,
  },
  computed: {
    ...mapState(productsModulle, [
      "flashDeals",
      "laptops",
      "mobilePhones",
      "fragrances",
      "groceries",
    ]),
  },
  methods: {
    ...mapActions(productsModulle, ["getProducts"]),
  },

  async mounted() {
    await this.getProducts();
  },
};
</script>
