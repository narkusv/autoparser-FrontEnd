<template>
  <div class="container">
  <h2>New  Classifieds!</h2>
    <div class="row">
      <div class="row col-12 justify-content-center">
          <paginate
            name="classifieds"
            :list="classifieds"
            :per="10">
            <b-card-group
              deck>

              <b-card  v-for="item in paginated('classifieds')" :key="item.id"

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
  name: 'new-classifieds',

  data () {
    return {
      classifieds: [],
      paginate: ['classifieds']
    }
  },
  methods: {

    getNewClassifieds(){
      this.$http.get('http://server.app/api/New_classifieds', this.$auth.getToken())
        .then(response => {
          this.classifieds = response.body;
      }, errorCallback => {
        console.log(errorCallback);
      });
    }

  },
  beforeMount(){
    this.getNewClassifieds();
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

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
}



</style>
