<template>
  <v-card elevation="0" class="my-16">
    <v-dialog persistent v-model="showModal" width="400">
      <v-card>
        <v-card-title><h2>Olá!</h2></v-card-title>
        <v-card-text>
          <h3 style="text-align: left">
            Foi enviado um email de verificação para {{ this.form.email }},
            por favor acesse seu email para verificar sua conta.
          </h3>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn text @click="gotoLogin">fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <h1>Cadastro</h1>
    <h3>
      Já possui uma conta? <v-btn text style="color: #48f" to="/login">Fazer login</v-btn>
    </h3>
    <br><br><br>
    <v-form @submit="submit">
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
    </v-form>
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
      showModal: false,
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
              data.user.sendEmailVerification().catch(error => {
                alert(error);
              }).then(() => {
                this.openModal()
              })
            })
          })
          .catch(err => {
            this.loading = false
            this.error = err.message
          })
    },
    gotoLogin() {
      this.showModal = false
      this.loading = false
      this.logOut();
      this.$router.push("/Login")
    },
    logOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push({name: "Login"});
          });
    },
    openModal() {
      this.showModal = true;
    }
  }
}
</script>

<style scoped>

</style>
