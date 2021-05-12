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
          <v-btn text @click="showModal=false">fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <h1 style="font-weight: 300">Recuperação</h1>
    <h3 style="font-weight: 300">
       <a style="color: #48f" href="/Login">Retornar ao login</a>
    </h3>
    <br><br><br>
    <v-form>

      <v-text-field
          class="mx-8"
          outlined
          label="Email"
          type="link"
          v-model="form.email"
          append-icon="mdi-email-outline"
          placeholder="Informe seu email"
          :rules="[rules.required]"
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
  name: "Recuperar",
  data() {
    return {
      form: {
        email: "",
      },
      rules: {
        required: value => !!value || 'Campo obrigarório',
      },
      error: "",
      loading: false,
      showModal: false
    }
  },
  methods: {
    submit() {
      this.loading = true;
      firebase
          .auth()
          .sendPasswordResetEmail(this.form.email)
          .then(() => {
            this.showModal = true;
            this.loading = false;
          })
          .catch(error => {
            this.error = error.message;
            this.loading = false;
          });
    },
  }
}
</script>

<style scoped>

</style>
