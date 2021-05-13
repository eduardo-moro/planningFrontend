<template>
  <div>
    <div class="mt-8 mb-10">
      <h1>Transações</h1>
      <h2>Gerencie seus gastos.</h2>
    </div>

    <v-list v-for="(item) in transactions">
      <div v-if="item.divider">
        <p style="text-align: left">{{ date = new Date(item.data).toLocaleDateString('pt-BR') }}</p>
      </div>
      <v-list-item-content :title="item.wallet" style="background: #333; border-radius: 8px" class="py-0 my-0 mx-6">
        <div :style="'background:'+item.cor" style="height: 6px; width: 100%;" class="pa-0 mb-2"/>
        <div class="px-4" style="display: flex; color:white;">
          <v-card-text class="pa-0">{{ item.titulo }}</v-card-text>
          <v-card-text class="pa-0"><h3 style="text-align: right">R$ {{ item.valor }}</h3></v-card-text>
        </div>
      </v-list-item-content>
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
      transactionsApi.listTransactions().then(data => {
        this.transactions = this.separate(data.data.data);
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
        retorno[property] = entrada[property]
        if (entrada[property].data !== lastDate) {
          lastDate = entrada[property].data
          retorno[property].divider = true
          this.$store.getters.wallets.then(wallets => {
            for (let key in wallets) {
              if (wallets[key]._id === retorno[property].WalletId) {
                retorno[property].cor = wallets[key].cor
                retorno[property].wallet = wallets[key].nome
              }
            }
          })
        }
      }
      return retorno
    },
  },
}
</script>

<style scoped>

</style>
