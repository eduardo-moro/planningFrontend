<template>
  <div>
    <div class="mt-8 mb-10">
      <h1>Carteiras</h1>
      <h2>Gerencie suas contas.</h2>
    </div>

    <actions />

    <template v-for="(value, counter) in wallets">
      <wallet-card
          :id='value.counter'
          :nome='value.nome'
          :saldo='value.saldo'
          :cor="value.cor"
      />
    </template>
  </div>
</template>

<script>
import WalletCard from "@/components/WalletCard";
import Actions from "@/components/walletActions/Actions";

export default {
  name: "walletsList",
  components: {Actions, WalletCard},
  data: () => {
    return {
      wallets: false,
    }
  },
  created() {
    this.$store.getters.wallets.then(data => {
      this.wallets = data
    })
  },
}
</script>

<style scoped>

</style>
