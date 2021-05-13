<template>
  <div>
    <div class="mt-8 mb-10">
      <h1>Transações</h1>
      <h2>Gerencie seus gastos.</h2>
    </div>
    <div class="mx-6" style="display: flex">
      <v-text-field v-model="filtroData" type="date" outlined class="mx-0 mr-2"/>
      <v-btn :loading="loading" x-large color="primary" @click="forceRerender">buscar</v-btn>
    </div>
    <p style="text-align: right" class="mx-4">
      Entradas:
      <v-icon class="mr-4" small color="green">
        mdi-circle
      </v-icon>
      Saidas:
      <v-icon small color="red">
        mdi-circle
      </v-icon>
    </p>
    <v-list>
      <div v-for="(item) in transactions">
        <div v-if="item.divider">
          <br>
          <h3 style="text-align: center">{{ date = new Date(item.data).toLocaleDateString('pt-BR') }}</h3>
        </div>
        <v-list-item-content
            :title="item.wallet" style="background: #333; border-radius: 8px"
            class="py-0 my-0 mx-6 mb-2"
        >
          <div :style="'background:'+item.cor" style="height: 6px; width: 100%;" class="pa-0 mb-2"/>
          <v-divider style="margin-top: -10px;" vertical dark/>
          <div class="px-4" style="display: flex; color:white;">
            <v-icon
                :color="item.tipo==='saida'?'red':'green'"
                style="margin-top: -12px"
                class="ml-0 mr-4"
            >
              {{ item.tipo === 'saida' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}
            </v-icon>
            <v-divider style="margin-top: -12px;" class="mr-2" vertical dark/>
            <v-card-text class="pa-0">{{ item.titulo }}</v-card-text>
            <v-divider style="margin-top: -12px;" class="mr-2" vertical dark/>
            <v-card-text class="pa-0">{{ item.wallet }}</v-card-text>
            <v-card-text class="pa-0"><h3 style="text-align: right">R$ {{ item.valor }}</h3></v-card-text>
          </div>
        </v-list-item-content>
      </div>
    </v-list>

    <v-dialog
        v-model="this.openNew"
        width="600px"
        persistent
        :transition="!this.$vuetify.breakpoint.mdAndUp?'dialog-bottom-transition':''"
        :fullscreen="!this.$vuetify.breakpoint.mdAndUp"
    >
      <new-transaction @close="openNew = false"/>
    </v-dialog>

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
    <v-divider/>
    <h3>Fim Da listagem</h3>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import transactionsApi from "@/models/transactionsApi";
import NewTransaction from "@/components/transactions/newTransaction";

export default {
  name: "TransactionsList",
  components: {NewTransaction},
  data: function (t = this) {
    return {
      ultimaData: "",
      openNew: false,
      transactions: this.separate(t.$store.getters.transactions),
      filtroData: "",
      loading: false,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      if (this.$store.getters.transactions.then !== undefined) {
        this.$store.getters.transactions.then(data => {
          this.transactions = this.separate(data);
        })
      } else {
        this.forceRerender()
      }
    },
    forceRerender() {
      this.loading = true
      transactionsApi.listTransactions().then(data => {
        this.transactions = this.separate(data.data.data);
        this.loading = false
      })
    },
    updateUltimaData(newData) {
      this.ultimaData = newData;
      return "";
    },
    separate(entrada) {
      let lastDate = "";
      let retorno = {};
      for (let property in entrada) {
          this.$store.getters.wallets.then(wallets => {
            for (let key in wallets) {
              if (this.filtroData !== "") {
                if (this.filtroData === entrada[property].data.slice(0, 10)) {
                  retorno[property] = entrada[property]
                  if (entrada[property].data !== lastDate) {
                    lastDate = entrada[property].data
                    if (retorno[property]) {
                      retorno[property].divider = true
                    }
                  }
                  if (wallets[key]._id === retorno[property].WalletId) {
                    retorno[property].cor = wallets[key].cor
                    retorno[property].wallet = wallets[key].nome
                  }
                }
              } else {
                retorno[property] = entrada[property]
                if (entrada[property].data !== lastDate) {
                  lastDate = entrada[property].data
                  if (retorno[property]) {
                    retorno[property].divider = true
                  }
                }
                if (wallets[key]._id === retorno[property].WalletId) {
                  retorno[property].cor = wallets[key].cor
                  retorno[property].wallet = wallets[key].nome
                }
              }
            }
          })

      }
      return retorno
    },
  },
}
</script>

<style scoped>

</style>
