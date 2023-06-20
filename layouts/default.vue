<template>
  <div class="p-3">
    <header>
      <nav class="navbar navbar-expand-md bg-body-tertiary rounded-0">
        <div class="container-fluid">
          <NuxtLink to="/" class="navbar-brand">خانه</NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NuxtLink to="/products" class="nav-link">محصولات</NuxtLink>
              <NuxtLink to="/about" class="nav-link">درباره ما</NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.router-link-exact-active {
  color: blue;
}
</style>