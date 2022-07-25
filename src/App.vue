<script setup>
import { provide, ref } from "vue";
import ProductAddForm from "@/components/ProductAddForm.vue";
import ProductList from "@/components/ProductList.vue";

const products = ref([]);

defineEmits(["addProduct"]);
provide('removeProduct', removeProduct);

function removeProduct(productToRemove) {
  products.value = products.value.filter((product) => product !== productToRemove);
}

function addProduct(product) {
  products.value.push({ ...product });
  products.value[product.id].price = parseInt(product.price.replace(/\s/g, ""));
  product.id++;
}
</script>
<template>
  <ProductAddForm @add-product="addProduct" />
  <ProductList :products="products" @sortBy="sortBy" />
</template>
