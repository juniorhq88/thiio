<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Admin Panel</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <v-navigation-drawer app permanent>
              <v-list>
                <v-list-item link :to="{ name: 'Home' }">
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item link :to="{ name: 'Users' }">
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Users</v-list-item-title>
                </v-list-item>

              </v-list>
            </v-navigation-drawer>
          </v-col>
          <v-col cols="12" md="9">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
