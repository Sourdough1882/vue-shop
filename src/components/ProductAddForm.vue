<script setup>
import { reactive, watch, ref } from 'vue';
import ProductInputField from '@/components/ProductInputField.vue';

const emit = defineEmits(['addProduct']);

const productInput = reactive({
  id: 0,
  name: null,
  description: null,
  image: null,
  price: null,
});

let isValidated = ref(false);
let error = ref(false);

watch(productInput, async (newInput) => {
  isValidated.value = newInput.name && newInput.description && newInput.image && productInput.price ? true : false;
});

function submit() {
  if (productInput.name && productInput.description && productInput.image && productInput.price) {
    error.value = false;
    emit('addProduct', productInput);
    productInput.name = productInput.description = productInput.image = productInput.price = null;
  } else {
    error.value = true;
  }
}

</script>
<template>
  <form
    class="product-add-form"
    @submit.prevent="submit"
  >
    <fieldset>
      <legend>Добавление товара</legend>
      <ProductInputField
        v-model="productInput.name"
        label="Наименование товара"
        placeholder="Введите наименование товара"
        :error="error"
      />
      <ProductInputField 
        label="Описание товара"
        v-model="productInput.description"
        :error="error"
        >
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
        :error="error"
      />
      <ProductInputField
        v-model="productInput.price"
        v-maska="['##', '###', '# ###', '## ###', '### ###', '# ### ###', '## ### ###', '### ### ###']"
        label="Цена товара"
        placeholder="Введите цену"
        :error="error"
      />
      <button :class="{ 'submit-disabled': isValidated }">
        Добавить товар
      </button>
    </fieldset>
  </form>
</template>
