<template>
  <span :style="$vuetify.breakpoint.mdAndUp?'padding: 0 20px 0 80px':'padding:60px 0 0 0'">
    <Header />
    <v-layout transition="slide-x-transition" style="justify-content: center; display: flex">
      <v-flex
          xs12
          sm10
          md8
          lg6
          xl5
          class="pa12"
      >
        <router-view />
      </v-flex>
    </v-layout>
  </span>
</template>


<script>
  import Header from "@/components/Header";
  export default {
    name: 'Home',
    components: {Header},
  }
</script>
