<template>
  <!-- <div> -->
<!--     <header class="page">
      <div class="backstretch"  >
        <img src="images/bg-1.jpg"  >
      </div>
    </header> -->
    <div   class="vo-features vo-extra-height">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form name="form">
            <div v-if="current_step === 'email'">
              <div class="form-group form-group-default">
                <h3>Create a new CRM</h3>
                <div class="form-group">
                  <label>Sign up with your e-mail address</label>
                  <input type="email" v-model="user.username" placeholder="Email address" class="form-control" required /> 
                </div>
                <div class="form-group">
                  <label >Password</label>
                  <input type="password" class="form-control" v-model="user.password" required >
                </div>
                <p v-if="current_step_message" v-html="current_step_message"></p>
                <label>It's ok to send me (very occasional) email about the vizob service.</label>
              </div>
              <button class="btn btn-default" @click="EmailVerify(user.username)">Next</button>
            </div>
            <div v-if ="current_step === 'company'">
              <div class="form-group form-group-default">
                <h3>Name your CRM </h3>
                <p>You might want to name your CRM after your division, or working group.</p>
                <label>Company <span>(you can change this later)</span></label>
                <input type="text" v-model="user.company" placeholder="Company or business" class="form-control" required />
              </div>
              <button class="btn btn-default" @click="SuggestUrls(user.company)">Next</button>
            </div>
            <div v-if="current_step === 'domain'">
              <div class="form-group form-group-default">
                <h3>Get a URL</h3>
                <p>This is the address that you and your coworkers will use to sign in to Vizob CRM</p>
                <label>Your Vizob URL <span>(Letters, numbers, and dashes only)</span></label>
                <input type="text" v-model="user.domain" :placeholder="'http://' + user.domain + '.bos.edu.vn'" class="form-control" required>
                <p v-if="current_step_message" v-html="current_step_message"></p>
                <span class="urls_list" v-for="item in urls_checked" :class="item.status=== 'taken' ? 'text-danger' : item.status=== 'available' ? 'text-primary' : ''"> {{item.url}}</span>
              </div>
              <button class="btn btn-default"  @click="SuggestUrls(user.domain)">Next</button>
            </div>
            <div v-if="current_step === 'review'">
              <div class="form-group form-group-default">
                <h3>Confirm your details</h3>
                <div class="form-group">
                  <label >Email address</label>
                  <div class="input-group">  
                    <input type="email" class="form-control" v-model="user.username" disabled /> 
                    <div class="input-group-addon">edit</div> 
                  </div>
                </div>
                <div class="form-group">
                  <label  >Company</label>
                  <div class="input-group">  
                    <input type="text" class="form-control" v-model="user.company"  disabled/> 
                    <div class="input-group-addon">edit</div> 
                  </div>

                </div>
                <div class="form-group">
                  <label>URL</label>
                  <div class="input-group">  
                   <input type="text" class="form-control" v-model="user.domain" disabled /> 
                   <div class="input-group-addon">edit</div> 
                 </div>

                 
               </div>

             </div>
             <button class="btn btn-default"   @click="Signup(user)">Sign Up</button>
           </div>

         </form>
       </div>
       <div class="col-md-6">
        <img src="images/components-1.png">
      </div>

    </div>

  </div>
</div>
<!-- </div> -->
</template>

<script>
  import SignupService from '@/common/services/SignupService'
  export default {
    name: 'create',
    data () {
      return {
        user: {},
        steps: ['email', 'company', 'domain', 'password'],
        current_step: 'email',
        current_step_message: null

      }
    },
    methods: {
      Init() {
        console.log('CreateCtrl>>Init>>');
      },
      EmailVerify(email) {
        var vm = this;
        vm.current_step_message = null;
        SignupService.CheckUsername(email)
        .then((res) => {
          console.log('CreateCtrl>>EmailVerify>>',res);
          if(res.data.message === 'taken') {
            vm.current_step_message = 'Email address ' + email + ' has been taken';
          } else {
            vm.current_step = 'company';
          }
        })
        .catch((err) =>{
          console.error('CreateCtrl>>EmailVerify>>', err);
        }); 
      },
      SuggestUrls(company) {
        var vm = this;
        vm.current_step_message = null;
        vm.user.domain = company;
        SignupService.SuggestUrls(company.replace(/ /g,''))
        .then((res) => {
          console.log('CreateCtrl>>SuggestUrls>>', res);
          if(res.data.message === 'taken') {
            vm.current_step_message = 'We tried the following URLs, but they were unavailable:';
            vm.urls_checked = res.data.urls_checked;
            var urls_availables = vm.urls_checked.find((url) => {
              return url.status === 'available';
            });
            console.log('CreateCtrl>>SuggestUrls>>urls_availables', urls_availables);
            if(urls_availables)
              vm.user.domain = urls_availables.url;
          } 

          if(vm.current_step === 'company')
            vm.current_step = 'domain';
          else if (vm.current_step === 'domain')
            vm.current_step = 'review';

        })
        .catch((err) =>{
          console.error('CreateCtrl>>SuggestUrlswe>>', err);
        }); 

      },
      Signup (user) {
        var vm = this;
        console.log('CreateCtrl>>Signup>>', user);
        SignupService.Signup(user)
        .then((res) => {
          console.log('CreateCtrl>>SuggestUrls>>', res);
          if(res.data.message === 'taken') {
            vm.current_step_message = 'We tried the following URLs, but they were unavailable:';
            vm.urls_checked = res.data.urls_checked;
            var urls_availables = vm.urls_checked.find((url) => {
              return url.status === 'available';
            });
            console.log('CreateCtrl>>SuggestUrls>>urls_availables', urls_availables);
            if(urls_availables)
              vm.user.domain = urls_availables.url;
          }

          if(vm.current_step === 'company')
            vm.current_step = 'domain';
          else if (vm.current_step === 'domain')
            vm.current_step = 'review';

        })
        .catch((err) =>{
          console.error('CreateCtrl>>SuggestUrlswe>>', err);
        }); 

      }
    },
    mounted() {
      console.log(SignupService)
    }
  }
</script>
<style lang="scss">
.wrapper {
  height: 100%;
  &.flex {
    display: flex;
    flex-flow: row wrap;
  }
  .aside {
   width: 300px;

   .urls_list{
    display: block;
  }

  .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {
    background-color: transparent;
    opacity: 1;
    cursor: default;
    border: 0px solid white;
    border-radius: 0px;
    border-bottom:  1.5px solid #444;
    box-shadow: none;
  }
}

.content {
 flex: 3 0px;
}
}
</style>
