<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-12 col-sm-6 col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"> {{ error.statusCode }}</h5>

            <h6 class="card-subtitle mb-2 text-body-secondary"> Oops ...!</h6>

            <p class="card-text">{{ error.message }}</p>

            <button class="btn btn-light" @click="handleClickError">برگشت به خانه</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ error: { default: null } });

const handleClickError = () => clearError({ redirect: "/" });
</script>

<style scoped></style>