<template>
  <div>
    <div class="mt-8 mb-10">
      <h1>Carteiras</h1>
      <h2>Gerencie suas contas.</h2>
    </div>

    <actions></actions>

    <template v-for="(value) in wallets">
      <wallet-card
          v-if=isEmpty
          :nome='value.nome'
          :saldo='value.saldo'
          :cor="value.cor"
      />
      <template v-else>
        <h3>Você não possui carteiras cadastradas.</h3>
      </template>
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
  methods: {
    isEmpty() {
      return empty.constructor === this.wallets
    },
    newWallet () {

    }
  }
}
</script>

<style scoped>

</style>
