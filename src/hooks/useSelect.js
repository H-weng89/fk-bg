import { reactive,ref } from 'vue';
import { deleteFk } from '../api';
import { message } from 'ant-design-vue';
import { useRoute } from 'vue-router';

export default function useSelect(getList,deleteFn){
        // 多选
         const route =useRoute()
          let selectedRowKeys = ref([])
          
          //选中改变
          const onSelectChange = value => {
            console.log('selectedRowKeys changed: ', value);
            selectedRowKeys.value = value
         
          };

          const deleteAll = async (id='')=>{
            console.log(id)
            let result
                 if(id){
             result = await deleteFn(id)
         
                 }
                 else{
                  console.log(selectedRowKeys.value)
                   result = await deleteFn(selectedRowKeys.value)
                 }
                 if(result.code==200){
                  message.info('删除成功')
                  getList(route.meta.status)
                 }
                 else{
                  message.info(result.msg||'失败')
                 }
            
          }
    
          
      
          return {
           onSelectChange,selectedRowKeys,deleteAll
          }

}