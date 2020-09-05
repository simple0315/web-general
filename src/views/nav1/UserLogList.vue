<template>
    <section>
        <!--工具条-->
        <div class="useroperation disBox boxAlign-center">
            <div class="boxFlex"></div>
            <input
                id="userLog"
                v-model="name"
                class="inputHeight"
                type="text"
                style="margin: 10px;"
                placeholder="用户名称"/>
            <el-button
                class="inquire"
                name="name"
                type="button"
                value="查询"
                @click="getUserLogName()">查询</el-button>
            <el-button
                class="reset"
                name="name"
                type="reset"
                value="重置"
                @click="BackMenu()">重置</el-button>
        </div>

        <div class="bar_b disBox boxAlign-center">
            <div class="select"></div>
            <input
                type="checkbox"
                class="positionCha1"
                :class="{'check':checkAllFlag}"
                @click="checkAll"/>
            <p class="uid positionchan">#</p>
            <div class="boxFlex tact">用户</div>
            <p class="boxFlex tact">ip</p>
            <p class="boxFlex tact">登录时间</p>
            <p class="boxFlex tact">登出时间</p>
        </div>
        <div class="cl"></div>
        <div class="content" v-for="(userLog,index) in UserLogList">
            <ul>
                <li class="disBox boxAlign-center">
                    <div class="select"></div>
                    <input
                        type="checkbox"
                        :class="{'check':userLog.checked}"
                        @click="selected(userLog)"/>
                    <p class="uid">{{index+1}}</p>
                    <div class="boxFlex tact otw w25" :title="userLog.username">{{userLog.username}}</div>
                    <p class="boxFlex tact otw w25">{{userLog.remote_host}}</p>
                    <p class="boxFlex tact otw w25">{{util.formatDate(userLog.login_time)}}</p>
                    <p class="boxFlex tact otw w25">{{util.formatDate(userLog.logout_time)}}</p>
                    <!-- <div class="boxFlex tact otw w25"> </div> -->
                </li>
            </ul>
        </div>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[7,10,15,20,25,30,50,100,200]"
                :page-size="pageSize"
                layout="total, prev, pager,next,sizes"
                :total="total"
                style="float:right;"></el-pagination>
        </el-col>
    </section>
</template>

<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;
    import util from "../../common/js/util";

    export default {
        data() {
            return {
                newuserLogList: [],
                checkAllFlag: false,
                filters: {
                    name: ""
                },
                prefix: window.domain.image_prefix,
                util: util,
                name: "", //模糊查询日志
                UserLogList: [],
                pageNum: 1, //第几页
                pageSize: 7, //每页展示多少条记录
                total: null, //记录总数
                listLoading: false,
                sels: [], //列表选中列
            };
        },
        mounted() {
            //当页面初始化时调用这个方法
            this.$nextTick(() => {
                this.getUserLogLists();
            });
        },

        computed: {},
        created() {},

        methods: {
            //每页条数发生变化时
            handleSizeChange(val) {
                this.pageSize = val;
                this.getUserLogLists();
            },
            //页码发生变化时
            handleCurrentChange(val) {
                this.pageNum = val;
                this.getUserLogLists();
            },

            //批量删除
            selected(item) {
                if (typeof item.checked == "undefined") {
                    this.$set(item, "checked", true);
                } else {
                    item.checked = !item.checked;
                }
                this.totalRepositoriesObj();
            },

            checkAll() {
                this.checkAllFlag = !this.checkAllFlag;
                this
                    .UserLogList
                    .forEach((userLog, index) => {
                        if ((typeof userLog.checked == "undefined", this.checkAllFlag)) {
                            this.$set(userLog, "checked", this.checkAllFlag);
                        } else {
                            userLog.checked = this.checkAllFlag;
                        }
                    });
                this.totalRepositoriesObj();
            },

            totalRepositoriesObj() {
                this.newuserLogList = [];
                this
                    .UserLogList
                    .forEach((item, index) => {
                        if (item.checked) {
                            var userLog = item;
                            this
                                .newuserLogList
                                .push(userLog);
                        }
                    });
            },

            //模糊查询以后重置页面
            BackMenu() {
                (this.name = ""),
                this.getUserLogLists();
            },

            //获取模糊查询列表
            getUserLogName() {
                let name = this.name;
                if (name == "") {
                    this
                        .$notify
                        .info({title: "请输入用户名称!", duration: 1500});
                    return;
                }
                this.getUserLogLists();
            },

            //获取分页人像库列表
            getUserLogLists() {
                let pageNum = this.pageNum - 1;
                let name = this.name;
                let data = {
                    page_no: this.pageNum,
                    page_size: this.pageSize,
                    name: this.name
                };
                this.listLoading = true;
                axios
                    .post(window.domain.request_prefix + "/system/user/log", data)
                    .then(res => {
                        this.total = res.data.total;
                        this.UserLogList = res.data.data;
                        this.listLoading = false;
                    });
            },
            showStatus() {},
            selsChange: function (sels) {
                this.sels = sels;
            }
        }
    };
