<script setup>
defineProps({
  product: Object,
});
</script>
<template>
  <article class="product-card">
    {{ product.id }}
    <img class="product-image" :src="product.image" width="300" alt="" />
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-description">{{ product.description }}</p>
    <p class="product-price">{{ product.price }}</p>
    <button>Удалить</button>
  </article>
</template>
