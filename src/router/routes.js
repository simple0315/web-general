import HomeTwo from './../views/HomeTwo.vue'
import Login from './../views/login/Login.vue'
import RoleList from './../views/nav2/RoleList.vue'
import UserList from './../views/nav2/UserList.vue'
import RainList from './../views/nav1/RainList.vue'
import NoteList from './../views/nav1/NoteList.vue'
import CameraList from './../views/nav1/CameraList.vue'
import PictureList from './../views/nav1/PictureList.vue'
import UserLogList from './../views/nav1/UserLogList.vue'
import EquipmentList from './../views/nav1/EquipmentList.vue'
import OperateLogList from './../views/nav1/OperateLogList.vue'
import RepositoryList from './../views/nav1/RepositoryList.vue'
import RepositoryImageList from './../views/nav1/RepositoryImageList.vue'

let routes = [
    {
        path: '/home',
        component: HomeTwo,
        name: '综合页面',
        model: ['--'],
        children: [
            {
                path: '/home',
                component: RainList,
                name: '流星雨',
                model: '--',
            }
        ]
    },{
        path: '/home',
        component: HomeTwo,
        name: '旋转木马',
        model: ['--'],
        children: [
            {
                path: '/block',
                component: PictureList,
                name: '走马灯',
                model: '--',
            }
        ]
    }, {
        path: '/home',
        component: HomeTwo,
        name: '设备管理',
        model: ['equipment'],
        children: [
            {
                path: '/equipment',
                component: EquipmentList,
                name: '盒子',
                model: 'equipment'
            }
        ]
    }, {
        path: '/home',
        component: HomeTwo,
        name: '通道管理',
        model: ['camera'],
        children: [
            {
                path: '/camera',
                component: CameraList,
                name: '摄像头',
                model: 'camera'
            }
        ]
    }, {
        path: '/home',
        component: HomeTwo,
        name: '人像管理',
        model: ['repository'],
        children: [
            {
                path: '/repository',
                component: RepositoryList,
                name: '人像库列表',
                model: 'repository'
            },
            {
                path: '/image',
                hidden: true,
                component: RepositoryImageList,
                name: '人像列表',
                model: 'image'
            }
        ]
    }, {
        path: '/home',
        component: HomeTwo,
        name: '日记管理',
        model: ['note'],
        children: [
            {
                path: '/note',
                component: NoteList,
                name: '日记本',
                model: 'note'
            }
        ]
    }, {
        path: '/home',
        component: HomeTwo,
        name: '日志管理',
        model: ['--'],
        children: [
            {
                path: '/user_log',
                component: UserLogList,
                name: '用户日志',
                model: '--',
            },{
                path: '/operate_log',
                component: OperateLogList,
                name: '操作日志',
                model: '--',
            }
        ]
    }, {
        path: '/home',
        component: HomeTwo,
        name: '系统设置',
        model: ['user'],
        children: [
            {
                path: '/user',
                component: UserList,
                name: '用户管理',
                model: 'user'
            }, {
                path: '/role',
                component: RoleList,
                name: '角色管理',
                model: 'role'
            }
        ]
    }, {
        path: '/',
        name: 'Login',
        hidden: true,
        component: Login
    }, {
        path: "*",
        redirect: "/home"
    }
];
export default routes;
