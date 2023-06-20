<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          این یک نمونه پروژه ساده است که با فریم‌ورک
          Nuxt.js
          پیاده‌سازی شده است.
        </div>
      </div>

      <div class="col-12">
        <div class="alert alert-light" role="alert">
          از API های سایت
          <a href="https://fakestoreapi.com/" class="alert-link" target="_blank">fakestoreapi.com</a>
          استفاده شده است.
        </div>
      </div>

      <div class="col-12">
        <div class="alert alert-warning " role="alert">
          <span>تکنولوژی‌های استفاده شده: </span>

          <ul>
            <li class="my-2">Nuxt.js</li>
            <li class="my-2">Pinia</li>
            <li class="my-2">Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: "درباره ما" });
</script>

<style></style>