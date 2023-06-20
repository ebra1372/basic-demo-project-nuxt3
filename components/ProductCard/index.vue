<template>
  <div class="card">
    <img :src="product.image" class="card-img-top img-fluid img-thumbnail rounded-0" alt="test">
    <div class="card-body bg-light">
      <h5 class="card-title text-nowrap overflow-hidden text-truncate" :title="product.title">{{ product.title }}</h5>
      <p class="card-text overflow-hidden" style="height: 150px">{{ product.description }}</p>
      <NuxtLink class="btn btn-primary d-block" :to="`/products/${product.id}`">مشاهده جزئیات</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({ product: { default: null } });

</script>

<style scoped>
img {
  height: 250px;
}
</style>