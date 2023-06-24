<template>
  <div class="dialog" v-if="show" @click="hideModal">
    <div class="dialog-content" @click.stop>
      <h3>Edit Todo:</h3>
      <input type="text" v-model="title" />
      <MyBtn style="background: dodgerblue" @click="editTodo">Save</MyBtn>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",

  data() {
    return {
      title: "",
    };
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
    editTodo() {
      this.todo.title = this.title;
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog-content {
  min-width: 300px;
  min-height: 100px;
  margin: auto;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}
.dialog-content input {
  width: 100%;
  padding: 5px;
  border: 1px solid dimgray;
  border-radius: 3px;
  margin: 10px 0;
}
</style>
