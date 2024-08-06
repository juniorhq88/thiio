<template>
    <div>
      <h1>{{ isEdit ? 'Edit' : 'Create' }} User</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="form.name" required>
        </div>
        <button type="submit">{{ isEdit ? 'Update' : 'Create' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useRouter, useRoute } from 'vue-router'
  import { useUserStore } from '../stores/userStore'
  import { ref, onMounted } from 'vue'
  
  export default {
    name: 'UserForm',
    setup() {
      const router = useRouter()
      const route = useRoute()
      const userStore = useUserStore()
  
      const isEdit = route.name === 'UserEdit'
      const form = ref({
        name: ''
      })
  
      const handleSubmit = async () => {
        if (isEdit) {
          await userStore.updateUser(route.params.id, form.value)
        } else {
          await userStore.createUser(form.value)
        }
        router.push('/')
      }
  
      onMounted(() => {
        if (isEdit) {
          userStore.fetchUser(route.params.id)
          form.value = { ...userStore.user }
        }
      })
  
      return {
        form,
        isEdit,
        handleSubmit
      }
    }
  }
  </script>
  