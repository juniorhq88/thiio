<template>
      <v-container>
        <h1>{{ isEdit ? 'Edit' : 'Create' }} User</h1>
        <v-form @submit.prevent="handleSubmit">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.password_confirmation"
                  label="Password Confirmation"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-btn type="submit" color="primary">{{ isEdit ? 'Update' : 'Create' }}</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-container>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from 'vue-router'
  import { useUserStore } from '../stores/userStore'
  import { ref, onMounted } from 'vue'
  

      const router = useRouter()
      const route = useRoute()
      const userStore = useUserStore()
  
      const isEdit = route.name === 'UserEdit'
      const form = ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
  
      const handleSubmit = async () => {
        if (isEdit) {
          await userStore.updateUser(route.params.id, form.value)
        } else {
          await userStore.createUser(form.value)
        }
        router.push('/users')
      }
  
      onMounted(() => {
        if (isEdit) {
          userStore.fetchUser(route.params.id)
          form.value = { ...userStore.user }
        }
      })

  </script>
  