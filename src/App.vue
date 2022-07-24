<script setup>
import { ref } from "vue";
import ProductAddForm from "@/components/ProductAddForm.vue";
import ProductList from "@/components/ProductList.vue";

const products = ref([]);

defineEmits(["addProduct"]);

function addProduct(product) {
  products.value.push({ ...product });
  product.id++;
}
</script>
<template>
  <ProductAddForm @add-product="addProduct" />
  <ProductList :products="products" />
</template>
