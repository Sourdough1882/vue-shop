<script setup>
import { reactive, watch, ref } from "vue";
import ProductInputField from "@/components/ProductInputField.vue";

const emit = defineEmits(["addProduct"]);
const status = ref('Добавить товар');

const productInput = reactive({
  id: 0,
  name: null,
  description: null,
  image: null,
  price: null,
});

let isValidated = ref(true);
let error = ref(false);

watch(productInput, async (newInput) => {
  if (newInput.name && newInput.image && newInput.price) {
    isValidated.value = false;
  } else {
    isValidated.value = true;
  }
});

function submit() {
  if (
    productInput.name &&
    productInput.image &&
    productInput.price
  ) {
    error.value = false;
    productInput.price = parseInt(productInput.price.replace(/\s/g, ""));
    emit("addProduct", productInput);
    productInput.name =
      productInput.description =
      productInput.image =
      productInput.price =
        null;
  } else {
    error.value = true;
  }

  status.value = 'Товар добавлен!';
  setTimeout(() => status.value = 'Добавить товар', 3000);
}
</script>
<template>
  <form class="product-add-form" @submit.prevent="submit">
    <fieldset class="product-add-fieldset">
      <legend class="fieldset-description">Добавление товара</legend>
      <div class="input-wrap">
      <ProductInputField
        v-model="productInput.name"
        label="Наименование товара"
        placeholder="Введите наименование товара"
        :error="error"
      />
      <p class="product-input-field">
      <label class="product-textarea-label" for="product-input">
        Описание товара
      </label>
      <br>
      <textarea
        v-model="productInput.description"
        class="product-textarea"
        id="product-input"
        placeholder="Введите описание товара"
      ></textarea>
      </p>
      <ProductInputField
        v-model="productInput.image"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
        :error="error"
      />
      <ProductInputField
        v-model="productInput.price"
        v-maska="[
          '##',
          '###',
          '# ###',
          '## ###',
          '### ###',
          '# ### ###',
          '## ### ###',
          '### ### ###',
        ]"
        label="Цена товара"
        placeholder="Введите цену"
        :error="error"
      />
      <button :disabled="isValidated" class="submit">
        {{ status }}
      </button>
      </div>
    </fieldset>
  </form>
</template>
