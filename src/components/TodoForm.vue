<template>
  <form @submit.prevent>
    <h4>Add ToDo</h4>
    <input type="text" placeholder="Task" v-model="todo.task" />
    <MyBtn @click="addTodo">Add</MyBtn>

  </form>
</template>

<script>

export default {

  data() {
    return {
      todo: {
        task: "",
      },
    };
  },

  methods: {
    addTodo() {
      this.todo.id = Date.now(),
      this.$emit('add', this.todo)
      this.todo = {
        task: "",
      }
    },
  },
};
</script>


