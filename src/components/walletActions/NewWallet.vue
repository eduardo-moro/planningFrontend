<template>
  <v-card>
    <v-card-title class="pb-0">
      Criar nova carteira
    </v-card-title>
    <v-divider/>
    <div>
      <v-form class="px-4" @submit="() => {}">
        <label>Nome da carteira</label>
        <v-text-field
            label="Nome da carteira"
            placeholder="Informe o nome da sua nova carteira."
            outlined
            rules=""
            :rules="[rules.required]"
        />
        <div style="display: flex">
          <v-text-field
              label="Saldo da carteira"
              placeholder="Informe o saldo da carteira."
              outlined
              rules=""
              :rules="[rules.required]"
          />
        </div>
      </v-form>
      <color-picker />
    </div>
    <v-card-actions>
      <v-spacer/>
      <v-btn
          color="primary"
          text
      >
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ColorPicker from "@/components/ColorPicker";
export default {
  name: "NewWallet",
  components: {ColorPicker},
  data() {
    return {
      rules: {
        required: value => !!value || 'Campo obrigarório',
      },
    }
  }
}
</script>

<style scoped>

</style>
