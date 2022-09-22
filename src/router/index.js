import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
   
    component: ()=>import('../pages/firstPage/Login.vue')
  },
  {
    path: '/forget',
 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/firstPage/Forget.vue')
  },
  {
    path:'/main',
    component:()=>import('../pages/mainPage/Main.vue'),
    meta:{
      hasRule:false
    },
    redirect:'/main/hasMessage',
    children:[
      {path:'hasMessage',
    component:()=>import('../pages/message/Message.vue'),
    meta:{
      status:1
    }
  },
  {path:'unMessage',
  component:()=>import('../pages/message/Message.vue'),
  meta:{
    status:0
  }
},
{
  path:'changePwd',
  component:()=>import('../pages/change/Change.vue'),
  meta:{
    mark:'修改密码'
  },
},
  {
    path:'changeTel',
    component:()=>import('../pages/change/Change.vue'),
    meta:{
      mark:'修改手机号'
    }
},
{
  path:'manage',
  component:()=>import('../pages/manage/Manage')
},
{
  path:'detail',
  component:()=>import('../pages/detail/Detail.vue')
}
    ],
  },
 
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(()=>{
  document.title='土木反馈后台管理'
})

export default router
