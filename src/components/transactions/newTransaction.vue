<template>
  <v-card>
    <v-card-title class="pb-0">
      <h3>Nova Transação</h3>
      <v-spacer/>
      <v-btn
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
        <label>Titulo da transação</label>
        <v-text-field
            placeholder="Informe um titulo para a transação."
            outlined
            clearable
            rules="[rules.required]"
            v-model="form.titulo"
            :rules="[rules.required]"
        />
        <label>Valor da transação</label>
        <VuetifyNumber
            placeholder="Informe o valor da transação."
            outlined
            clearable
            rules=""
            style="width: 100%"
            value-when-is-empty=""
            v-model="form.valor"
            :rules="[rules.required]"
            :options="options"
        />
        <v-select
            placeholder="Informe a carteira da transação."
            v-model="select"
            :items="wallets"
            item-text="title"
            item-value="id"
            return-object
            outlined
            prepend-icon="mdi-circle"
        >
          <template v-slot:prepend>
            <v-icon x-large class="mx-1 ml-4" style="margin-top: -10px" :color="select.cor">mdi-circle</v-icon>
          </template>
        </v-select>
        <v-select
            placeholder="Informe o tipo da transação."
            outlined
            v-model="form.tipo"
            :items="['entrada', 'saida']"
        ></v-select>
      </v-form>
    </div>
    <br><br>
    <v-card-actions>
      <v-spacer/>
      <v-btn
          color="primary"
          text
          @click="submit(false)"
      >
        Agendar
      </v-btn>
      <v-btn
          color="primary"
          text
          @click="submit(true)"
      >
        Salvar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import VuetifyNumber from "@/components/number/VuetifyNumber";
import transactionsApi from "@/models/transactionsApi";

export default {
  name: "newTransaction",
  components: {VuetifyNumber},
  data() {
    return {
      error: "",
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
      wallets: [],
      select: {
        id: ""
      },
      form: {
        titulo: "",
        valor: "",
        tipo: "entrada"
      }
    }
  },
  mounted() {
    this.setWallets();
  },
  methods: {
    close() {
      this.$emit("close")
    },
    submit(closed = false) {
      this.form.WalletId = this.select.id;
      this.form.finalizado = closed;
      this.form.data = new Date().toDateString();
      transactionsApi.createTransactions(this.form).then(data => {
        this.$emit("update")
      })
    },
    setWallets() {
      let retorno = [];
      this.$store.getters.wallets.then(wallets => {
        for (let value in wallets) {
          if(wallets[value].ativa) {
            retorno.push({
              id: wallets[value]._id,
              title: wallets[value].nome,
              cor: wallets[value].cor
            })
          }
        }
      })
      this.wallets = retorno;
    }
  }
}
</script>

<style scoped>

</style>
