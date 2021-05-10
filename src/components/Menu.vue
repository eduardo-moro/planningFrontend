<template>
  <div>
    <span class="hidden-md-and-up">
      <v-app-bar app color="secondary lighten-1">
          <v-app-bar-nav-icon @click=toggleMe style="color: white" />
      </v-app-bar>
    </span>

    <v-navigation-drawer
        absolute
        :expand-on-hover="$vuetify.breakpoint.mdAndUp"
        :permanent="$vuetify.breakpoint.mdAndUp"
        v-model="drawer"
        dark
        style="z-index: 10"
        color="secondary lighten-1"
        disable-resize-watcher
    >
      <v-list nav dense class="d-flex flex-column">
        <template v-for="(item, index) in items">
          <v-list-item link class="px-2" :key="index" :href="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item class=" px-2">
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

export default {
  name: 'Menu',
  props: ['toggle'],
  data() {
    return {
      appTitle: 'Planner',
      drawer: false,
      showDrawer: this.$vuetify.breakpoint.mdAndUp || this.drawer,
      items: [
        {title: 'Carteira', link: '/',      icon: "mdi-wallet" },
        {title: 'Sobre',    link: '/about', icon: "mdi-information" }
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
  }
}
</script>
