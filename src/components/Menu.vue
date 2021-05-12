<template>
  <div>
    <span class="hidden-md-and-up">
      <v-app-bar app color="secondary darken-1">
        <v-app-bar-nav-icon @click=toggleMe style="color: white"/>
        <v-app-bar-title style="color:white;">{{ appTitle }}</v-app-bar-title>
        <v-spacer/>
        <template v-for="(item, index) in mainItems">

          <v-btn
              :key="index"
              link
              icon
              text
              dark
              :href="item.link"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </template>
      </v-app-bar>
    </span>

    <v-navigation-drawer
        fixed
        :expand-on-hover="$vuetify.breakpoint.mdAndUp"
        :permanent="$vuetify.breakpoint.mdAndUp"
        v-model="drawer"
        dark
        style="z-index: 10"
        color="secondary darken-1"
        disable-resize-watcher
    >
      <v-list
          nav
          dense
          class="d-flex flex-column"
      >
          <v-icon>mdi-currency-usd</v-icon>
        <v-divider />
        <template v-for="(item, index) in mainItems">
          <v-list-item link class="px-2" :key="index" :href="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-divider/>
        <v-list-item class="px-2" link @click="logOut">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            sair
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'Menu',
  props: ['toggle'],
  data() {
    return {
      appTitle: 'Planner',
      drawer: false,
      showDrawer: this.$vuetify.breakpoint.mdAndUp || this.drawer,
      mainItems: [
        {title: 'Sobre', link: '/About', icon: "mdi-information"},
        {title: 'Carteira', link: '/Carteira', icon: "mdi-wallet"},
      ],
    };
  },
  watch: {
    toggle: function () {
      this.toggleMe();
    },
  },
  methods: {
    toggleMe() {
      this.drawer = !this.drawer
    },
    logOut() {
      firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push({name: "Login"});
          });
    }
  }
}
</script>
