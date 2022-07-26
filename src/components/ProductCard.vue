<script setup>
import { inject } from "vue";
defineProps({
  product: Object,
});

const removeProduct = inject("removeProduct");
</script>
<template>
  <article class="product-card">
    <img class="product-image" :src="product.image" alt="" />
    <div class="product-info-wrapper">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }} руб.</p>
    </div>
    <button class="product-delete-button" @click="removeProduct(product)">
      <img src="@/assets/icons/deleteBin.svg" />
    </button>
  </article>
</template>
