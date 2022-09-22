import {useRouter,useRoute} from 'vue-router'
import {ref} from 'vue'

import {fkList} from '../../api'


export default  function useTable(){
    const router = useRouter()
    const route = useRoute()
       //回复
       const repay = (data)=>{
        router.push({path:'/main/detail',query:{id:data.feedbackId,status:0}})
        
      }
      //编辑
      const edit = (data)=>{
        router.push({path:'/main/detail',query:{id:data.feedbackId,status:1}})
      }
      const pagination={
        size:'large',
         pageSize:5
       
    }
      
    // 表格头，没有的表头做过滤
    const columns = [{
        title: '主题',
        dataIndex: 'topic',
        key: 'topic',
       width:100,
      }, {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
        width:200
      }, {
        title: '问题类型',
        key: 'type',
        width:100,
        dataIndex: 'type',
      }, 
      {
        title: '反馈部门',
        key: 'department',
        dataIndex: 'department',
        width:100,
        isShow:false
      },
      {
        title: '是否匿名',
        key: 'isName',
        dataIndex: 'isName',
        width:100,
      },
      {
        title: '是否公开',
        key: 'isPublic',
        dataIndex: 'isPublic',
        width:100,
      },
      {
        title: '反馈人',
        key: 'name',
        dataIndex: 'name',
        width:100,
      },
      {
        title: '反馈时间',
        key: 'date',
        dataIndex: 'date',
        width:150,
      },
      {
        title: '操作',
        key: 'action',
        width:100,
      }];
      //表格数据
      const data =ref( [
       
       
      ]);
      let sourceData = ref([])
      const getList = (status,key='')=>{

      fkList(status,key).then(res=>{
        data.value = res.data.map(item=>{
     
          if(item.content.length>15){
           
            return {
              ...item,
              content:item.content.substr(0,15)+'...',
              isName:item.anonymity?'是':'否',
              isPublic:item.isShown?'是':'否 ',
              date:item.createTime.replace('T',' ').replace('Z',''),
              name:item.anonymity?'匿名':item.name
            }
          }
          else{
            return {
              ...item,
              isName:item.anonymity?'是':'否',
              isPublic:item.isShown?'是':'否 ',
              date:item.createTime.replace('T',' ').replace('Z',''),
              name:item.anonymity?'匿名':item.name
            }
          }

         
        })
        
        sourceData.value = data.value
        
      })


        
     }
     
    
      return {
        data,columns,repay,getList,pagination,edit,sourceData
      }
}