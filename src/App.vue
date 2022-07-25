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

function sortBy(sortType) {
  if (sortType === 'default') {
    products.value.sort((a, b) => { return a.id - b.id });
  }
  if (sortType === 'min') {
    products.value.sort((a, b) => { return a.price - b.price })
  }
  if (sortType === 'max') {
    products.value.sort((a, b) => { return b.price - a.price })
  }
  if (sortType === 'name') {
    products.value.sort((a, b) => { 
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
  }
}
</script>
<template>
  <ProductAddForm @add-product="addProduct" />
  <ProductList :products="products" @sortBy="sortBy" />
</template>
