<template>
  <div class="container text-center">
    <div class="row g-4">
      <div class="col-12">
        <h2>خوش آمدید</h2>
      </div>

      <div class="col-12 col-sm-6">
        <div class="card text-center">
          <div class="card-header">
            <b>صفحه محصولات</b>
          </div>

          <div class="card-body">
            <p class="card-text text-end">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
              گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
              ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
            </p>
          </div>

          <div class="card-footer text-body-secondary text-start">
            <NuxtLink to="/products" class="btn btn-warning">مشاهده صفحه</NuxtLink>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <div class="card text-center">
          <div class="card-header">
            <b>صفحه درباره ما</b>
          </div>

          <div class="card-body">
            <p class="card-text text-end">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
              گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل
              ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید،
            </p>
          </div>

          <div class="card-footer text-body-secondary text-start">
            <NuxtLink to="/about" class="btn btn-warning">مشاهده صفحه</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: "خانه" });
</script>

<style></style>