<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.completed" />
    <span :class="{ done: todo.completed }">
      {{ todo.title }}
    </span>
    <MyBtn @click="$emit('remove', todo)">Delete</MyBtn>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.todo-item {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  max-width: 800px;
  width: 100%;
}

.done {
  text-decoration: line-through;
}
</style>
