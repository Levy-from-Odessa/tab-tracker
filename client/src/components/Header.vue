<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4 home">
    <router-link tag="span" :to="{name:'song'}">NabTracer
    </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat :to="{name:'song'}">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-toolbar-items>
        <v-btn  flat :to="{name:'login'}">Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn flat :to="{name:'register'}">Sing up</v-btn>
      </v-toolbar-items>
    </v-toolbar-items>
    <v-btn v-if="$store.state.isUserLoggedIn" flat @click="logout()">Log out</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'song'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: rgb(194, 247, 255);
}
</style>
