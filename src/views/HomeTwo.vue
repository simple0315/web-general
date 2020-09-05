<template>
    <div class="overall">
        <div class="public top">
            <ul class="mainmenu">
                <li class="mi01 mic1 mgR64"></li>
                <li class="mi02 mgR64"></li>
                <li class="mi03 mgR64"></li>
                <li class="mi04"></li>
            </ul>
            <div class="user">
                <div class="head"></div>
                <div class="login">
                    <p>
                        <a>{{name}}</a>
                        <a href="#" @click="quit">退出</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="public menuleft"></div>
        <div class="public menutop"></div>

        <ul class="public menubox">
            <div v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                <li
                    :class="{'menushow':index==currentIndex}"
                    v-for="model in item.model"
                    v-if="model=='--' || models.indexOf(model)>-1">
                    <div class="iconm iconmcur" @click="togglemenu(index)">
                        <P >{{item.name}}</P>
                    </div>
                    <ul
                        v-for="child in item.children"
                        :index="child.path"
                        :key="child.path"
                        v-if="!child.hidden"
                        class="nav dpnn">
                        <li v-if="child.model=='--' || models.indexOf(child.model)>-1">
                            <router-link :to="child.path">
                                <p>
                                    <i></i>
                                    {{child.name}}
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
        <div class="centerbox">
            <div class="bar_a disBox boxAlign-center">
                <p>
                    {{$route.name}}
                    <span>-TENANT</span>
                </p>
            </div>
            <div class="grid-content bg-purple-light">
                <el-col :span="24" class="content-wrapper">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </div>
        </div>
        <div class="public bottom"></div>
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.withCredentials = true;
    import {setCookie, getCookie, delCookie, getCookie1} from '../assets/js/cookie.js';

    export default {
        data() {
            return {
                name: '',
                models: localStorage.getItem('permissions'),
                routes: this.$router.options.routes,
                arr1: [
                    'user', 'role'
                ],
                currentIndex: 0,
                currentIndex1: 0,
                sysName: 'VUEADMIN',
                collapsed: false,
                sysUserName: '',
                sysUserAvatar: '',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },

        methods: {
            quit() {
                /*删除cookie*/
                delCookie('username');
                this
                    .$router
                    .push('/');
                axios.get(window.domain.request_prefix + "/user/logout");
            },

            togglemenu(index) {
                index == this
                    .currentIndex
                    console
                    .log(this.models)
                        ? (this.currentIndex = -1)
                        : this.currentIndex = index;
            },
            onSubmit() {
                console.log('submit!');
            },
            handleopen() {},
            handleclose() {},
            handleselect: function (a, b) {},
            //退出登录
            logout: function () {
                var _this = this;
                this
                    .$confirm('确认退出吗?', '提示', {
                        //type: 'warning'
                    })
                    .then(() => {
                        sessionStorage.removeItem('user');
                        _this
                            .$router
                            .push('/');
                    })
                    .catch(() => {});
            },
            //折叠导航栏
            collapse: function () {
                this.collapsed = !this.collapsed;
            },
            showMenu(i, status) {
                this
                    .$refs
                    .menuCollapsed
                    .getElementsByClassName('submenu-hook-' + i)[0]
                    .style
                    .display = status
                        ? 'block'
                        : 'none';
            }
        },
        mounted() {
            var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.sysUserName = user.name || '';
                this.sysUserAvatar = user.avatar || '';
            }
            /*页面挂载获取保存的cookie值，渲染到页面上*/
            let username = getCookie('username').replace(/\s/g, "")
            this.name = username
            /*如果cookie不存在，则跳转到登录页*/
            if (username == "") {
                this
                    .$router
                    .push('/')
            }
        }
    }
</script>

<style scoped="scoped" lang="scss">

    .el-icon-arrow-down:before {
        content: "\E603";
    }

    .header {
        background: #030B19;
        padding: 20px 0;
    }

    .logo {
        float: left;
        width: 21%;
    }

    .logo img {
        width: 100%;
    }

    .nav ul li {
        float: left;
    }

    .nav ul li a {
        color: #fff;
        font-size: 15px;
        background: url("../assets/li-1.png") no-repeat center;
        line-height: 43px;
        width: 195px;
        height: 43px;
        display: inline-block;
        background-size: 100% 100%;
        text-align: center;
    }

    .nav ul li a span {
        color: #1367CF;
        font-size: 9px;
    }

    .dl {
        width: 15%;
        float: left;
    }

    .dl span {
        color: #263651;
        font-size: 15px;
        background: url("../assets/ren.jpg") no-repeat center left;
        padding-left: 50px;
        height: 35px;
        line-height: 35px;
        display: inline-block;
    }

    .dl span a {
        color: #546D96;
        text-decoration: underline;
    }

    .dl .tc {
        color: #4571B1;
        margin-left: 15px;
        font-size: 15px;
    }

    .caidna {
        padding-top: 20px;
        width: 100%;
        overflow: hidden;
    }

    .content-container .right-tit {
        margin: 0;
        padding: 0;
        position: relative;
        margin-top: -20px;
        width: 100%;
    }

    .right-tit p {
        background: #061631;
        line-height: 70px;
        margin-left: 75px;
        font-size: 18px;
        color: white;
        margin: 0;
        padding: 0 0 0 5%;
    }

    .right-tit p span {
        font-size: 12px;
        padding-left: 1%;
        color: #8E96A3;
    }

    a {
        text-decoration: none;
        outline: none;
        color: white;
    }

    body,
    dd,
    div,
    dl,
    dt,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    input,
    li,
    ol,
    p,
    textarea,
    ul {
        margin: 0;
        padding: 0;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: normal;
    }

    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        .main {
            display: flex;
            background: #020A17;
            position: absolute;
            top: 100px;
            bottom: 0;
            /*overflow: hidden;*/
            aside {
                flex: 0 0 230px;
                width: 230px;
                .el-submenu {
                    color: red;
                    font-weight: bold;
                    color: 18px;
                }
                .el-menu {
                    height: 100%;
                    background: #020A17;
                    border: 2px solid #012E67;
                    color: #BBD4E9;
                    font-weight: bold;
                }
                .el-menu .el-submenu__title {
                    font-size: 20px;
                    color: indianred;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
                .collapsed {
                    width: 60px;
                    .item {
                        position: relative;
                    }
                    .submenu {
                        position: absolute;
                        top: 0;
                        left: 60px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }
                }
            }
            .menu-collapsed {
                flex: 0 0 60px;
                width: 60px;
            }
            .menu-expanded {
                flex: 0 0 230px;
                width: 230px;
            }
            .content-container {
                padding: 20px;
                width: 100%;
                .breadcrumb-container {
                    .title {
                        width: 200px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: right;
                    }
                }
                .content-wrapper {
                    box-sizing: border-box;
                }
            }
        }
    }
</style>