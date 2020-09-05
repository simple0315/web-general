<template>
    <div>
        <div class="login-wrap" v-show="showLogin">
            <h6 class = "posti">Cleanmymac4.6.5</h6>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username" >
            <input type="password" placeholder="请输入密码" v-model="password" @keyup.enter="login">
            <button @click="login">登录</button>
            <!--<span @click="ToRegister">没有账号？马上注册</span>-->
        </div>
        <!--<div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newusername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button @click="register">注册</button>
            <span @click="ToLogin">已有账号？马上登录</span>
        </div>-->
    </div>
</template>

<script>
	import axios from 'axios';
	// axios.defaults.withCredentials = true;
	import {setCookie,getCookie} from '../../assets/js/cookie.js'
	
    export default{
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newusername: '',
                newPassWord: ''
            }
        },
        
	    mounted(){
			/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
		    if(getCookie('username')){
				this.$router.push('/home')
		    }
	 	},
	 	 
		methods:{
		    login(){
		        if(this.username == "" ){
		            this.tishi = "请输入用户名"
		            this.showTishi = true
		        }else if(this.password == ""){
		        	this.tishi = "请输入密码"
		        	this.showTishi = true
		        }else{
		            let data = {'username':this.username,'password':this.password}
		            /*接口请求*/
		            axios.post(window.domain.request_prefix +'/user/manage/login',data).then((res)=>{
		              if(res.data.code === 1001){
		                  this.tishi = "用户名或密码错误"
		                  this.showTishi = true
		              }else if(res.data.code === -1){
						this.tishi = res.data.message
		                  this.showTishi = true
					  }else{
		                  this.tishi = "登录成功"
		                  this.showTishi = true
						  setCookie('username',this.username,1000*60)
						  setCookie('roles',res.data.data.user.menu_list,1000*60)
						  localStorage.setItem("username", res.data.data.user.username);// 使用localstoage来记录登陆信息
                  		  localStorage.setItem("roles", res.data.data.user.menu_list);
             	 	      localStorage.setItem("permissions", res.data.data.user.permission_list);
		                  setTimeout(function(){
		                      this.$router.push('/home')
		                  }.bind(this),300)
		              }
		          })
		      	}
		    },
		}
	}
</script>

<style>
	.posti{
		margin: 230px 0 10px 0;
		font-size: 50px;
		font-family: "宋体";
	}
    .login-wrap{
    	text-align:center;
    }
    
    .login-wrap input{
    	display:block;
    	width:280px; 
    	height:50px; 
    	line-height:50px; 
    	margin:0 auto; 
    	margin-bottom: 10px; 
    	outline:none;
    	border:1px solid #888;
    	padding:10px; 
    	box-sizing:border-box;
    }
    	   
    .login-wrap p{
    	color:#669999;
    	font-size: 25px;
    	margin-bottom: 10px;
    	font-family: "宋体 ";
    }
    
    .login-wrap button{
    	display:block; 
    	width:280px; 
    	height:50px; 
    	line-height: 50px;
    	margin:0 auto; 
    	border:none; 
		/* background-color:#41b883; */
		background-color:#1fd4ad;
    	color:#fff;
    	font-size:16px; 
    	margin-bottom:5px;
    }
   
    .login-wrap span{
    	cursor:pointer;
    }
    
    .login-wrap span:hover{
		color:#41b883;
    }
</style>