<template>
    <section>
        <!--工具条-->
        <div class="useroperation disBox boxAlign-center">
            <el-button
                class="btn add"
                href="javascript:void(0)"
                @click="handleAdd"
                v-has="'equipment:save'">添加</el-button>
            <el-button
                class="btn batch"
                href="javascript:void(0)"
                @click="batchRemove"
                v-has="'equipment:delete'">批量删除</el-button>
            <div class="boxFlex"></div>
            <div v-has="'equipment:query'">
                <input
                    id="equipment"
                    v-model="name"
                    class="inputHeight"
                    type="text"
                    style="margin: 10px;"
                    placeholder="设备名称"/>
                <el-button
                    class="inquire"
                    name="name"
                    type="button"
                    value="查询"
                    @click="getEquipmentName()">查询</el-button>
                <el-button
                    class="reset"
                    name="name"
                    type="reset"
                    value="重置"
                    @click="BackMenu()">重置</el-button>
            </div>
        </div>

        <div class="bar_b disBox boxAlign-center">
            <div class="select"></div>
            <input
                type="checkbox"
                class="positionCha1"
                :class="{'check':checkAllFlag}"
                @click="checkAll"/>
            <p class="uid positionchan">#</p>
            <div class="boxFlex tact">名称</div>
            <p class="boxFlex tact">地址</p>
            <p class="boxFlex tact">端口</p>
            <p class="boxFlex tact">添加时间</p>
            <div class="operation tact wi">
                <p>操作</p>
            </div>
        </div>
        <div class="cl"></div>
        <div class="content" v-for="(equipment,index) in equipmentsList">
            <ul>
                <li class="disBox boxAlign-center">
                    <div class="select"></div>
                    <input
                        type="checkbox"
                        :class="{'check':equipment.checked}"
                        @click="selected(equipment)"/>
                    <p class="uid">{{index+1}}</p>
                    <div class="boxFlex tact otw w25" :title="equipment.name">{{equipment.name}}</div>
                    <p class="boxFlex tact otw w25">{{equipment.host}}</p>
                    <p class="boxFlex tact otw w25">{{equipment.port}}</p>
                    <p class="boxFlex tact otw w25" style="margin-right:45px">{{util.formatDate(equipment.create_time)}}</p>
                    <div class="boxFlex tact otw w25" style="margin-right:25px">
                        <el-button @click="handleEdit(index, equipment)" v-has="'equipment:update'">修改</el-button>
                        <el-button @click="handleDel(index,equipment)" v-has="'equipment:delete'">删除</el-button>
                    </div>
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
        <!--编辑界面-->
        <el-dialog
            title="编辑"
            :visible.sync="editFormVisible"
            :close-on-click-modal="false">
            <el-form
                :model="editForm"
                label-width="150px"
                :rules="editFormRules"
                ref="editForm">
                <el-form-item label="设备名称" prop="name">
                    <el-input
                        v-model="editForm.name"
                        auto-complete="off"
                        placeholder="请输入设备名称"
                        clearable="clearable"></el-input>
                </el-form-item>
                <el-form-item label="设备地址" prop="host">
                    <el-input
                        v-model="editForm.host"
                        auto-complete="off"
                        placeholder="请输入设备地址"
                        clearable="clearable"></el-input>
                </el-form-item>
                <el-form-item label="设备端口" prop="port">
                    <el-input
                        v-model="editForm.port"
                        auto-complete="off"
                        placeholder="请输入设备端口号"
                        clearable="clearable"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="info" @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>

        <!--新增界面-->
        <el-dialog
            title="添加"
            :visible.sync="addFormVisible"
            :close-on-click-modal="false"
            id="ad">
            <el-form
                :model="addForm"
                label-width="150px"
                :rules="addFormRules"
                ref="addForm">
                <el-form-item label="设备名称" prop="name">
                    <el-input
                        v-model="addForm.name"
                        auto-complete="off"
                        placeholder="请输入设备名称"
                        clearable="clearable"></el-input>
                </el-form-item>
                <el-form-item label="设备地址" prop="host">
                    <el-input
                        v-model="addForm.host"
                        auto-complete="off"
                        placeholder="请输入设备地址"
                        clearable="clearable"></el-input>
                </el-form-item>
                <el-form-item label="设备端口" prop="port">
                    <el-input
                        v-model="addForm.port"
                        auto-complete="off"
                        placeholder="请输入设备端口号"
                        clearable="clearable"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="info" @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;
    import util from "../../common/js/util";

    export default {
        data() {
            return {
                newequipmentList: [],
                checkAllFlag: false,
                filters: {
                    name: ""
                },
                prefix: window.domain.image_prefix,
                util: util,
                name: "", //模糊查询用户
                equipmentsList: [],
                pageNum: 1, //第几页
                pageSize: 7, //每页展示多少条记录
                total: null, //记录总数
                listLoading: false,
                sels: [], //列表选中列
                editFormVisible: false, //编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        {
                            required: true,
                            message: "请输入名称",
                            trigger: "blur"
                        }
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: "",
                    name: "",
                    host: "",
                    port: ""
                },

                addFormVisible: false, //新增界面是否显示
                addLoading: false,
                addFormRules: {
                    name: [
                        {
                            required: true,
                            message: "请输入名称",
                            trigger: "blur"
                        }
                    ]
                },
                //新增界面数据
                addForm: {
                    name: "",
                    host: "",
                    port: ""
                }
            };
        },
        mounted() {
            //当页面初始化时调用这个方法
            this.$nextTick(() => {
                this.getEquipments();
            });
        },

        computed: {},
        created() {},

        methods: {
            //每页条数发生变化时
            handleSizeChange(val) {
                this.pageSize = val;
                this.getEquipments();
            },
            //页码发生变化时
            handleCurrentChange(val) {
                this.pageNum = val;
                this.getEquipments();
            },

            //批量删除
            selected(item) {
                if (typeof item.checked == "undefined") {
                    this.$set(item, "checked", true);
                } else {
                    item.checked = !item.checked;
                }
                this.totalEquipmentsObj();
            },

            checkAll() {
                this.checkAllFlag = !this.checkAllFlag;
                this
                    .equipmentsList
                    .forEach((equipment, index) => {
                        if ((typeof equipment.checked == "undefined", this.checkAllFlag)) {
                            this.$set(equipment, "checked", this.checkAllFlag);
                        } else {
                            equipment.checked = this.checkAllFlag;
                        }
                    });
                this.totalEquipmentsObj();
            },

            totalEquipmentsObj() {
                this.newequipmentList = [];
                this
                    .equipmentsList
                    .forEach((item, index) => {
                        if (item.checked) {
                            var equipment = item;
                            this
                                .newequipmentList
                                .push(equipment);
                        }
                    });
            },

            //模糊查询以后重置页面
            BackMenu() {
                (this.name = ""),
                this.getEquipments();
            },

            //获取模糊查询列表
            getEquipmentName() {
                let name = this.name;
                if (name == "") {
                    this
                        .$notify
                        .info({title: "请输入设备名称!", duration: 1500});
                    return;
                }
                this.getEquipments();
            },

            //获取分页人像库列表
            getEquipments() {
                let pageNum = this.pageNum - 1;
                let name = this.name;
                let data = {
                    page_no: this.pageNum,
                    page_size: this.pageSize,
                    name: this.name
                };
                this.listLoading = true;
                axios
                    .post(
                        window.domain.request_prefix + "/equipment/manage/page",
                        data
                    )
                    .then(res => {
                        this.total = res.data.total;
                        this.equipmentsList = res.data.data;
                        this.listLoading = false;
                    });
            },
            showStatus() {},
            //删除
            handleDel(index, row) {
                this
                    .$confirm("确认删除选中记录吗?", "提示", {type: "warning"})
                    .then(() => {
                        this.listLoading = true;
                        let data = {
                            id: [row.id]
                        };
                        axios
                            .put(
                                window.domain.request_prefix + "/equipment/manage/delete",
                                data
                            )
                            .then(res => {
                                this.listLoading = false;
                                this.$message({message: "删除成功", type: "success"});
                                this.getEquipments();
                            });
                    })
                    .catch(() => {});
            },
            //显示编辑界面
            handleEdit: function (index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    name: "",
                    host: "",
                    port: ""
                };
            },
            //编辑
            editSubmit: function () {
                this
                    .$refs
                    .editForm
                    .validate(valid => {
                        if (valid) {
                            this
                                .$confirm("确认提交吗？", "提示", {})
                                .then(() => {
                                    this.editLoading = true;
                                    let para = Object.assign({}, this.editForm);
                                    axios
                                        .put(window.domain.request_prefix + "/equipment/manage", para)
                                        .then(res => {
                                            if (res.data.code != 0) {
                                                this.editLoading = false;
                                                this.$message({message: res.data.message, type: "error"});
                                                return;
                                            }
                                            this.editLoading = false;
                                            this.$message({message: "修改成功", type: "success"});
                                            this
                                                .$refs["editForm"]
                                                .resetFields();
                                            this.editFormVisible = false;
                                            this.getEquipments();
                                        });
                                });
                        }
                    });
            },
            //新增
            addSubmit: function () {
                this
                    .$refs
                    .addForm
                    .validate(valid => {
                        if (valid) {
                            this
                                .$confirm("确认提交吗？", "提示", {})
                                .then(() => {
                                    this.addLoading = true;
                                    let para = Object.assign({}, this.addForm);
                                    axios
                                        .post(window.domain.request_prefix + "/equipment/manage", para)
                                        .then(res => {
                                            if (res.data.code != 0) {
                                                this.addLoading = false;
                                                this.$message({message: res.data.message, type: "error"});
                                                return;
                                            }
                                            this.addLoading = false;
                                            this.$message({message: "提交成功", type: "success"});
                                            this
                                                .$refs["addForm"]
                                                .resetFields();
                                            this.addFormVisible = false;
                                            this.getEquipments();
                                        });
                                });
                        }
                    });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },

            //批量删除
            batchRemove: function () {
                if (this.newequipmentList.length === 0) {
                  this.$message({message: "请选择要删除的设备", type: "warning"});
                    return;
                }
                var ids = this
                    .newequipmentList
                    .map(item => item.id);
                this
                    .$confirm("确认删除选中记录吗？", "提示", {type: "warning"})
                    .then(() => {
                        this.listLoading = true;
                        let para = ids;
                        axios
                            .put(
                                window.domain.request_prefix + "/equipment/manage/delete",
                                {id: para}
                            )
                            .then(res => {
                                this.listLoading = false;
                                this.$message({message: "删除成功", type: "success"});
                                this.checkAllFlag = false;
                                this.getEquipments();
                            });
                    })
                    .catch(() => {});
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