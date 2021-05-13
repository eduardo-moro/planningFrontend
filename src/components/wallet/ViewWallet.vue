<template>
  <v-card>
    <v-card-title style="background:#4488ff" class="pa-0">

      <div
          style="display: flex; flex-direction: row; width: 100%"
          class="pa-4 pb-0"
      >
        <h4 style="font-weight: 300 ;color:white;">{{ nome }}</h4>
        <v-spacer/>
        <v-btn
            dark
            icon
            @click="close"
        >
          <v-icon large>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text>
      <div style="display: flex;">
        <v-card-text class="pb-0"><h3 style="text-align: left">saldo:</h3></v-card-text>
        <v-card-text class="pb-0"><h2 style="text-align: right">R$ {{ saldo }}</h2></v-card-text>
      </div>
      <v-divider class="mt-0"/>
      <h2 style="font-weight: 400">Transações:</h2>
      <div
          :style="'max-height:' + !this.$vuetify.breakpoint.mdAndUp?'40vh':'70vh'"
          style="overflow-y: scroll"
      >
        <v-list v-for="(item) in list">
          <v-list-item-content style="background: #333; border-radius: 8px" class="px-2 pb-0 mb-1 mr-2">
            <div style="display: flex; color:white;">
              <v-card-text class="pa-0">{{ item.titulo }}</v-card-text>
              <v-card-text class="pa-0"><h3 style="text-align: right">R$ {{ item.valor }}</h3></v-card-text>
            </div>
          </v-list-item-content>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>

import transactionsApi from "@/models/transactionsApi";

export default {
  name: "ViewWallet",
  props: {
    id: String,
    nome: String,
    saldo: String,
    cor: String,
  },
  data() {
    return {
      openUpdate: false,
      ultimaData: "",
      list: {}
    }
  },
  mounted() {
    this.updateList()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    updateUltimaData(newData) {
      this.ultimaData = newData;
      return "";
    },
    updateList() {
      transactionsApi.listByWallet(this.id).then(data => {
        this.list = data.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
