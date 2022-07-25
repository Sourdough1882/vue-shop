<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  error: Boolean
});

defineEmits(['update:modelValue']);

</script>
<template>
  <p class="product-input-field">
    <label class="product-input-label" for="product-input">
      {{ label }}
    </label>
    <br>
    <slot>
      <input
        class="product-input"
        id="product-input"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </slot>
    <br>
    <label class="input-error" v-if="props.modelValue === null && props.error === true" >Обязательно для заполнения</label>
  </p>
</template>
