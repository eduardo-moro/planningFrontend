<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from "@/views/Navigation";
import walletsApi from "@/models/walletsApi"

export default {
  name: 'App',
  components: { Home }
};
</script>

<style>
</style>
