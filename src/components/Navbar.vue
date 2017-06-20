<template>
<b-navbar toggleable type="inverse" variant="success">

  <b-nav-toggle target="nav_collapse"></b-nav-toggle>

  <b-link class="navbar-brand" to="/main">
    <span>AutoParser</span>
  </b-link>

  <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar>
      <b-nav-item to="/main">Pagrindinis</b-nav-item>
      <b-nav-item to="/new_classifieds">Nauji skelbimai</b-nav-item>

    </b-nav>

    <b-nav is-nav-bar class="ml-auto">
        <b-nav-item v-show="isAuthenticated" @click.native="logOut()" right to="#">Atsijungti</b-nav-item>
        <b-nav-item v-show="!isAuthenticated" @click.native="logIn()" right to="#">Prisijungti</b-nav-item>
    </b-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      isAuthenticated: false
    }
  },
  created: function(){
    this.isAuthenticated = this.$auth.isAuthenticated
  },
  methods:{
    logOut(){
      this.$auth.destroyToken();
      this.$router.push('/home');
    },
    logIn(){
      this.$router.push('/register');
    }


  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
