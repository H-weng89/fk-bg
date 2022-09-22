<template>
    <div class="main_wra">
        <div class="left">
             <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    
    mode="inline"
    @click="handleClick"
    theme="dark"
  >
   
    
   
    <a-sub-menu key="反馈中心">
      <template #icon>
      <windows-outlined />
      </template>
      <template #title>反馈信息</template>
      <a-menu-item key="已回复">已回复</a-menu-item>
       <a-menu-item key="未回复">未回复</a-menu-item>
     
    </a-sub-menu>
    <a-sub-menu key="部门管理"  v-if="role==2">
      <template #icon>
        <user-outlined />
      </template>
      <template #title>部门管理</template>
      <a-menu-item key="账号管理">账号管理</a-menu-item>
    
     
     
    </a-sub-menu>
    <a-sub-menu key="个人中心">
      <template #icon>
        <user-outlined />
      </template>
      <template #title>个人中心</template>
      <a-menu-item key="修改密码">修改密码</a-menu-item>
      <a-menu-item key="修改手机号" v-if="!$route.meta.hasRule">修改手机号</a-menu-item>
     
     
    </a-sub-menu>
  </a-menu>
        </div>
        <div class="right">
            <div class="title">
                <a-breadcrumb>
    <a-breadcrumb-item v-for="item in menuList" :key="item">{{item}}</a-breadcrumb-item>
  </a-breadcrumb>
  <div class="user">
    <div class="name">你好,{{name}}</div>
    <div class="out">
        <a-popconfirm
    title="确认退出吗"
    ok-text="确定"
    cancel-text="取消"
    @confirm="confirm"
    @cancel="cancel"
  >
      <logout-outlined style="fontSize:20px" />
  </a-popconfirm>
    
      </div>
  </div>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>

<script>
import { defineComponent, ref,onMounted } from 'vue';
import { WindowsOutlined,UserOutlined,LogoutOutlined} from '@ant-design/icons-vue';
import {useRoute, useRouter} from 'vue-router'
import {getUser } from '../../api'
export default defineComponent({
  components: {
   WindowsOutlined,
    UserOutlined,
    LogoutOutlined
  },

  setup() {
    const selectedKeys = ref(['1']);
    const openKeys = ref(['sub1']);
    const router = useRouter()
    const route  = useRoute()
    let menuList = ref([])
    const role = localStorage.getItem('role')
    let name = ref(localStorage.getItem('name'))
    // 路由切换
    const handleClick = e => {
          let obj = {"已回复":'/main/hasMessage',
          '未回复':'/main/unMessage',
          '修改手机号':'/main/changeTel',
          '修改密码':'/main/changePwd',
          '账号管理':'/main/manage'}
           menuList.value = e.keyPath
           
           router.push(obj[e.keyPath[1]])
    };
    //登出
    const confirm = ()=>{
      localStorage.clear()
      router.push('/')
    }

    onMounted(async ()=>{
      if(route.query.role==2){
        name.value = '管理员'
        localStorage.setItem('name','管理员')

      }
      else{
        const result = await getUser()
        name.value = result.data+'负责人'
        localStorage.setItem('name',name.value)
      }
       

    
    })
    
    

   
    return {
      selectedKeys,
      openKeys,
      handleClick,
      menuList,
      confirm,
      name,
      role
   
      
    };
  },

});
</script>

<style lang="less" scoped>
.main_wra{
    width: 100vw;
    height: 100vh;
    display: flex;

    .left{
        height: 100vh;
        width: 12vw;
        /deep/.ant-menu-dark.ant-menu-inline{
            width: 100% !important;
            height: 100%;
        }
    }

    .right{
        width: 88vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #f4f4f4;
        overflow: hidden;

        :global(.ant-popover-inner-content){
          width: 200px;
        }

        .title{
            width: 100%;
            height: 7vh;
            background-color: white;
            display: flex;
            align-items: center;
            padding-left: 10px;
       

            justify-content: space-between;

            .user{
              display: flex;
              width: 200px;
              justify-content: space-around;
              

              .out:hover{
                 cursor: pointer;
              }
            }

        }
        .main{
            width: 97%;
            height: 90vh;
            background-color: white;
            margin: auto;
            border-radius: 10px;
        }
    }
}

</style>