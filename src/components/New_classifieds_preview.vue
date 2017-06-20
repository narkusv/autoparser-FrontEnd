<template>
  <div class="container">
    <div class="row">
      <div class="row  justify-content-center">
        <b-card-group
          deck>

            <b-card v-for="item in classifieds" :key="item.id"

                class="col-12 text-left"
                :img="item.img"
                :title="item.name"
                :sub-title="item.url">

            </b-card>
          </b-card-group>
      </div>
      <div class="row col-12 justify-content-center" v-if="classifieds.length > 0">
        <b-button @click="openNewClassifieds" size="lg" variant="primary" href="">Visi nauji skelbimai</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new-classifieds-preview',

  data () {
    return {
      classifieds: []
    }
  },
  methods: {

    getNewClassifieds(){
      this.$http.get('http://server.app/api/Preview_new_classifieds', this.$auth.getToken())
        .then(response => {
          console.log("success on retrieval");
          this.classifieds = response.body;
      }, errorCallback => {
        console.log(errorCallback);
      });
    },
    openNewClassifieds(){
      this.$router.push({name: "New_classifieds"});
   }

  },
  beforeMount(){
    this.getNewClassifieds();
 }
}
</script>

<style scoped>
  .card-img {
  width: 268px;
  height: 200px;
  }
  button{
    border:none;
    cursor:pointer;
  }
  .card{
    border: none;
  }
  .list-group-item{
    cursor: pointer;
    padding: 0;
  }
  .list-group-item :hover{
    background-color: #E8E8E8;
  }
</style>
