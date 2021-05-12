<template>
  <v-card>
    <v-card-title style="background: #5894ff" class="pb-0">
      <h3 style="color:white;">Criar nova carteira</h3>
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
    </v-card-title>
    <div>
      <v-form class="px-4" @submit="() => {}">
        <br>
        <label>Nome da carteira</label>
        <v-text-field
            label="Nome da carteira"
            placeholder="Informe o nome da sua nova carteira."
            outlined
            clearable
            rules="[rules.required]"
            v-model="form.nome"
            :rules="[rules.required]"
        />
        <label>Saldo da carteira</label>
        <div style="display: flex">
          <VuetifyNumber
              label="Saldo da carteira"
              placeholder="Informe o saldo da carteira."
              outlined
              clearable
              rules=""
              style="width: 100%"
              value-when-is-empty=""
              v-model="form.saldo"
              :rules="[rules.required]"
              :options="options"
          />
        </div>
      </v-form>
      <color-picker v-model="form.cor"/>
    </div>
    <v-card-actions>
      <v-spacer/>
      <v-btn
          color="primary"
          text
          @click="submit"
      >
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ColorPicker from "@/components/ColorPicker";
import VuetifyNumber from "@/components/number/VuetifyNumber";
import walletsApi from "@/models/walletsApi";

export default {
  name: "NewWallet",
  components: {VuetifyNumber, ColorPicker},
  data() {
    return {
      rules: {
        required: value => !!value || 'Campo obrigarório',
      },
      options: {
        locale: "pt-BR",
        prefix: "R$",
        suffix: "",
        length: 11,
        precision: 2
      },
      form: {
        nome: "",
        saldo: "0.00",
        cor: "#000000"
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    submit() {
      walletsApi.createWallet(this.form)

    }
  }
}
</script>

<style scoped>

</style>
