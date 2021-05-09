<template>
  <span>
    <v-navigation-drawer app v-model="drawer" style="background: #333333" dark>
      <v-flex style="flex-direction: column; justify-content: space-between">
        <v-flex>
          <v-list>
            <template v-for="(item, index) in items">
              <v-list-item :key="index">
                <v-list-item-content>
                  {{ item.title }}
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="`divider-${index}`"></v-divider>
            </template>
          </v-list>
        </v-flex>

        <template>
          <v-list-item>
            <v-list-item-content>
              <v-btn light color="#ff6347" block dark>
                sair
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-flex>
    </v-navigation-drawer>
    <v-toolbar app color="primary lighten-2" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn title="login" text class="hidden-sm-and-down">
        <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
  name: 'IndexNavigation',
  data() {
    return {
      appTitle: 'Planner',
      drawer: false,
      items: [
        {title: 'Menu'},
      ]
    };
  }
};
</script>

<style scoped>
</style>
