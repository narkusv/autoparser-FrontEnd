<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-12 mt-5">
        <b-card
            show-header
            class="mb-2"
            show-footer>

            <small slot='header'>
              <div class="row d-flex justify-content-between">
                <div class="ml-5" >
                  <a @click="loginClicked" id="login-form-link" v-bind:class="{ active: showLogin }">Prisijungti</a>
                </div>
                <div class="mr-5" >
                  <a @click="registerClicked" class="text-right" id="register-form-link" v-bind:class="{ active: showRegister }">Registruotis</a>
                </div>
              </div>
            </small>

            <div class="panel-body">
						<div class="row">
							<div class="col-12">
								<form id="login-form" v-show='showLogin'>
									<b-form-input v-model='username' type="text" placeholder="Username" ></b-form-input>

                  <b-form-input v-model='password' type="text" placeholder="Password" class="mt-2"></b-form-input>
                  
                  <div class="row">
                    <b-btn @click="login" type="button" class="mt-3 ml-3">
                       Prisijungti
                    </b-btn>
                  </div>

								</form>
								<form id="register-form"  v-show="showRegister">
                  <b-form-input type="text" v-model="formData.name" name='name' placeholder="Username" ></b-form-input>

                  <b-form-input type="text" v-model="formData.email" name='email' placeholder="Email" class="mt-2"></b-form-input>

                  <b-form-input type="text" v-model="formData.password" name='password' placeholder="Password" class="mt-2"></b-form-input>

                  <div class="row">
                    <b-btn @click="register" type="button" class="mt-3 ml-3">
                       Registruotis
                    </b-btn>
                  </div>

								</form>
							</div>
						</div>
					</div>

            <small slot="footer" class="text-muted">
                Last updated 3 mins ago
            </small>
        </b-card>

      </div>

    </div>


  </div>

</template>

<script>
export default {
  name: 'register',

  data: function () {
    return {
      showLogin: true,
      showRegister: false,
      username: '',
      password: '',
      formData: {
            name: '',
            email: '',
            password: ''
        }
    }
  },
  methods: {
    loginClicked() {

      this.showRegister = false;
      this.showLogin = true;
        console.log(this.showLogin + " login");
    },
    registerClicked(){
      this.showRegister = true ;
      this.showLogin = false;
      console.log(this.showRegister + " register");
    },
    login(){
      console.log("cliced");


      this.$http.post('http://server.app/oauth/token',
      {
          client_id: 2,
          client_secret: 'Qhd6OBCMuPG0UVfWf1DpDQXQ2nweCwdvcteTAxy7',
          grant_type: 'password',
          username: this.username,
          password: this.password
      }).then(response => {
        console.log("success login");
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
        this.$router.push('/main');
      }, errorCallback => {
        console.log(errorCallback);
      });
    },
    register(){
      console.log(JSON.stringify(this.formData));
      this.$http.post('http://server.app/registerApiUser', JSON.stringify(this.formData))
        .then(response => {
          this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
          this.$router.push('/main');
      }, errorCallback => {
        console.log(errorCallback);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card>.card-header {
	color: #00415d;
	background-color: #fff;
	border-color: #fff;
	text-align:center;
}
.card>.card-header a{
  cursor: pointer;
	text-decoration: none;
	color: #666;
	font-weight: bold;
	font-size: 15px;
	-webkit-transition: all 0.1s linear;
	-moz-transition: all 0.1s linear;
	transition: all 0.1s linear;
}

.card>.card-header a.active{
	color: #029f5b;
	font-size: 18px;
}
</style>
