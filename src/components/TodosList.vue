<template>
  <b-row>
    <b-col>
      <b-list-group v-if="todos.length">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: { TodoItem },
  computed: {
    todos() {
      return this.$store.getters.searchedTodos
    }
  }
}
</script>

<style>

</style>