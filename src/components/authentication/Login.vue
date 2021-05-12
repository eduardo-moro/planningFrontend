<template>
  <v-card elevation="0" class="my-16">
    <h1>Login</h1>
    <h3>
      Não possui uma conta? <a style="color: #48f" href="/cadastro">Cadastre-se!</a>
    </h3>
    <br><br><br>
    <v-form @submit="submit">
      <v-text-field
          class="mx-8"
          outlined
          label="Email"
          type="link"
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
    </v-form>
    <a href="/recuperar">
      <p
          class="mr-6"
          style="text-align: right; color: #4488ff"
      >
        Esqueceu sua senha?
      </p>
    </a>
    <v-btn
        class="mx-8"
        color="primary"
        style="width: calc(100% - 64px);"
        x-large
        @click="submit"
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
  name: "Login",
  data() {
    return {
      error: "",
      loading: false,
      rules: {
        required: value => !!value || 'Campo obrigarório',
      },
      form: {
        email: "",
        senha: ""
      }
    }
  },
  methods: {
    submit() {
      this.loading = true;
      firebase
          .auth()
          .signInWithEmailAndPassword(this.form.email, this.form.senha)
          .then(data => {
            console.log(data.user.emailVerified)
            if (data.user.emailVerified) {
              this.loading = false
              this.$router.push("/Carteira")
              this.loading = false;
            } else {
              this.logOut();
              this.error = "Email not verified."
              this.loading = false;
            }
          })
          .catch(err => {
            this.loading = false
            this.error = err.message
          })
    },
    logOut() {
      firebase
          .auth()
          .signOut()
    },
  }
}
</script>

<style scoped>

</style>
