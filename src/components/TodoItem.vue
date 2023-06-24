<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.completed" />
    <span :class="{ done: todo.completed }">
      {{ todo.title }}
    </span>
    <div class="btns">
      <span
        @click="$emit('remove', todo)"
        class="material-symbols-outlined icon"
        style="color: red"
      >
        delete
      </span>
      <span
        class="material-symbols-outlined icon"
        style="color: green"
        @click="showModal"
      >
        edit
      </span>
    </div>
    <MyModal v-model:show="isModal" :todo="todo"></MyModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModal: false,
    };
  },

  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showModal() {
      this.isModal = true;
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
.icon {
  cursor: pointer;
}

.btns {
  width: 80px;
  display: flex;
  justify-content: space-between;
}
</style>
