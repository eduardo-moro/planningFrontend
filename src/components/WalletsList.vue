<template>
  <div>
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

export default {
  name: "walletsList",
  components: {WalletCard},
  data: () => {
    return {
      wallets: false
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
    }
  }
}
</script>

<style scoped>

</style>
