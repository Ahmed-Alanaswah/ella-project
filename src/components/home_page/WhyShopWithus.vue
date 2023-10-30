<template>
  <div class="shop-withus py-12">
    <div class="title">
      <h2 class="text-center mb-5"><span>Why Shop</span> With US ?</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/free-shipping.png" alt="" />
            </div>

            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >free shipping on fists order</v-card-title
            >

            <v-card-text class="pb-0">Lorem ipsum dolor sit amet </v-card-text>
            <a href="#" style="color: white; font-weight: 700">Learn More</a>
          </v-card> </v-col
        ><v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/weekly-flash-sales.png" alt="" />
            </div>

            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >free shipping on fists order</v-card-title
            >

            <v-card-text class="pb-0">Lorem ipsum dolor sit amet </v-card-text>
            <a href="#" style="color: white; font-weight: 700">Learn More</a>
          </v-card> </v-col
        ><v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/discount.png" alt="" />
            </div>

            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >free shipping on fists order</v-card-title
            >

            <v-card-text class="pb-0">Lorem ipsum dolor sit amet </v-card-text>
            <a href="#" style="color: white; font-weight: 700">Learn More</a>
          </v-card> </v-col
        ><v-col cols="3">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img-parent">
              <img src="@/assets/images/cash-back.png" alt="" />
            </div>

            <v-card-title style="white-space: pre-wrap; line-height: 1.2"
              >free shipping on fists order</v-card-title
            >

            <v-card-text class="pb-0">Lorem ipsum dolor sit amet </v-card-text>
            <a href="#" style="color: white; font-weight: 700">Learn More</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.shop-withus {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-repeat: repeat-x;
  background-size: cover;

  h2 {
    color: white;
    font-size: 36;
    font-weight: 800;
    span {
      color: rgb(45 251 223);
    }
  }
}
</style>
