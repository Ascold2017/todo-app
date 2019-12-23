<template>
  <b-row align-h="between">
    <b-col>
      <b-button-group>
        <b-button variant="success" @click="openForm">Создать новый лист</b-button>
        <b-button variant="danger" @click="removeAllTodos">Удалить все</b-button>
      </b-button-group>
    </b-col>

    <b-col v-if="isVisibleForm">
      <b-input-group>
        <b-form-input v-model="todoTitle"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="addTodo" >Ок!</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>

    <b-col>
      <b-input-group>
        <b-form-input v-model="searchQuery"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="applySearch" v-if="!isSearchApplied">Найти</b-button>
          <b-button variant="outline-danger" @click="resetSearch" v-else>X</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      isVisibleForm: false,
      todoTitle: '',
      searchQuery: '',
      isSearchApplied: false
    }
  },

  methods: {
    openForm() {
      this.isVisibleForm = true
    },
    removeAllTodos() {
      this.$store.dispatch('removeAllTodos')
    },
    addTodo() {
      this.$store.dispatch('addTodo', this.todoTitle)
      this.todoTitle = ''
      this.isVisibleForm = false
    },
    applySearch() {
      this.$store.commit('SET_SEARCH_QUERY', this.searchQuery)
      this.isSearchApplied = true
    },
    resetSearch() {
      this.$store.commit('SET_SEARCH_QUERY', '')
      this.isSearchApplied = false
    }
  }
}
</script>

<style>

</style>