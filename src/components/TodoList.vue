<template>
  <div class="list" v-if="todos.length > 0">
    <h3>Todoes:</h3>
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove="$emit('remove', todo)"
    />
  </div>
  <h3 v-else>There are no todos!</h3>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem,
  },

  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list {
  width: 800px;
}
</style>
