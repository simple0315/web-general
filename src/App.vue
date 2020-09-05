<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import * as fontSize from './assets/js/fontSize';
    export default {name: 'App', components: {}}
</script>

<style>
    @import 'assets/css/remstyle.css';

    html {
        height: 100%;
        width: 100%;
        color: #626876!important;
        outline: 0;
        font-family: 'Heiti SC', 'Microsoft YaHei';
        -webkit-text-size-adjust: none;
    }

    .menubox .nav li {
        position: relative;
        width: 1.5rem;
        height: 0.35rem;
        line-height: 0.35rem;
        cursor: pointer;
        text-align: left;
        font-size: 0.1333rem;
        color: #fafbfd;
        background-position: -.0833rem -.1333rem;
    }

    .menubox .nav li p {
        margin-left: 0.3133rem;
        width: 65px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    *:not(input) {
        margin: 0;
        padding: 0;
        -webkit-touch-callout: none !important;
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: none !important;
    }

    body {
        background-image: url("./assets/img/bg.jpg")!important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
    }

    .otw {
        height: 0.2633rem;
        line-height: 0.2333rem;
        cursor: pointer;
        border-radius: 0.0333rem;
        width: 0.9rem !important;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow-x: scroll !important;
        font-size: 14px;
    }

    .el-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color:cornflowerblue;
    }

    .otw::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    /*滚动条里面小方块*/
    .otw::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }

    /*滚动条里面轨道*/
    .otw::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }

    .disBox {
        display: -moz-box;
        display: -o-box;
        display: box !important;
        display: -webkit-box !important;
    }

    .boxFlex {
        -moz-box-flex: 1;
        -o-box-flex: 1;
        box-flex: 1;
        -webkit-box-flex: 1 !important;
    }
    .boxAlign-center {
        -moz-box-align: center;
        -o-box-align: center;
        box-align: center !important;
        -webkit-box-align: center !important;
    }

    .el-input__inner {
        height: 30px !important;
    }

    .el-dialog {
        overflow: hidden !important;
    }
</style>

