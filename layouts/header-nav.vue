<script>
export default {
  name: 'HeaderNavLayout',
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<template>
  <v-app>
    <v-app-bar clipped-left color="secondary" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Home
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/test">
          <v-list-item-action>
            <v-icon>dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Test
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
