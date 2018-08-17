import RESTService from '@/common/services/RESTService';
// import AuthenticationFactory from '@/services/AuthenticationFactory'

export const CheckUsername = (email) =>{
	return RESTService.get('checkUsername/' + email);
};

export const SuggestUrls = (domain) =>{
	return RESTService.get('SuggestUrls/' + domain);
};

export const Signup = (user) =>{
	return RESTService.post('signup', user);
};

export const DomainVerify = (domain) =>{
	return RESTService.post('verifyDomain',  domain);
};

export const Login = (user) =>{
	return RESTService.post('Login', user);
};

export const Logout = () =>{
	if (this.$AuthenticationFactory.isLogged) {
		this.$AuthenticationFactory.isLogged = false;
        delete this.$AuthenticationFactory.user;
        delete this.$AuthenticationFactory.userRole;
 
        delete window.sessionStorage.token;
        delete window.sessionStorage.user;
        delete window.sessionStorage.userRole;
		this.$router.push("/login");
	}
};

export default {
  	CheckUsername,
	SuggestUrls,
	Signup,
	DomainVerify,
	Login,
	Logout
}