<template>
  <div>
    <TodoForm @add="addTodo"/>
    <TodoList 
      :todos="todos" 
      @remove="removeTodo"
    />
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
      todos: [
        { id: 1, task: "task1", checked: false },
        { id: 2, task: "task2", checked: false },
      ],
    };
  },

  methods: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    removeTodo(todo){
      this.todos = this.todos.filter(t => t.id !== todo.id)
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
</style>
