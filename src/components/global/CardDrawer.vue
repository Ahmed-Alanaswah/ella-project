<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat animi
        repellat, a quod ea doloremque, at tempore harum commodi inventore
        necessitatibus explicabo enim pariatur quis, exercitationem corporis
        beatae officia molestias.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],

  data: () => ({
    drawer: false,
  }),

  mounted() {
    console.log("o5555555k5kk");

    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
