<template>
    <div class="not-found">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>Serás redirigido a la página principal en {{ countdown }} segundos.</p>
      <router-link to="/">Volver a la página principal ahora</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const countdown = ref(10)
  let timer
  
  onMounted(() => {
    timer = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(timer)
        router.push('/')
      }
    }, 1000)
  })
  
  onUnmounted(() => {
    clearInterval(timer)
  })
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
  }
  
  h1 {
    font-size: 72px;
    margin-bottom: 0;
  }
  
  h2 {
    margin-top: 0;
    color: #666;
  }
  </style>