<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyBtn",
};
</script>

<style scoped>
button {
  color: white;
  border: none;
  border-radius: 5px;
  padding: 6px;
  cursor: pointer;
}
</style>
