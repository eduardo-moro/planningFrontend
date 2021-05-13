<template>
  <div>
    <div class="mt-8 mb-10">
      <h1>Carteiras</h1>
      <h2>Gerencie suas contas.</h2>
    </div>
    <actions @update="forceRerender"/>

    <div v-for="(value) in wallets">
      <wallet-card
          :id='value._id'
          :nome='value.nome'
          :saldo='value.saldo'
          :cor="value.cor"
          :ativa="value.ativa"
          @update="forceRerender"
      />
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


  </div>
</template>

<script>
import WalletCard from "@/components/wallet/WalletCard";
import Actions from "@/components/wallet/Actions";
import walletsApi from "@/models/walletsApi";

export default {
  name: "walletsList",
  components: {Actions, WalletCard},
  data: function (t = this) {
    return {
      openUpdate: false,
      wallets: t.$store.getters.wallets,
    }
  },
  created() {
    this.loadWallets()
  },
  methods: {
    loadWallets() {
      if (this.$store.getters.wallets.then !== undefined) {
        this.$store.getters.wallets.then(data => {
          this.wallets = data;
        })
      } else {

      }
    },
    forceRerender() {
      walletsApi.listWallets().then(data => {
        this.wallets = data.data.data;
      })
    }
  },
}
</script>

<style scoped>

</style>
