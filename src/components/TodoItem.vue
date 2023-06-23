<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.completed" />
    <span :class="{ done: todo.completed }">
      {{ todo.title }}
    </span>
    <MyBtn @click="$emit('remove', todo)" style="background: red">Delete</MyBtn>
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
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
.todo-item span {
  margin: 0 10px;
}
.done {
  text-decoration: line-through;
}
</style>
