<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      to: '/dashboard',
      icon: 'ri-home-smile-line',

    }"
  />

 
  <VerticalNavLink
    :item="{
      title: 'Users',
      icon: 'ri-user-add-line',

    }"
  />
 

</template>
