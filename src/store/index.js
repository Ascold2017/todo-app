import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    searchQuery: ''
  },
  getters: {
    searchedTodos: (state) => {
      return state.todos.filter(todo => todo.title.includes(state.searchQuery))
    }
  },
  mutations: {
    ADD_TODO: (state, data) => {
      state.todos.push(data)
    },
    REMOVE_TODO: (state, id) => {
      state.todos = state.todos.filter(item => item.id !== id)
    },
    UPDATE_TODO: (state, { id, title }) => {
      state.todos = state.todos.map(item => {
        if (item.id === id) {
          return {...item, title }
        }
        return item
      })
    },
    REMOVE_ALL_TODOS: (state) => {
      state.todos = []
    },
    SET_SEARCH_QUERY: (state, value) => {
      state.searchQuery = value
    }
  },
  actions: {
    addTodo: ({ commit, state }, title) => {
      commit('ADD_TODO', { title, id: state.todos.length + 1 })
    },
    removeTodo: ({ commit }, id) => commit('REMOVE_TODO', id),
    updateTodo: ({ commit }, { id, title }) => commit('UPDATE_TODO', { id, title }),
    removeAllTodos: ({ commit }) => commit('REMOVE_ALL_TODOS')
  }
})
