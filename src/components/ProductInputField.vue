<script setup>
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
});
defineEmits(["update:modelValue"]);
</script>
<template>
  <p class="product-input-field">
    <label class="product-input-label" for="product-input">
      {{ label }}
    </label>
    <br />
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
  </p>
</template>
