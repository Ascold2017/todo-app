<template>
  <div id="app">
    <b-container>
      <TodosHeader class="mb-3"/>
      <TodosList/>
    </b-container>
  </div>
</template>

<script>
import TodosHeader from '@/components/TodosHeader'
import TodosList from '@/components/TodosList'
export default {
  name: 'app',
  components: {
    TodosHeader,
    TodosList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
