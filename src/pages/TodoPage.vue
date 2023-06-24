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
import { mapActions, mapState, mapMutations } from "vuex";
import store from "@/store";

export default {
  components: {
    TodoList,
    TodoForm,
  },

  mounted() {
    // this.fetchTodos();
  },

  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
      isLoading: (state) => state.todo.isLoading,
    }),
  },

  watch: {
    todos: {
      handler(newVal) {
        localStorage.setItem("todos", JSON.stringify(newVal));
      },
      deep: true,
    },
  },

  methods: {
    ...mapMutations({}),

    ...mapActions({
      // fetchTodos: "fetchTodos",
    }),

    addTodo(newTodo) {
      store.commit("setTodo", newTodo);
    },

    removeTodo(todo) {
      store.commit(
        "setTodos",
        this.todos.filter((t) => t.id !== todo.id)
      );
    },
  },
};
</script>

<style>
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
