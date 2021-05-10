<template>
  <span :style="$vuetify.breakpoint.mdAndUp?'padding: 0 20px 0 80px':'padding:60px 0 0 0'">
    <Header />
    <v-main transition="slide-x-transition">
        <router-view />
    </v-main>
  </span>
</template>


<script>
  import Header from "@/components/Header";
  export default {
    name: 'Home',
    components: {Header},
  }
</script>