</script>
<style>
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        -webkit-appearance: none;
        border: 1px solid #dcdcdc;
    }

    .positionCha1 {
        margin-left: 16px;
    }

    .check {
        color: #f00;
        background: url("../../assets/check.png") 0 0 no-repeat;
        background-size: 100%;
        border-color: #50c027;
        border: none;
    }

    a {
        text-decoration: none;
        color: #727781;
        cursor: pointer;
    }

    .form {
        float: right;
        margin-top: 20px;
        margin-right: 60px;
    }

    .form .shuru {
        background: #020a17;
        color: #fff;
        font-size: 12px;
        width: 105px;
        border-bottom: 1px solid #6288c9;
        height: 22px;
        line-height: 22px;
        float: left;
    }

    .form .texta {
        border-top: none;
        border-left: none;
        border-right: none;
    }

    .form .texta .tea {
        text-align: center;
        opacity: 0.5;
    }

    .demo {
        float: left;
        margin-left: 60px;
        margin-top: -13px;
    }

    .select dt {
        font-weight: inherit;
        height: 22px;
        line-height: 22px;
        display: inline-block;
        border-bottom: 1px solid #6288c9;
        background: #020a17 url("../../assets/xiala.jpg") no-repeat center right 10px;
        line-height: 28px;
        font-weight: bold;
        cursor: pointer;
        width: 105px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
        z-index: 99;
        letter-spacing: 5px;
        color: #fff;
    }

    .select dd {
        position: absolute;
        left: 0;
        top: 23px;
        background: #fff;
        display: none;
    }

    .select dd ul {
        width: 105px;
        max-height: 250px;
        overflow: auto;
    }

    .select dd ul li {
        background: #020a17;
        text-align: center;
        opacity: 0.8;
        border-bottom: 1px solid #12395a;
    }

    .select dd ul li a {
        line-height: 28px;
        display: block;
        padding: 0 8px;
    }

    .form .anniu {
        font-size: 12px;
        width: 105px;
        border: 1px solid #6288c9;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border-radius: 5px;
        float: left;
        background: #020a17;
        color: #fff;
        margin-left: 60px;
    }

    .tianj {
        width: 115px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 12px;
        display: inline-block;
        background: #0072ff;
        border-radius: 5px;
        margin-left: 1%;
        margin-top: 20px;
    }

    .el-table-column .op {
        background-color: red;
    }

    .el-table-column .op > a {
        color: #727781;
        font-size: 14px;
        display: inline-block;
        margin: 0 5px;
    }

    .ye {
        margin-top: 130px;
        float: right;
        margin-right: 100px;
        padding-bottom: 50px;
    }

    .ye a {
        margin: 0 5px;
        color: white;
    }

    .white_content {
        display: none;
        position: fixed;
        top: 15%;
        left: 50%;
        margin-left: -250px;
        width: 450px;
        height: 490px;
        background-color: #051829;
        z-index: 1002;
        overflow: auto;
        padding: 0 20px;
        border: 10px solid #0a3c57;
        border-radius: 15px;
    }

    .white_content a {
        color: #000;
        float: right;
        margin-right: px;
        margin-top: 10px;
    }

    .form-r1 {
        margin-top: 15px;
    }

    .form-r1 span {
        font-size: 14px;
        display: block;
        color: #fff;
        line-height: 25px;
    }

    .form-r1 .text {
        border: 1px solid #fff;
        height: 30px;
        line-height: 30px;
        padding-left: 2%;
        width: 97.5%;
        margin-top: 5px;
        background: transparent;
        color: #fff;
    }

    .form-r2 {
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .form-r2 .ann {
        width: 40%;
        margin: 0 5%;
        background: #1f86e5;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        float: none;
        border-radius: 10px;
        display: inline-block;
        font-size: 14px;
    }

    .batchDel {
        width: 115px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        color: #fff;
        font-size: 12px;
        background-color: #0072ff;
        border-radius: 5px;
        margin-left: 1%;
        padding: 0;
        border: none;
        color: white;
    }
</style>