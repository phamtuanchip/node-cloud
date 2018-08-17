<template>
  <div   class="vo-features vo-extra-height">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Login to .bos.edu.vn</h2>
          <form name="createForm">
           <div class="form-group form-group-default">
            <div class="form-group">
              <label>Login with your e-mail address</label>
              <input type="email" v-model="user.username" placeholder="Email address" class="form-control" required /> 
            </div>
            <div class="form-group">
              <label >Password</label>
              <input type="password" class="form-control" v-model="user.password" required >
            </div>
          </div>
          <button class="btn btn-default" @click="Login(user)">Login</button>
        </form>
      </div>
      <div class="col-md-6">
        <img src="images/components-1.png">
      </div>

    </div>

  </div>
</div>
</template>

<script>
  import SignupService from '@/common/services/SignupService'
  export default {
    name: 'Created',
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
      }
    },
    methods: {
      Login (user) {
        var vm = this;
        SignupService.Login(user)
        .then((res) => {
          console.log('LoginCtrl>>Login>>', res);

          // vm.AuthenticationFactory.isLogged = true;
          // vm.AuthenticationFactory.user = res.data.user.username;
          // //vm.AuthenticationFactory.userRole = data.user.role;

          window.sessionStorage.token = res.data.token;
          window.sessionStorage.user = res.data.user.username; // to fetch the user details on refresh
          //window.sessionStorage.userRole = data.user.role; // to fetch the user details on refresh

          vm.$router.push("/loader");
        })
        .catch((err) =>{
          console.error('LoginCtrl>>Login>>', err);
        }); 
      }
    },
    computed: {
    }
  }
</script>
<style lang="scss">

.wrapper {
  height: 100%;
  .flex {
    display: flex;
    flex-flow: row wrap;
  }
  .aside {
   width: 300px;
   .urls_list{
     display: block;
   }
 }

 .content {
   flex: 3 0px;
 }
}
</style>
