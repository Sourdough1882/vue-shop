<template>
    <p class="product-input-field">
        <label class="product-input-label" for="product-input-label">Наименование товара</label><br>
        <slot>
            <input class="product-input" type="text"> 
        </slot>
    </p>
</template>