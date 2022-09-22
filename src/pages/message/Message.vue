<template>
    <div class="message_wra" >
        <div class="search">
            <div class="department"> 
                <div class="title">反馈部门：</div>
                <a-select
    v-model:value="department"
    show-search
    placeholder="选择部门"
    style="width: 200px"
    :options="departmentList"
    :filter-option="filterOption"   
    @change="handleChange"
  ></a-select></div>
  <div class="topic">
    <div class="title">主题/内容：</div>
     <a-input-search
      v-model:value="search"
      placeholder="查找主题/内容"
      style="width: 300px"
      @search="onSearch"
    />
  </div>
        </div>
        <div class="table">
          <div style="margin-bottom: 16px" class="btn">
      <a-button type="primary"  :loading="loading" @click="deleteAll('')">
        批量删除
      </a-button>
      <span style="margin-left: 8px">
      
      </span>
    </div>
             <a-table 
                :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
             :columns="columns" 
             :data-source="data"  
             :pagination="pagination"
             :rowKey="record => record.feedbackId"
          
         
            >
    

    <template #bodyCell="{ column, record }">
    
    
      <template v-if="column.key === 'action'">
        <div style="width:100px">
          <a @click="edit(record)" v-if="$route.meta.status">编辑</a>
        
          <a v-else @click="repay(record)">回复</a>
        
          <a @click="deleteAll([record.feedbackId])">
            移除
          </a>
        </div>
      </template>
    </template>
  </a-table>

        </div>
        
    </div>
</template>

<script>
import { defineComponent, toRefs,ref,onMounted,watch } from 'vue';
import { useRoute,onBeforeRouteLeave} from 'vue-router'
import useSelect from '../../hooks/useSelect';
import useTable from './table'
import useSearch from '../../hooks/useSearch'
import { ConsoleSqlOutlined } from '@ant-design/icons-vue';
import {fkList,deleteFk} from '../../api'
import { message } from 'ant-design-vue';

export default defineComponent({
    setup() {    

 const route = useRoute()


//表格和操作
    const {repay,columns,data,getList,pagination,edit,sourceData} =  useTable()
    //多选 批量操作
    const {onSelectChange,selectedRowKeys,deleteAll}  = useSelect(getList,deleteFk)

   
    //搜索和部门选择
    const {departmentList,handleChange,onSearch,filterOption,search} = useSearch(getList,sourceData,data)

  watch(()=>route.meta.status,(nval)=>{
         getList(nval)
  })
     onMounted( ()=>{
     getList(route.meta.status)
     })
    


 

    return {
      department: ref(undefined),
      filterOption,
      handleChange,
      departmentList,
      onSearch,
      topic:ref(''),
      columns,
      data,
      pagination,
      search,
      edit,
      onSelectChange,
      selectedRowKeys,
      deleteAll,
      

    
      
      // func
   
      repay
    };
  },

});
</script>
<style lang="less" scoped>
.message_wra{
    .search{
        display: flex;
        margin-top: 20px;
        margin-left: 20px;
        width: 50vw;
        justify-content:space-between;

        .department{
            display: flex;
            align-items: center;
        }

        .topic{
            display: flex;
            align-items: center;
        }
    }
    .table{
      width: 80vw;
      margin: auto;
      height: 80vh;
      overflow: auto;
      .btn{
        display: flex;
        justify-content: flex-end;     }
        // /deep/.ant-table-thead > tr > th{
        //   text-align: justify;
        //   display: -webkit-box;
        //   -webkit-line-clamp: 2;
        //   overflow: hidden;
        //   text-overflow: ellipsis;
        //   -webkit-box-orient: vertical;
        // }
        /deep/.ant-table-tbody > tr > td{
          text-align: justify;
        }
    }
}

</style>