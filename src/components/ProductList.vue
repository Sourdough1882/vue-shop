<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>
<template>
  <article class="product-list">
    <p class="product-filter">
      <label class="product-filter-label" for="price-filter-dropdown">Цена</label>
      <select class="price-filter-dropdown" id="price-filter-dropdown">
        <option class="" value="min">Мин.</option>
        <option class="" value="max">Мин.</option>
      </select>
    </p>
    <ProductCard />
  </article>
</template>