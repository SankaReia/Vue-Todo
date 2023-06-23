<template>
  <div class="list">
    <div class="top">
      <h2>ToDo List</h2>
      <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
    </div>

    <div v-if="filteredTodos.length > 0">
      <TodoItem
        v-for="todo in filteredTodos"
        :todo="todo"
        :key="todo.id"
        @remove="$emit('remove', todo)"
      />
    </div>
    <h3 v-else>There are no todos!</h3>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem,
  },

  data() {
    return {
      filter: "all",
    };
  },

  props: {
    todos: {
      type: Array,
      required: true,
    },
  },

  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }
      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },
};
</script>

<style scoped>
.list {
  width: 100%;
}

.list h3 {
  text-align: center;
}
.top {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
</style>
