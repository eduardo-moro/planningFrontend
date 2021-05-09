<template>
  <v-app>
    <router-view />
  </v-app>
</template>


<script>
  import IndexNavigation from '../components/IndexNavigation'

  export default {
    name: 'Home',

    components: {
      IndexNavigation,
    },
  }
</script>
