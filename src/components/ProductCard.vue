<script setup>
import { inject } from 'vue'
defineProps({
  product: Object,
});

const removeProduct = inject('removeProduct');

</script>
<template>
  <article class="product-card">
    <img class="product-image" :src="product.image" width="300" alt="" />
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-description">{{ product.description }}</p>
    <p class="product-price">{{ product.price }}</p>
    <button @click="removeProduct(product)">Удалить</button>
  </article>
</template>
