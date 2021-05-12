<template>
  <v-app>
    <Navigation/>
  </v-app>
</template>

<script>
import Navigation from "@/views/Navigation";
import Authentication from "@/views/Authentication";

export default {
  name: 'App',
  components: {Navigation, Authentication},
};
</script>

<style>
</style>
