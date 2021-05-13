<template>
  <v-card
      elevation="4"
      class="pt-2 rounded-lg mx-4 mb-4"
      color="secondary"
      dark
      :disabled="!ativa"
  >
    <v-dialog
        v-model="open"
        width="600px"
        persistent
        :transition="!this.$vuetify.breakpoint.mdAndUp?'dialog-bottom-transition':''"
        :fullscreen="!this.$vuetify.breakpoint.mdAndUp"
    >
      <ViewWallet
          :id="id"
          :nome="nome"
          :saldo="saldo"
          :cor="cor"
          @close="open = false"
      />
    </v-dialog>
    <v-dialog
        width="600px"
        v-model="openUpdate"
        persistent
        :transition="!this.$vuetify.breakpoint.mdAndUp?'dialog-bottom-transition':''"
        :fullscreen="!this.$vuetify.breakpoint.mdAndUp"
    >
      <UpdateWallet
          :id=id
          :nome=nome
          :saldo=saldo
          :cor=cor
          update
          @close="openUpdate = false"
          @closeAndUpdate="update"
      />
    </v-dialog>
    <v-dialog
        v-model="openDelete"
        width="600px"
        persistent
    >
      <soft-delete @close="deleteUpdate" :id="id" :nome="nome" :saldo="saldo" :cor="cor"/>
    </v-dialog>

    <div style="display:flex;" class="px-4">
      <h4 style="font-weight: 300">{{ nome }}</h4>
      <v-spacer/>
      <h2>R$ {{ parseFloat(saldo).toFixed( 2 ) }}</h2>
    </div>
    <v-divider v-if="ativa" class="my-1"></v-divider>
    <v-card-actions v-if="ativa">
      <v-spacer/>
      <v-btn
          icon
          @click="openDelete = true"
          class="mr-6 mt-4"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
          icon
          @click="openUpdate = true"
          class="mr-6 mt-4"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          icon
          @click="open = true"
          class="mr-6 mt-4"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
    </v-card-actions>
    <div class="wallet-color" :style="'background:' + cor"></div>
  </v-card>
</template>

<script>
import ViewWallet from "@/components/wallet/ViewWallet";
import UpdateWallet from "@/components/wallet/UpdateWallet";
import SoftDelete from "@/components/wallet/SoftDelete";

export default {
  name: "walletCard",
  components: {SoftDelete, ViewWallet, UpdateWallet},
  props: {
    id: String,
    nome: String,
    saldo: String,
    cor: String,
    ativa: Boolean
  },
  data() {
    return {
      open: false,
      openUpdate: false,
      openDelete: false
    }
  },
  methods: {
    update() {
      this.openUpdate = false;
      this.$emit('update')
    },
    deleteUpdate() {
      this.openDelete = false;
      this.$emit('update')
    }
  }
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
