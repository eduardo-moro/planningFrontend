<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from "@/views/Navigation";
import walletsApi from "@/models/walletsApi"

let teste = walletsApi.listWallets().then(data => {
  console.log(data);
})

export default {
  name: 'App',
  components: { Home }
};
</script>

<style>
</style>
