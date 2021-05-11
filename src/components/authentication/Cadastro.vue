<template>
  <v-card elevation="0" class="my-16">
    <h1>Cadastro</h1>
    <h3>
      Já possui uma conta? <a style="color: #48f" href="/login">Fazer login</a>
    </h3>
    <br><br><br>
    <v-text-field
        class="mx-8"
        outlined
        label="Nome"
        append-icon="mdi-account-outline"
        placeholder="Informe seu nome"
        :rules="[rules.required]"
        v-model="form.nome"
    />
    <v-text-field
        class="mx-8"
        outlined
        label="Email"
        type="email"
        append-icon="mdi-email-outline"
        placeholder="Informe seu email"
        :rules="[rules.required]"
        v-model="form.email"
    />
    <v-text-field
        class="mx-8"
        outlined
        label="Senha"
        type="password"
        append-icon="mdi-lock-outline"
        placeholder="Informe sua senha"
        :rules="[rules.required]"
        v-model="form.senha"
    />
    <v-text-field
        class="mx-8"
        outlined
        type="password"
        label="Confirmação de senha"
        append-icon="mdi-lock-outline"
        placeholder="Informe sua senha Novamente"
        :rules="[rules.required, rules.igualSenha]"
    />
    <v-btn
        class="mx-8"
        color="primary"
        style="width: calc(100% - 64px);"
        x-large
        @click="submit()"
        :loading="loading"
    >
      Continuar
    </v-btn>
    <br><br>
    <h3 style="color: tomato;">{{ error }}</h3>
  </v-card>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Cadastro",
  data() {
    return {
      error: "",
      rules: {
        required: value => !!value || 'Campo obrigarório',
        igualSenha: value => value === this.form.senha || 'Confirmação deve ser igual à senha'
      },
      form: {
        nome: "",
        email: "",
        senha: "",
      },
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.senha)
          .then(data => {
            data.user.updateProfile({
              displayName: this.form.nome
            }).then(() => {
              this.loading = false
              this.$router.replace("/Login")
            })
          })
          .catch(err => {
            this.loading = false
            this.error = err.message
          })
    }
  }
}
</script>

<style scoped>

</style>
