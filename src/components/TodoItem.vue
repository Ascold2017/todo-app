<template>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <span v-if="!isEdit"><b>#{{ todo.id }}</b> {{ todo.title }}</span>
    <b-form-input v-else v-model="editableTitle"></b-form-input>
    <b-button-group>
      <b-button variant="warning" v-if="!isEdit" @click="chooseForEditItem">Редактировать</b-button>
      <b-button variant="success" v-else @click="saveItem">Сохранить</b-button>
      <b-button variant="danger" @click="removeTodo">Удалить</b-button>
    </b-button-group>
  </b-list-group-item>
</template>

<script>
export default {
  data() {
    return {
      editableTitle: '',
      isEdit: false
    }
  },
  props: {
    todo: { type: Object, default: () => ({}) }
  },
  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', this.todo.id)
    },
    chooseForEditItem() {
      this.editableTitle = this.todo.title
      this.isEdit = true
    },
    saveItem() {
      this.$store.dispatch('updateTodo', { id: this.todo.id, title: this.editableTitle })
      this.editableTitle = ''
      this.isEdit = false
    }
  }
}
</script>

<style>

</style>