<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->

<template>
  <div class="">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo">
      <div class="field">
        <div class="control">
          <input
            v-model="todo"
            type="text"
            placeholder="Todo Gir"
            class="input"
          />
        </div>
        <button type="submit">Ekle</button>
      </div>
    </form>
    <div v-for="todo in todos" :key="todo.id">
      <div
        class="card-content"
        :class="{ done: todo.done }"
        @click="done(todo)"
      >
        {{ todo.content }} - {{ todo.done }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const todo = ref("");
    const todos = ref([]);
    function addTodo() {
      todos.value.push({
        done: false,
        content: todo.value,
        id: Date.now(),
      });
      todo.value = "";
    }
    function done(todo) {
      todo.done = !todo.done;
    }

    return {
      todo,
      todos,
      addTodo,
      done,
    };
  },
};
</script>

<style lang="scss">
.done {
  line-throught: "text-underline";
}
</style>
