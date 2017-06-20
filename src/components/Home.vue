<template>

  <div class="hello container-fluid">
    <h2 style="margin-top: 10px;">Lengva skelbimu paieska</h2>

    <b-btn style="margin-top: 60px;" class="mb-4" @click="clicked">Registruokis!</b-btn>

    <div class="row">
      <b-card class="col mt-5 ml-2" >
           Overlay cards are cute!
       </b-card>
       <b-card  class="col mt-5 ml-2">
          Overlay cards are cute!
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    clicked() {
        this.$router.push('Register')
        console.log("navigate to register");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
