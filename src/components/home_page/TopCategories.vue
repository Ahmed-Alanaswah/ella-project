<template>
  <div class="top-cat">
    <div class="cayber-banner">
      <img src="@/assets/images/cyber-banner.webp" alt="" class="w-100" />
    </div>
    <div class="categories pt-9">
      <div class="title d-flex align center justify-center px-5">
        <h2 class="text-center flex-grow-1">Top Categories</h2>
        <a href="#" class="text-black">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card
              class="text-center d-flex align-center justify-center flex-column px-5 py-5"
              elevation="0"
            >
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="img-parent"
                  style="
                    overflow: hidden;
                    height: 170px;
                    width: 100%;
                    border-radius: 50%;
                  "
                >
                  <img
                    :src="cat.image"
                    alt="image"
                    :style="` height: 100%; width: 100% ; cursor: pointer ;transition:0.5s all ease-in-out  ; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                    v-bind="props"
                  />
                </div>
              </v-hover>

              <v-card-text>{{ cat.title }}</v-card-text></v-card
            >
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: " mobile category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: " laptop category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "tv category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "pc category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },

      {
        title: "audio & videon category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },

      {
        title: "gaming category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "home appliances category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },

      {
        title: "kitchen category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "cameras category",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "consume cat",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },

      {
        title: "smart cats",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "accessories cat",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>
