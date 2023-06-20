<template>
  <div class="card p-2">
    <div class="row g-0 align-items-center">
      <div class="col-md-4 text-center">
        <img :src="product.image" class="img-fluid img-thumbnail" :alt="product.title">
      </div>

      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text"><b>قیمت: </b>{{ product.price }} دلار</p>
          <p class="card-text"><b>دسته‌بندی: </b>{{ product.category }}</p>
          <p class="card-text">
            <b>امتیاز: </b>{{ product.rating.rate }}
            <small>
              ({{ product.rating.count }} نفر)
            </small>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ product: { default: null } });

</script>

<style scoped>
img {
  max-height: 400px;
}
</style>