<template>
  <div class="container">
    <h2> Classifieds bang!</h2>
    <div class="row ">
      <div class="row col-12 justify-content-center">
        <paginate
          name="classifieds"
          :list="classifieds"
          :per="10">
          <b-card-group
            deck>

                    <b-card v-for="item in paginated('classifieds')" :key="item.id"

                        class="col-12 text-left"
                        :img="item.img"
                        :title="item.name"
                        :sub-title="item.url">

                    </b-card>

            </b-card-group>
        </paginate>
      </div>
      <div class="row col-12 justify-content-center">
        <paginate-links for="classifieds"  :show-step-links="true"
          :limit="3"
          :step-links="{
            next: '->',
            prev: '<-'
          }">
        </paginate-links>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
      classifieds: [],
      paginate: ['classifieds']
    }
  },
  methods: {

    getClassifieds(){

      this.$http.get('http://server.app/api/Classifieds/' + this.$route.params.id)
        .then(response => {
            console.log(response);
          this.classifieds = response.body;

      }, errorCallback => {
        console.log(errorCallback);
      });
    },
    openClassified (item) {

      console.log(item.id);
    }
  },
  beforeMount(){
    this.getClassifieds()
 }
}
</script>

<style>
  .card-img {
  width: 268px;
  height: 200px;
  }
  .paginate-links{
    list-style-type:none;
  }

  .paginate-links>li{
    float:left;
    display: inline-block;
    margin: 0 5px;
  }

  .paginate-links>li>a{
    cursor:pointer;
    padding:5px;
  }
  ul.paginate-links > li.active > a{
    background-color:#E8E8E8;
  }




</style>


<style scoped>

  .card{
    border:none;
    cursor: pointer;
    padding: 0;
  }
  .card :hover{
    background-color: #E8E8E8;
  }


</style>
