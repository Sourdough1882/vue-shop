<script setup>
import { onMounted, provide, ref, onUpdated } from "vue";
import ProductAddForm from "@/components/ProductAddForm.vue";
import ProductList from "@/components/ProductList.vue";

let products = ref([]);

defineEmits(["addProduct"]);
provide('removeProduct', removeProduct);

onMounted(() => {
  if (localStorage.getItem('products')) {
    products.value = JSON.parse(localStorage.getItem('products'));
  }
});

function removeProduct(productToRemove) {
  products.value = products.value.filter((product) => product !== productToRemove);
  localStorage.setItem('products', JSON.stringify(products.value));
}

function addProduct(product) {
  products.value.push({ ...product });
  product.id++;
  localStorage.setItem('products', JSON.stringify(products.value));
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
