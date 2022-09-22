<template>
    <div class="wra">
        <div class="main">
            <div class="left"></div>
            <div class="right">
                <div class="title">密码登录</div>
                <div class="form">
                     <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 5}"
    :wrapper-col="{ span: 16}"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="手机号"
      name="account"
      :rules="[{ required: true, message: '请输入手机号' },
      ]"
      style="margin-bottom:50px"
    >
      <a-input v-model:value="formState.account" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
       style="margin-bottom:50px"
    
    >
      <a-input-password v-model:value="formState.password" />
       <div class="footer">
       
        <div class="forget" @click="forget" >忘记密码</div>
      </div>

    </a-form-item>
   
   

    <a-form-item :wrapper-col="{ offset: 5, span: 15 }">
      <a-button type="primary" html-type="submit" style="width:200px;border-radius: 5px;height:40px" >登录</a-button>
    </a-form-item>
  </a-form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { message } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../../api';

export default defineComponent({
  setup() {
    const formState = reactive({
      account: '1815919993',
      password: 'civilAdmin1',
      
    });
    const router = useRouter()

    const onFinish = async values => {
      const formData = new FormData()
      formData.append('account',values.account)
      formData.append('password',values.password)
      const result = await login(formData)
      if(result){
        // 1分部门 2总管理
        localStorage.setItem('phone',values.account)

        localStorage.setItem('role',result.data)
      router.push({path:'/main',query:{role:result.data}})
      }

       
    

      
      else{
        message.info('登录失败')
      }

    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
 
    return {
      formState,
      onFinish,
      onFinishFailed,
      
     
    };
  },
  methods:{
    forget(){
        this.$router.push('/forget')
    }
  },

});
</script>


<style lang="less" scoped>
.wra{
    width: 100vw;
    height: 100vh;
   
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    
    justify-content: center;
    align-items: center;
      background-image: url(../../assets/bg.jpg);
    .main{
        display: flex;
        justify-content: space-between;
        width: 60vw;
        height: 60vh;
            
       

        .right{
          
            width: 50%;
            height: 100%;
            background-color: #ffffff;
           border-top-right-radius: 10px;
           border-bottom-right-radius: 10px;
            
           align-items: center;
           .footer{
            display: flex;
            margin-top: 20px;
            justify-content: flex-end;
            div:hover{
                    cursor: pointer;
                  }
            div{
                 color: #30a4d7;
                margin-left: 20px;
            }
           }
            .title{
                display: flex;
                justify-content: center;
                font-size: 25px;
                margin-top: 40px;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
            }
           .form{
          margin-top: 50px;
           }

        }
        .left{
            width: 50%;
            height: 100%;
           background-image: url(../../assets/bg.jpg);
            background-size: 100% 100%;
          
        }
    }
}

</style>