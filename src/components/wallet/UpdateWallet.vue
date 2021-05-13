<template>
  <v-card>
    <v-card-title style="background: #5894ff" class="pb-0">
      <h3 v-if="!update" style="color:white;">Criar nova carteira</h3>
      <h3 v-else style="color:white;">Editar {{ nome }}</h3>
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
        <h3 style="color: tomato;">{{ error }}</h3>
        <label>Nome da carteira</label>
        <v-text-field
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
    <br><br>
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
import ColorPicker from "@/components/wallet/ColorPicker";
import VuetifyNumber from "@/components/number/VuetifyNumber";
import walletsApi from "@/models/walletsApi";

export default {
  name: "UpdateWallet",
  components: {VuetifyNumber, ColorPicker},
  props: {
    id: String,
    nome: String,
    saldo: String,
    cor: String,
    update: Boolean
  },
  data() {
    return {
      form: {
        id: this.id,
        nome: this.nome || "",
        saldo: this.saldo || 0.00,
        cor: this.cor || "#000000",
        ativa: true,
      },
      error: '',
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
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    closeAndUpdate() {
      this.$emit('closeAndUpdate')
    },
    submit() {
      if (this.form.nome !== '') {
        if (this.update) {
          walletsApi.updateWallet(this.form).then(data => {
            if (data) {
              this.$store.dispatch('updateWallets')
              this.closeAndUpdate()
            }
          })
        } else {
          walletsApi.createWallet(this.form).then(data => {
            if (data) {
              this.$store.dispatch('updateWallets')
              this.closeAndUpdate()
            }
          })
        }
      } else {
        this.error = ("Nome da carteira não pode ser vazio.")
      }
    }
  }
}
</script>

<style scoped>

</style>
