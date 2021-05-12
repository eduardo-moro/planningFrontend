<template>
  <div class="mx-4 my-8">
    <v-btn
        fab
        fixed
        bottom
        right
        color="primary lighten-1"
        elevation="12"
        class="mb-8"
        v-if="!openNew"
        link
        @click="openNew = true"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-dialog
        width="600px"
        v-model="openNew"
        persistent
        transition="dialog-bottom-transition"
        :fullscreen="!this.$vuetify.breakpoint.mdAndUp"
    >
      <NewWallet @close="openNew = false"/>
    </v-dialog>

  </div>
</template>

<script>
import NewWallet from "@/components/walletActions/NewWallet";

export default {
  name: "Actions",
  components: {NewWallet},
  data() {
    return {
      openNew: false,
    }
  },
}
</script>

<style scoped>

</style>
