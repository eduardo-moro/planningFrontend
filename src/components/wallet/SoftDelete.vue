<template>
  <v-card :loading="loading">
    <v-card-title class="pb-0">
      <h3 style="color:black;">
        Deletar carteira {{nome}}
      </h3>
      <v-spacer/>
      <v-btn
          icon
          @click="close"
      >
        <v-icon large>
          mdi-close
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <br>
      <h3>
        Selecione uma conta para transferir R${{saldo}} desta conta.
        <br>
        Se não deseja transferir, mantenha a seleção vazia
      </h3>
    </v-card-text>
    <v-form class="pl-4 pr-6" @submit="() => {}">
      <v-select
          placeholder="Informe a carteira da transação."
          v-model="select"
          :items="wallets"
          item-text="title"
          item-value="id"
          return-object
          outlined
          prepend-icon="mdi-circle"
      >
        <template v-slot:prepend>
          <v-icon x-large class="mx-1 ml-4" style="margin-top: -10px" :color="select.cor">mdi-circle</v-icon>
        </template>
      </v-select>
    </v-form>
    <v-card-actions>
      <v-spacer/>
      <v-btn
          text
          color="primary"
          @click="close"
      >
        Cancelar
      </v-btn>
      <v-btn
          color="primary"
          text
          @click="softDelete"
      >
        Excluir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import transactionsApi from "@/models/transactionsApi";
import walletsApi from "@/models/walletsApi";

export default {
  name: "SoftDelete",
  props: {
    id: String,
    nome: String,
    saldo: String,
    cor: String
  },
  data() {
    return {
      loading: false,
      select: {
        id: ""
      },
      wallets: [],
    }
  },
  mounted() {
    this.setWallets();
  },
  methods: {
    close() {
      this.$emit("close")
    },
    softDelete() {
      this.loading = true
      if (this.select.id !== "") {
        let entrada = {
          WalletId: this.select.id,
          titulo: "Fechamento de conta " + this.nome,
          valor: this.saldo,
          tipo: "entrada",
          finalizado: true
        }
        let saida = {
          WalletId: this.id,
          titulo: "Fechamento de conta " + this.nome,
          valor: this.saldo,
          tipo: "saida",
          finalizado: true
        }
        transactionsApi.createTransactions(saida).then(() => {
          transactionsApi.createTransactions(entrada).then((data) => {
            walletsApi.deleteWallet(this.id).then(data => {
              if (data) {
                this.loading = false
                this.close()
              }
            })
          })
        })
      } else {
        walletsApi.deleteWallet(this.id).then(data => {
          if (data) {
            this.loading = false
            this.close()
          }
        })
      }
    },
    setWallets() {
      let retorno = [];
      this.$store.getters.wallets.then(wallets => {
        retorno.push({
          id: "",
          title: "",
          cor: "#ffffff"
        })
        for (let value in wallets) {
          if (wallets[value].ativa && wallets[value]._id!==this.id) {
            retorno.push({
              id: wallets[value]._id,
              title: wallets[value].nome,
              cor: wallets[value].cor
            })
          }
        }
      })
      this.wallets = retorno;
    }
  }
}
</script>

<style scoped>

</style>
