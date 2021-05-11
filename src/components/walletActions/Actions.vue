<template>
  <div class="mx-4 my-8">
    <v-btn
        x-large
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

    >
      <div style="background: white">
        <v-btn
            fixed
            dark
            top
            right
            icon
            x-large
            class="ma-4"
            @click="openNew = false"
        >
          <v-icon x-large>
            mdi-close
          </v-icon>
        </v-btn>
        <new-wallet/>
      </div>
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
      openNew: false
    }
  }

}
</script>

<style scoped>

</style>
