<template>
  <div class="container">
    <div class="row">
      <new-classifieds-preview class="col-md-7 col-xs-12"></new-classifieds-preview>
      <div class="row  col-12 justify-content-center">
        <div class="mt-5 col-md-6 col-xs-12 text-center">
          <form class="form-inline">
             <b-form-input  v-model="newParseURL" type="text" placeholder="Paieskos nuoroda" ></b-form-input>
             <b-form-input  v-model="newParseName" type="text" placeholder="Paieskos pavadinimas" ></b-form-input>
             <b-btn @click="addNewParseURL" type="button" :disabled="isLoadingData" class=" ml-3">
                 <icon class="icon" name="plus" ></icon>
             </b-btn>

           </form>
        </div>
      </div>
      <div class="row  justify-content-center">
        <b-list-group class="mt-5 col-md-6 col-xs-12">

          <b-list-group-item  v-for="item in parseUrls" :key="item.id">

                <b-card
                  class="col-12 text-left"
                  :title="item.pivot.name"
                  :sub-title="item.url">
                    <b-btn @click.native="openClassified(item)" size="md" variant="primary" type="button" class=" ml-3">
                        Perziureti
                    </b-btn>
                    <b-btn @click="RemoveParseURL(item)" size="md" variant="danger" type="button" :disabled="isLoadingData" class=" ml-3">
                        Istrinti
                    </b-btn>
                    <small slot="footer">

                    </small>

                </b-card>

          </b-list-group-item>


        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      parseUrls: [],
      newParseURL:'',
      newParseName:'',
      isLoadingData: false
    }
  },
  methods: {
    RemoveParseURL(item){
      this.isLoadingData = true;
      this.$http.post('http://server.app/api/RemoveParseURL',
        {
          id: item.id,
        })
        .then(response => {
          this.isLoadingData = false;
          this.getParseUrls();
      }, errorCallback => {
          this.isLoadingData = false
          console.log(errorCallback);
      });
    },
    getParseUrls(){

      this.$http.get('http://server.app/api/ParseURL', this.$auth.getToken())
        .then(response => {
            console.log(response);
          this.parseUrls = response.body;

      }, errorCallback => {
        console.log(errorCallback);
      });
    },
    openClassified (item) {
      this.$router.push({ name: 'Classifieds', params: { id: item.id }})
    },
    addNewParseURL(){
      if(!this.newParseURL || !this.newParseName){
        alert("Visi laukai privalo buti irasyti");
        return;
      }
      this.isLoadingData = true;
      this.$http.post('http://server.app/api/ParseURL',
        {
          url: this.newParseURL,
          name: this.newParseName
        }
      )
        .then(response => {
          this.getParseUrls();
          this.isLoadingData = false;
        }, errorCallback => {
          this.isLoadingData = false;
          console.log(errorCallback);
        });
    }
  },
  beforeMount(){
    this.getParseUrls();
 }
}
</script>

<style scoped>
  button{
    border:none;
    cursor:pointer;
  }
  .card{
    border: none;
  }


</style>
