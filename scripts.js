tasks = [];

const addTasks = {
  data() {
    return {
      tasks: window.tasks,
      newTask: {},
    };
  },
  methods: {
    addTask: function () {
      if (this.newTask.name) {
        this.tasks.push(this.newTask);
        this.newTask = {};
      } else {
        alert("Preencha o campo corretamente!");
      }
    },
    clearAll: function () {
      this.tasks = [];
    },
  },
};

Vue.createApp(addTasks).mount("#app");
