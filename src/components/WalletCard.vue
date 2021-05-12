<template>
  <v-card
      elevation="4"
      class="pt-2 rounded-lg mx-4 mb-4"
      color="secondary"
      dark
      link
      @click="open = true"
  >
    <div style="display: flex;">
      <v-card-title class="pb-2"><h3>{{ nome }}</h3>
        <v-spacer/>
      </v-card-title>
      <v-spacer/>
      <v-icon class="mr-6">mdi-eye</v-icon>
    </div>
    <v-divider class="my-1"></v-divider>
    <div style="display: flex;">
      <v-card-text class="pb-0">saldo:</v-card-text>
      <v-card-text class="pb-0"><h2>R$ {{ saldo }}</h2></v-card-text>
    </div>
    <div class="wallet-color" :style="'background:' + cor"></div>
    <v-dialog
        v-model="open"
        width="600px"
        persistent
    >
      <ViewWallet
          :id="id"
          :nome="nome"
          :saldo="saldo"
          :cor="cor"
          @close="open = false"
      />
    </v-dialog>
  </v-card>
</template>

<script>
import ViewWallet from "@/components/walletActions/ViewWallet";

export default {
  name: "walletCard",
  components: {ViewWallet},
  props: {
    id: String,
    nome: String,
    saldo: String,
    cor: String
  },
  data() {
    return {
      open: false
    }
  },
  methods: {}
}
</script>

<style scoped>
h2, h3 {
  text-align: right;
  font-weight: 300;
}

.wallet-color {
  width: 100%;
  display: flex;
  bottom: 0;
  left: 0;
  height: 12px;
  z-index: 0;
}
</style>
