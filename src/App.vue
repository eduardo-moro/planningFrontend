<template>
  <v-app>
    <Navigation v-if="this.$store.getters.user.loggedIn"/>
    <Authentication v-else/>
  </v-app>
</template>

<script>
import Navigation from "@/views/Navigation";
import Authentication from "@/views/Authentication";

export default {
  name: 'App',
  components: { Navigation, Authentication },
  mounted() {
    if(this.$router.currentRoute.meta.requiresAuth === undefined) {
      this.$router.replace({name: "Carteira"})
    }
  },
};
</script>

<style>
</style>
