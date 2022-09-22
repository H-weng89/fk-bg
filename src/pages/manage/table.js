import { ref } from 'vue';
import { department } from '../../api';

export default function useTable(){
        // 表格头，没有的表头做过滤
        const columns = [{
            title: '账号',
            dataIndex: 'account',
            key: 'account',
          }, 
          {
            title: '部门名称',
            key: 'depName',
            dataIndex: 'depName',
            isShow:false
          },
          
          {
            title: '创建时间',
            key: 'date',
            dataIndex: 'date',
             sorter: (a, b) => a.name.length - b.name.length,
          },
          {
            title: '操作',
            key: 'action',
          }];
          const data = ref([
            {
              topic:'xxxxxx',
              content:'xxxx'
            }
           
          ]);
          const pagination={
            size:'large',
             pageSize:7
           
        }
          const getList  = (xx,key='')=>{
            department(key).then(res=>{
              data.value = res.data.map(item=>{
                return {
                  ...item,
                  date:item.createTime.replace('T',' ').replace('Z','')
                }
              })
            })
           
          }

          return {
            data,columns,getList,pagination
          }
}