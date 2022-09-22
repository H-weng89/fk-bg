<template>
    <div class="detail_wra">
        <h1 class="topic">{{info.topic}}</h1>
        <div class="description">
            <div class="name" v-if="!info.anonymity">反馈人：{{info.name}}</div>
            <div class="type">问题类型：{{info.type}}</div>
             <div class="type">反馈部门：{{info.department}}</div>
            <div class="time">{{info.createTime}}</div>
        </div>
        <div class="content">{{info.content}}</div>
        <div class="file">附件<a :href="info.fileUrl">:点击下载</a></div>
          <div class="img"><img src="https://joeschmoe.io/api/v1/random" alt=""></div>
        <h1 v-if="!+isReply">回复:</h1>
         <h1 v-else>编辑:</h1>
        <div class="answer"> <a-textarea v-model:value="info.reply" placeholder="请回复" :rows="4" /></div>
        <div class="btn">  <a-button type="primary" @click="reply">确定</a-button></div>
        
    </div>
</template>

<script setup>
 import {detail} from '../../api' 
 import {reactive,onMounted,toRefs,ref} from 'vue'
 import {useRoute,useRouter} from 'vue-router'
 import { reply as replyApi } from '../../api';

import { message } from 'ant-design-vue';


  const state = reactive({
    info:{
        
    }
  })
  const route = useRoute()
  let isReply = ref('')
  const router = useRouter()
 
  const {id,status} = route.query
  isReply.value = status

const reply = async ()=>{
    const data = {
        content:state.info.reply,
        feedbackId:id,
        phone:localStorage.getItem('phone')
    }
    console.log(data)
  const result = await replyApi(data)
  if(result.code==200){
    message.info('操作成功')
    router.go(-1)
  }
}
 
   onMounted(async()=>{
  const result = await detail(id)
   state.info = {...result.data,createTime:result.data.createTime.replace('T',' ').replace('Z','')}
   })

 let {info} = toRefs(state)

</script>

<style lang="less" scoped>
.detail_wra{
    overflow: auto;
    .topic{
        margin-top: 10px;
        display: flex;
        margin-left: 40px;
    }
    .description{
        display: flex;
        margin-left: 40px;
        width: 50vw;
        justify-content: space-between;
    }

    .content{
        display: flex;
        margin-left:40px;
        margin-top: 20px;
        margin-right: 40px;
       
    }
    .file{
        display: flex;
        margin-left: 40px;
        margin-top: 20px;
      
    }

    .img{
        width: 85vw;
        height: 200px;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }

    h1{
        display: flex;
        margin-left: 40px;
        
    }
     .answer{
        width: 80vw;
        margin: auto;
    }
   .btn{
    margin-top: 20px;
    /deep/.ant-btn-primary{
        width: 100px;
        border-radius: 5px;
        height: 35px;
    }
   }
}

</style>