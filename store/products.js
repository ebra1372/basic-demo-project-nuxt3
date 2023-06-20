import { defineStore } from "pinia";
import ProductsAPI from "../api/ProductsAPI";

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      isLoading: false,
      productsList: []
    }
  },
  actions: {
    getProductsList() {
      this.isLoading = true;
      ProductsAPI.GetProductsList().then((response) => {
        if (response) {
          this.productsList = response.data
        }
      }).catch((error) => {
        alert("با خطا مواجه شده است"); // can use the sweetalert2 or others here
      }).finally(() => {
        this.isLoading = false;
      });

    },
  },
})