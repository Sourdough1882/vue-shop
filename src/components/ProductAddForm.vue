<script setup>
import { reactive, watch, ref } from "vue";
import ProductInputField from "@/components/ProductInputField.vue";

const productInput = reactive({
  id: 0,
  name: null,
  description: null,
  image: null,
  price: null,
});

let isValidated = ref(false);

watch(productInput, (newInput) => {
  isValidated.value =
    newInput.name &&
    newInput.description &&
    newInput.image &&
    productInput.price
      ? true
      : false;
});
</script>
<template>
  <form
    class="product-add-form"
    @submit.prevent="$emit('addProduct', productInput)"
  >
    <fieldset>
      <legend>Добавление товара</legend>
      <ProductInputField
        v-model="productInput.name"
        label="Наименование товара"
        placeholder="Введите наименование товара"
      />
      <ProductInputField label="Описание товара">
        <textarea
          v-model="productInput.description"
          id="product-input"
          cols="30"
          rows="10"
          placeholder="Введите описание товара"
        ></textarea>
      </ProductInputField>
      <ProductInputField
        v-model="productInput.image"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
      />
      <ProductInputField
        v-model.number="productInput.price"
        label="Цена товара"
        placeholder="Введите цену"
      />
      <button :class="{ 'submit-disabled': isValidated }">
        Добавить товар
      </button>
    </fieldset>
  </form>
</template>
