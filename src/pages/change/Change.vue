<template>
    <div class="changePwd_wra">
        <h1 class="title">{{title}}</h1>
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
      :label="input1"
      name="pwd"
      :rules="[{ required: true, message: '请输入密码' }]"
       style="margin-bottom:20px"
       v-if="title=='修改密码'"
    
    >
      <a-input-password v-model:value="formState.pwd" />
    
    </a-form-item>
       <a-form-item
      :label="input1"
      v-else
      name="oldPhone"
      :rules="[{ required: true, message: '请输入手机号' }]"
       style="margin-bottom:20px"
    
    >
      <a-input v-model:value="formState.oldPhone" type="text" />
    
    </a-form-item>
      <a-form-item
      :label="input2"
      name="newPwd"
      :rules="[{ required: true, message: '请输入密码' }]"
       style="margin-bottom:20px"
       v-if="title=='修改密码'"
    
    >
      <a-input-password v-model:value="formState.newPwd" />
    
    </a-form-item>

      <a-form-item
      :label="input2"
      name="newPhone"
      :rules="[{ required: true, message: '请输入手机号' }]"
       style="margin-bottom:20px"
       v-else
    
    >
      <a-input v-model:value="formState.newPhone" />
    
    </a-form-item>
     <a-form-item
      label="验证码"
      name="smsCode"
 :rules="[{ required: true, message: '请输入验证码' }]"
      style="margin-bottom:20px"
    >
    <a-input-group compact>
      <a-input v-model:value="formState.smsCode" style="width: calc(100% - 100px)" />
      <a-tooltip >
        <a-button type="primary" style="width:100px" v-if="isSms" @click="sendSms">
          <template #icon>发送验证码</template>
        </a-button>
         <a-button type="dashed" disabled style="width:100px" v-else>
          <template #icon>{{time}}</template>
        </a-button>
      </a-tooltip>
    </a-input-group>

    
    </a-form-item>


   

    <a-form-item :wrapper-col="{ offset: 5, span: 15 }">
      <a-button type="primary" html-type="submit" style="width:100px;border-radius: 5px;height:40px" >确认修改</a-button>
    </a-form-item>
  </a-form>
                </div>
        
    </div>
</template>

<script>
import { defineComponent, reactive,ref } from 'vue';

import { CopyOutlined } from '@ant-design/icons-vue';
import mixin from './mixin'
export default defineComponent({
  mixins:[mixin],
    components:{
        CopyOutlined
    },
  setup() {
  


  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
  
      onFinishFailed,
    
    
      
    };
  },

});
</script>


<style lang="less" scoped>
.changePwd_wra{
    .title{
        display: flex;
        margin-left: 20px;
        margin-top: 20px;
    }

    .form{
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        /deep/.ant-form{
            width: 50%;
        }
    }
    
}

</style>