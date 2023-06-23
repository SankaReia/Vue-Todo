<template>
  <div class="container">
    <TodoForm @add="addTodo" />
    <Loader v-if="isLoading" />
    <TodoList v-else :todos="todos" @remove="removeTodo" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

export default {
  components: {
    TodoList,
    TodoForm,
  },

  data() {
    return {
      todos: [],
      isLoading: false,
    };
  },

  mounted() {
    this.isLoading = true;
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.isLoading = false;
        }, 500);
      });
  },

  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  padding: 0 10px;
}
</style>
