<template>
  <v-card>
    <v-card-title style="background:#4488ff" class="pa-0">

      <div
          style="display: flex; flex-direction: row; width: 100%"
          class="pa-4 pb-0"
      >
        <h4 style="font-weight: 300 ;color:white;">Visualizar "{{ nome }}"</h4>
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
      <div
          :style="'background:'+cor"
          style="height: 8px; width: 100%"
      />
    </v-card-title>
    <v-card-text>
      <div style="display: flex;">
        <v-card-text class="pb-0">saldo:</v-card-text>
        <v-card-text class="pb-0"><h2 style="text-align: right">R$ {{ saldo }}</h2></v-card-text>
      </div>
      <h2 style="font-weight: 400">Transações:</h2>
      <v-list>
        <v-list-item-content style="background: #333; border-radius: 8px" class="px-2 pb-0 mb-1">
          <div style="display: flex; color:white;">
            <v-card-text class="pa-0">Coxinha na XV</v-card-text>
            <v-card-text class="pa-0"><h3 style="text-align: right">R$ 4,50</h3></v-card-text>
          </div>
        </v-list-item-content>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ViewWallet",
  props: {
    id: String,
    nome: String,
    saldo: String,
    cor: String,
  },
  data() {
    return {}
  },
  methods: {
    close() {
      this.$emit('close')
    },
  }
}
</script>

<style scoped>

</style>
