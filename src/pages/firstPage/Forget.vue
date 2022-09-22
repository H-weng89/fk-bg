<template>
    <div class="wra">
        <div class="main">
            <div class="left"></div>
            <div class="right">
                <div class="title">找回密码</div>
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
      name="phone"
      :rules="[{ required: true, message: '请输入手机号' },
      {pattern:/^1[3|4|5|7|8]\d{9}$/,message:'手机号格式错误'}]"
      style="margin-bottom:20px"
    >
      <a-input v-model:value="formState.phone" />
    </a-form-item>
     
   
    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
       style="margin-bottom:20px"
    
    >
      <a-input-password v-model:value="formState.password" />
    
    </a-form-item>
      <a-form-item
      label="确认密码"
      name="checkPassword"
      :rules="[{ required: true, message: '请输入密码' }]"
       style="margin-bottom:20px"
    
    >
      <a-input-password v-model:value="formState.checkPassword" />
    
    </a-form-item>
     <a-form-item
      label="验证码"
      name="code"
 :rules="[{ required: true, message: '请输入验证码' }]"
      style="margin-bottom:20px"
    >
    <a-input-group compact>
      <a-input v-model:value="formState.code" style="width: calc(100% - 100px)" />
      <a-tooltip >
        <a-button type="primary" style="width:100px" v-if="isSms" @click="sendSms">
          <template #icon>发送验证码</template>
        </a-button>
         <a-button type="dashed" disabled style="width:100px" v-else>
          <template #icon>{{time}}</template>
        </a-button>
      </a-tooltip>
    </a-input-group>

      <div class="footer" @click="back">返回登录</div>
    </a-form-item>


   

    <a-form-item :wrapper-col="{ offset: 5, span: 15 }">
      <a-button type="primary" html-type="submit" style="width:200px;border-radius: 5px;height:40px"  @click="forgetPwd">确定</a-button>
    </a-form-item>
  </a-form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { defineComponent, reactive,ref } from 'vue';

import { CopyOutlined } from '@ant-design/icons-vue';
import mixin from './event'
export default defineComponent({
    components:{
        // eslint-disable-next-line vue/no-unused-components
        CopyOutlined
    },
    mixins:[mixin],

  methods:{
    back(){
        this.$router.go(-1)
    }
  }

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
        height: 65vh;
       
   
        .right{
          
            width: 50%;
            height: 100%;
            background-color: #ffffff;
        
            
           align-items: center;
          
            .title{
                display: flex;
                justify-content: center;
                font-size: 25px;
                margin-top: 40px;
            }
           .form{
          margin-top: 50px;
           }
          .footer{
            display: flex;
            margin-top: 20px;
            justify-content: flex-end;
            color: #30a4d7;
            
            div{
                 
                margin-left: 20px;
            }
           }
           .footer:hover{
                    cursor: pointer;
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