<template>
  <ProductDetails :product="product" />
</template>

<script setup>
useHead({ title: "جزئیات محصول" });
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "محصول مورد نظر یافت نشد" });
}
</script>

<style></style>