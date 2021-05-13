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
        :transition="!this.$vuetify.breakpoint.mdAndUp?'dialog-bottom-transition':''"
        :fullscreen="!this.$vuetify.breakpoint.mdAndUp"
    >
      <UpdateWallet @close="close" @closeAndUpdate="closeAndUpdate(true)"/>
    </v-dialog>

  </div>
</template>

<script>
import UpdateWallet from "@/components/wallet/UpdateWallet";

export default {
  name: "Actions",
  components: {UpdateWallet},
  data() {
    return {
      openNew: false,
    }
  },
  methods: {
    close() {
      this.openNew = false
    },
    closeAndUpdate() {
      this.openNew = false
      this.$emit("update")
    }
  }
}
</script>

<style scoped>

</style>
