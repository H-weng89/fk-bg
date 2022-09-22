import { ref } from 'vue';
import {useRoute } from 'vue-router'
import {department} from '../api'

export default function useSearch(getList,sourceData,data){
  const route = useRoute()
    // 部门数据
    const departmentList = ref([{
        value: 'jack',
        label: 'Jack',
      }, {
        value: 'lucy',
        label: 'Lucy',
      }, {
        value: 'tom',
        label: 'Tom',
      }]);
     // 部门选中
      const handleChange = async value => {
     
        data.value = sourceData.value
        if(value){
          data.value = data.value.filter(item=>{
            return item.department==value
          })
        }
         
      }; 

      const getDepartment = ()=>{
        department('').then(res=>{
          departmentList.value = res.data.map(item=>{
           return {
            label:item.depName,
            value:item.depName
           }
          })
          departmentList.value.unshift({label:'全部',value:''})
        })
      }
      getDepartment()
    // 主题搜索
     const onSearch = (value)=>{
 
      getList(route.meta.status,value)
    
     }  

    let search = ref('')
       //部门过滤
      const filterOption = (input, option) => {
        return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      };

      return {
        filterOption,onSearch,handleChange,departmentList,search
      }
}