<script setup>
import ProductCard from '@/components/ProductCard.vue';
defineProps({
  products: Array,
});
</script>
<template>
  <article class="product-list">
    <p class="product-filter">
      <label class="product-filter-label" for="price-filter-dropdown"
        >Цена</label
      >
      <select class="price-filter-dropdown" id="price-filter-dropdown">
        <option class="" @click="$emit('sortBy', 'default')">По умолчанию</option>
        <option class="" @click="$emit('sortBy', 'min')">Цена по возрастанию</option>
        <option class="" @click="$emit('sortBy', 'max')">Цена по убыванию</option>
        <option class="" @click="$emit('sortBy', 'name')">По наименованию</option>
      </select>
    </p>
    <ProductCard v-for="product in products" :product="product" :key="product.id" />
  </article>
</template>
