import Vue from "vue";
import VueResource from "vue-resource";
import xml2json from "@/lib/jquery.xml2json.js";
import { Loading, MessageBox, Message, Notification } from "element-ui";
import Lodash from "lodash";

Vue.use(Loading.directive);
Vue.use(require("vue-moment"));

var API_BASE = 'http://api.bos.edu.vn/';

export const get = (url) =>{
  	return Vue.http.get(API_BASE + url);
};

export const post = (url, data) =>{
	console.log(url, data)
	if(url.indexOf('signup') >-1 || url.indexOf('Login') >-1){
		if(url.indexOf('Login') >-1) data.subdomains = [data.username.split("@")[1]];
        return Vue.http.post('http://api.bos.edu.vn/' + url, data);
	}else
	 		return Vue.http.post(API_BASE + url, data);
};

export const put = (url, data) => {
		return Vue.http.put(API_BASE + url, data);
};

export default {
	get,
	post,
	put
}
