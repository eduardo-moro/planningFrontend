<template>
  <v-app>
    <span :style="$vuetify.breakpoint.mdAndUp?'padding: 0 20px 0 80px':'padding:60px 0 0 0'">
      <v-layout transition="slide-x-transition" style="justify-content: center; display: flex">
        <v-flex
            xs12
            sm10
            md8
            lg6
            xl5
            class="pa12"
        >
          <router-view/>
        </v-flex>
      </v-layout>
    </span>
  </v-app>
</template>

<script>
export default {
  name: "Authentication"
}
</script>

<style scoped>

</style>
