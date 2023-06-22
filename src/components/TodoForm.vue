<template>
  <form @submit.prevent>
    <input type="text" placeholder="Task" v-model="title" />
    <MyBtn @click="addTodo">Add</MyBtn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },

  methods: {
    addTodo() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          completed: false,
          title: this.title,
        };
        this.$emit("add", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 50px;
}

input {
  width: 500px;
}
</style>
