<template>
  <form @submit.prevent>
    <input type="text" placeholder="New Task" v-model="title" />
    <MyBtn @click="addTodo" style="background: dodgerblue">Add</MyBtn>
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
  width: 100%;
  display: flex;
  justify-content: center;
}

input {
  max-width: 500px;
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 2rem;
}
</style>
