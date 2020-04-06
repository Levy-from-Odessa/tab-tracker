<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">

        <div class="ma-5">
          <v-text-field v-model="email" type="email" name="email" label="email"></v-text-field>
          <v-text-field v-model="password" type="password" name="password" label="password" ></v-text-field>
          <v-chip v-html="error"   color="red" ></v-chip><br>
          <v-btn class="cyan" @click="onRegister()" dark>Register</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async onRegister () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'song'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
