export const todoModule = {
  state: function () {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      isLoading: false,
    };
  },

  getters: {},

  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setLoading(state, bool) {
      state.isLoading = bool;
    },
    setTodo(state, todo) {
      state.todos.push(todo);
    },
  },

  actions: {
    fetchTodos({ state, commit }) {
      commit("setLoading", true);
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => response.json())
        .then((json) => {
          setTimeout(() => {
            commit("setTodos", json);
            commit("setLoading", false);
          }, 500);
        });
    },
  },
};
