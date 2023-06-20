<template>
  <div class="container container-fluid">
    <div class="row g-4">
      <div class="col-12 text-center py-4" v-if="products.isLoading">
        <h2>در حال بارگذاری ...</h2>
      </div>

      <template v-else>
        <div v-if="products.productsList.length > 0" class="col-12 col-sm-6 col-md-4" v-for="p in products.productsList">
          <ProductCard :product="p" />
        </div>

        <div v-else class="col-12 text-center py-4">
          <h2>محصولی برای نمایش وجود ندارد.</h2>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/store/products';
const products = useProductsStore()
useHead({ title: "لیست محصولات" });

products.getProductsList();

</script>

<style></style>