<style>

    @import 'assets/css/zzq-scrollbar.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        /*		background: #020A17;*/
        width: 100%;
    }

    .inputHeight {
        margin:5px;
        height:22px
    }

    .el-submenu [class^=fa] {
        vertical-align: baseline;
        margin-right: 10px;
    }

    .el-menu-item [class^=fa] {
        vertical-align: baseline;
        margin-right: 10px;
    }
    /*表格*/

    .el-table {
        position: relative;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        max-width: 100%;
        font-size: 13px;
        color: #606266;
    }

    .el-table th,
    .el-table tr {
        background-color: #020A17 !important;
    }

    .el-table td,
    .el-table th {
        padding: 10px 0;
        min-width: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-overflow: ellipsis;
        vertical-align: middle;
        position: relative;
    }

    .el-table td,
    .el-table th.is-leaf {
        border-bottom: 1px solid #0D2E40;
        border-collapse: collapse;
    }

    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: #020A17;
    }

    .el-table thead {
        background-color: #f00 !important;
        color: white;
        font-weight: lighter;
    }

    .el-table th {
        background-color: #1C819D !important;
    }

    .el-table__body,
    .el-table__footer,
    .el-table__header {
        background-color: #1C819D !important;
    }

    .el-select__caret {
        display: none;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.2s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    .el-submenu__title {
        font-size: 1.3em;
        color: #BBD4E9;
        padding: 2%;
        cursor: pointer;
        -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: "Times New Roman", Times, serif;
    }

    .el-menu-item,
    .el-submenu__title {
        height: 40px;
        line-height: 40px;
        position: relative;
        box-sizing: border-box;
        white-space: nowrap;
        list-style: none;
    }

    .el-message--success {
        min-width: 360px !important;
        height: 80px !important;
        background-color: #051829 !important;
        border-color: #e1f3d8 !important;
    }

    .el-message .el-icon-success {
        color: #669999 !important;
        display: inline-block !important;
        padding: 0 10px !important;
        height: 1em !important;
        font-size: 35px !important;
    }

    .el-message--success .el-message__content {
        color: #999999 !important;
        font-size: 16px !important;
        padding: 0 13px !important;
        font-family: "微软雅黑";
        font-weight: bold !important;
    }

     .el-message--warning {
        min-width: 360px !important;
        height: 80px !important;
        background-color: #051829 !important;
        border-color: #e1f3d8 !important;
    }

    .el-message .el-icon-warning {
        color:#D6A27E !important;
        display: inline-block !important;
        padding: 0 10px !important;
        height: 1em !important;
        font-size: 35px !important;
    }

    .el-message--warning .el-message__content {
        color:#D6A27E !important;
        font-size: 16px !important;
        padding: 0 13px !important;
        font-family: "微软雅黑";
        font-weight: bold !important;
    }

    .el-icon-arrow-up:before {
        content: "\E605";
        display: none !important;
    }

    .el-submenu__title i {
        color: #BBD4E9;
    }

    .el-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #727781;
        border-radius: 2px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #727781;
        z-index: 1;
        -webkit-transition: border-color 0.25s cubic-bezier(.71, -.46, .29, 1.46), background-color 0.25s cubic-bezier(.71, -.46, .29, 1.46);
        transition: border-color 0.25s cubic-bezier(.71, -.46, .29, 1.46), background-color 0.25s cubic-bezier(.71, -.46, .29, 1.46);
    }

    .el-dialog {
        position: relative;
        margin: 0 auto 50px;
        background: #051829;
        border-radius: 12px !important;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3) !important;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3) !important;
        box-sizing: border-box !important;
        /*width: 5.5667rem;;*/
        /*height: 4.1667rem;*/
        width: 35% !important;
        height: 52% !important;
        border: 10px solid #0a3c57 !important;
        left: 0 !important;
        z-index: 10 !important;
        scrollbar-track-color: #D6A27E !important;
        overflow-y: scroll !important;
    }

    .el-dialog::-webkit-scrollbar {
        width: 7px;
        height: 5px;
    }

    .el-dialog::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        /*background: #535353;*/
        background: #051829;
    }
    .el-dialog::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        /*background: #EDEDED;*/
        background: #051829;
    }

    .el-dialog__body {
        padding: 25px 5px 5px 5px !important;
        color: #606266 !important;
        line-height: 24px !important;
        font-size: 14px !important;
        margin-left: 20px !important;

    }
    /*弹出框 里面label**/

    .el-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 13px !important;
        color: white !important;
        line-height: 40px !important;
        padding: 0 10px 0 0 !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        /*width: 150px !important;*/
    }

    element.style {
        width: 90px !important;
    }

    .el-input__inner {
        -webkit-appearance: none !important;
        background-color: #EAEAEA !important;
        background-image: none !important;
        border-radius: 4px !important;
        border: 1px solid #dcdfe6 !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        color: #606266 !important;
        display: inline-block !important;
        font-size: inherit !important;
        height: 25px;
        line-height: 1 !important;
        outline: 0 !important;
        padding: 0 15px !important;
        -webkit-transition: border-color 0.2s cubic-bezier(.645, .045, .355, 1) !important;
        transition: border-color 0.2s cubic-bezier(.645, .045, .355, 1) !important;
        width: 100% !important;
    }

    .el-select {
        display: inline;
        position: relative;
    }

    .el-input {
        position: relative !important;
        font-size: 14px !important;
        display: inline-block !important;
        width: 75% !important;
    }

    .el-input--suffix .el-input__inner {
        padding-right: 0 !important;
    }

    .el-select {
        display: inline !important;
        position: relative;
    }

    .el-form-item {
        margin-bottom: 2px;
    }

    .el-submenu .el-menu-item:hover {
        color: #C0EAF0;
    }

    .el-submenu .el-menu {
        border: none;
    }

    .el-submenu .el-menu-item {
        height: 30px;
        line-height: 40px;
        padding: 0 45px;
        min-width: 200px;
    }

    /*分页输入框**/
    .el-pagination .el-select .el-input .el-input__inner {
        padding-right: 25px;
        border-radius: 3px;
        height: 20px;
        background-color: #020A17;
        border: none;
        display: none !important;
    }

    /*分页 list**/
    .el-select-dropdown__list {
        list-style: none !important;
        padding: 6px 0 !important;
        margin: 0 !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        background-color: #020A17 !important;
        color: white !important;
    }

    .el-select-dropdown {
        position: absolute !important;
        border: 2px solid #012E67 !important;
        border-radius: 4px !important;
        background-color: #020A17 !important;
        box-sizing: border-box !important;
        margin: 3px 0 !important;
        width: 8px !important;
    }

    .el-dialog__footer {
        padding: 10px 20px 20px !important;
        text-align: center !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        margin-left: 40px;
        margin-top: 8px;
    }

    .el-button--small {
        background-color: #909399 !important;
    }

    .el-select-dropdown.el-popper {
        min-width: 153px !important;
    }

    .el-select-dropdown__item {
        font-size: 14px !important;
        padding: 0 20px !important;
        position: relative !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        color: white !important;
        height: 34px !important;
        line-height: 34px !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        cursor: pointer !important;
    }

    .el-select-dropdown__item.hover,
    .el-select-dropdown__item:hover {
        background-color: #020A17 !important;
    }

    .el-pagination .btn-next,
    .el-pagination .btn-prev {
        background: none !important;
        background-size: 16px !important;
        cursor: pointer;
        margin: 0;
        color: #fff !important;
    }

    .el-pagination__total {
        margin-right: 10px !important;
        font-weight: 400 !important;
        color: white !important;
    }

    /*表格 遮罩层 css*/
    .el-tag {
        background-color: rgba(64, 158, 255, .1);
        padding: 0 10px;
        height: 32px;
        line-height: 30px;
        font-size: 12px;
        color: #727781;
        border-radius: 4px;
        box-sizing: border-box;
        border: 1px solid rgba(64, 158, 255, .2);
    }
    /*表格遮罩层*/
    .el-popover {
        position: absolute;
        background: #020A17;
        min-width: 150px;
        border: 2px solid #012E67;
        padding: 12px;
        z-index: 2000;
        color: #727781;
        line-height: 1.4;
        text-align: justify;
        font-size: 12px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    }

    .el-button {
        display: inline-block !important;
        line-height: 0 !important;
        white-space: nowrap !important;
        cursor: pointer !important;
        border: 1px solid #66b1ff !important;
        color:white !important;
        background-color: #0c3970 !important;
        -webkit-appearance: none !important;
        text-align: center !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        outline: 0 !important;
        /* margin: 0px 2px !important; */
        -webkit-transition: 0.1s !important;
        transition: 0.1s !important;
        font-weight: 500 !important;
        /* padding: 1px 1px !important; */
        font-size: 14px !important;
        border-radius: 10px !important;
        /* width: 85px !important; */
        letter-spacing: 3px !important;
    }

    .el-button+.el-button {
        margin-left: 0px;
    }

    .el-message--warning {
      background-color: #fdf6ec;
      border-color: #faecd8;
      height: 80px;
    }

    .el-popper[x-placement^=top] .popper__arrow::after {
        bottom: 1px;
        margin-left: -6px;
        border-top-color: #012E67;
        border-bottom-width: 0;
    }

    .el-form-item__error {
        color: #696969 !important;
        font-size: 14px !important;
        line-height: 1 !important;
        padding-top: 1px !important;
        position: absolute !important;
        top: 30% !important;
        left: 77% !important;
        display: inline-block !important;
    }

    .el-message-box {
        display: inline-block !important;
        width: 420px !important;
        padding-bottom: 10px !important;
        vertical-align: middle !important;
        background-color: #051829 !important;
        border-radius: 4px !important;
        border: 1px solid #999999 !important;
        font-size: 18px !important;
        -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1) !important;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1) !important;
        text-align: left !important;
        overflow: hidden !important;
        -webkit-backface-visibility: hidden !important;
        backface-visibility: hidden !important;
    }

    .el-message-box__title {
        padding-left: 0;
        margin-bottom: 0;
        font-size: 18px;
        line-height: 1;
        color: #FFFFFF !important;
    }

    .el-message-box__content {
        position: relative;
        padding: 10px 15px;
        color: #FFFFFF !important;
        font-size: 14px;
    }

    .el-switch__label {
        -webkit-transition: 0.2s;
        transition: 0.2s;
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        vertical-align: middle;
        color: #606266;
    }

    .el-table,
    .el-table__expanded-cell {
        background-color: #020A17;
    }

    .el-checkbox-button__inner {
        line-height: 5px !important;
        font-weight: 400 !important;
        white-space: nowrap !important;
        vertical-align: middle !important;
        cursor: pointer !important;
        /*background: #fff;*/
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center !important;
        width: 114px !important;
        margin: 1px 1px !important;
        font-size: 14px !important;
        border-radius: 1px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
    }

    .el-checkbox-button:first-child .el-checkbox-button__inner {
        border-radius: 1px !important;
    }

    .el-checkbox-button:last-child .el-checkbox-button__inner {
        border-radius: 1px;
    }

    .el-checkbox-group {
        width: 350px;
    }

    .form .anniu {
        font-size: 12px;
        width: 105px;
        border: 1px solid #6288C9;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border-radius: 5px;
        float: left;
        background: #020A17;
        color: #fff;
        margin-left: 60px;
        cursor: pointer;
    }

    .v-modal {
        z-index: 1 !important;
    }

    .el-tree-node__content {
        border-radius: 4px !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 32px !important;
        cursor: pointer;
        width: 30% !important;
    }

</style>