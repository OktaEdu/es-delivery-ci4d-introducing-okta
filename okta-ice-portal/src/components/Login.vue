<template>
  <div class="login">
    <!-- Display either the sign in or sign out button based on authN state -->
    <div>
      <a href="#" v-if="authState && authState.isAuthenticated" @click="logout">Sign Out</a>
      <a href="#" v-else @click="login">Sign In</a>
    </div>
  </div>
</template>


<!-- Script supporting the sign in and sign out actions -->
<script>
  export default ({
    name: 'Login',
    methods: {
      async login () {
        await this.$auth.signInWithRedirect({ originalUri: '/' })
      },
      async logout () {
        await this.$auth.signOut()
      }
    }
  })
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  display: inline-block;
}
</style>
