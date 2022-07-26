<script setup>
import ProductCard from "@/components/ProductCard.vue";
defineProps({
  products: Array,
});
</script>
<template>
  <article class="product-area">
    <p class="product-filter">
      <label class="product-filter-label" for="price-filter-dropdown" hidden
        >Цена</label
      >
      <select class="filter-dropdown" id="price-filter-dropdown">
        <option @click="$emit('sortBy', 'default')">По умолчанию</option>
        <option @click="$emit('sortBy', 'min')">Цена по возрастанию</option>
        <option @click="$emit('sortBy', 'max')">Цена по убыванию</option>
        <option @click="$emit('sortBy', 'name')">По наименованию</option>
      </select>
    </p>
    <ul class="product-list">
      <ProductCard v-for="product in products" :product="product" />
    </ul>
  </article>
</template>
