import { ref,reactive } from 'vue';
import { getType,addDepartment,updateDepartment } from '../../api';
import { message } from 'ant-design-vue/lib/components';

export default function useModal(getList){
   let oldInfo = reactive({isAdd:false})
     //编辑
     const edit = (data)=>{
        title.value = '修改账号信息'
        isShow.value = true
        oldInfo.data = data
        oldInfo.isAdd = false
        dep.depName = data.depName
        dep.account = data.account
        
    }

    const dep = reactive({
      depName:'',
      account:'',
      typeList:[]

    })
    let type = ref([])
    //对话框标题
    let title = ref('')
const getTypeList = ()=>{
   getType().then(res=>{
      type.value = res.data.map(item=>{
         return{
            label:item.typeName,
            value:item.typeId
         }
      })
      
    })
}
  
const selectType = (value)=>{
   dep.typeList = value
}


    // 对话框确认
    const handleOk = ()=>{
      if(title.value=='添加账号信息'){
         addDepartment(dep).then(res=>{
            if(res.code==200){
               message.info('添加成功')
               getList()
               isShow.value = false
            }
            else{
               message.info(res.msg)
            }
         })
      }
      else{
   updateDepartment({depName:dep.depName,oldAccount:oldInfo.data.account,newAccount:dep.account==oldInfo.data.account?'':dep.account}).then(res=>{
      if(res.code==200){
         message.info('更新成功')
         getList()
         isShow.value = false
      }
      else{
         message.info(res.msg)
      }
   })

      }
    
      
    

    }
    //对话框
    let isShow = ref(false)
    //新增部门
     const add = ()=>{
      oldInfo.isAdd = true
        isShow.value = true
        title.value = '添加账号信息'
       
     }
     return {
        edit,add,handleOk,isShow,dep,getTypeList,type,selectType,oldInfo
     }
}