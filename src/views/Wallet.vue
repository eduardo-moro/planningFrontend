<template>
  <div>
    <div class="mt-8 mb-10">
      <h1>Carteiras</h1>
      <h2>Gerencie suas contas.</h2>
    </div>

    <wallets-list/>

    <br><v-divider/>
    <h3>Fim da listagem</h3>
    <br><br>
  </div>
</template>

<script>
import WalletsList from "@/components/WalletsList";

export default {
  name: "wallet",
  components: {WalletsList}
}
</script>

<style scoped>

</style>
