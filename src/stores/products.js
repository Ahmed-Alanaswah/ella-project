import axios from "axios";
import { defineStore } from "pinia";

export const productsModulle = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    laptops: [],
    mobilePhones: [],
    fragrances: [],
    groceries: [],
  }),

  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.laptops = res.data.products.filter(
            (el) => el.category == "laptops"
          );
          this.mobilePhones = res.data.products.filter(
            (el) => el.category == "smartphones"
          );

          this.fragrances = res.data.products.filter(
            (el) => el.category == "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category == "groceries"
          );

          this.flashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
  },
});
