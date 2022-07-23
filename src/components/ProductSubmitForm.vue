<script setup>
import ProductInputField from "@/components/ProductInputField.vue";
</script>
<template>
    <form class="product-submit-form">
        <fieldset>
            <legend>Добавление товара</legend>
            <ProductInputField />
            <ProductInputField />
            <ProductInputField />
            <ProductInputField />
            <button>Добавить товар</button>
        </fieldset>
    </form>
</template>