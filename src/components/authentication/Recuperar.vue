<template>
  <v-card elevation="0" class="my-16">
    <h1 style="font-weight: 300">Recuperação</h1>
    <h3 style="font-weight: 300">
      Recuperação de senha
    </h3>
    <br><br><br>
    <v-text-field
        class="mx-8"
        outlined
        label="Email"
        append-icon="mdi-email-outline"
        placeholder="Informe seu email"
    />
  </v-card>
</template>

<script>
export default {
  name: "Recuperar"
}
</script>

<style scoped>

</style>
