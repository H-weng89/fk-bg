<template>
    <div class="message_wra" >
        <div class="search">
            <div class="department"> 
                <div class="title">部门：</div>
                 <a-input-search
      v-model:value="search"
      placeholder="请输入"
      style="width: 200px"
      @search="onSearch"
    /></div>

        </div>
        <div class="table">
          <div style="margin-bottom: 16px" class="btn">
           <a-button type="primary"  :loading="loading" @click="add" style="margin-right:16px">
        新增账号
      </a-button>
      <a-button type="primary"   @click="deleteAll('')">
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
             :rowKey="record => record.account"
          
         
            >

    <template #bodyCell="{ column, record }">
    
    
      <template v-if="column.key === 'action'">
        <span>
          <a @click="edit(record)">编辑</a>
          
        
       
        
          <a @click="deleteAll([record.account])">
            移除
          </a>
       
        </span>
      </template>
    </template>
  </a-table>

        </div>
      
 
         <a-modal v-model:visible="isShow"  @ok="handleOk" centered
 cancelText="取消" okText="保存"
 :closable="false">
      <div class="title" style="display: flex;
    font-size: 20px;
    justify-content: center;">{{title}}</div>
      <div class="form" style="display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 100px;">
        <div style="display:flex;align-items: center;margin-bottom:20px;margin-top:20px">部门名称：  <a-input v-model:value="dep.depName" placeholder="部门名称" style="width:200px" /></div>
        <div>负责人手机号：  <a-input v-model:value="dep.account" placeholder="手机号"  style="width:200px"/></div>
        <div style="display:flex;align-items: center;margin-bottom:20px;margin-top:20px" v-if="oldInfo.isAdd" >负责反馈： <a-select
    v-model:value="department"
    show-search
 
    placeholder="选择反馈类型"
    style="width: 200px"
    :options="type"
    :filter-option="filterOption"   
    @change="selectType"
    mode="multiple" v-if="oldInfo.isAdd"></a-select>
    </div>

      </div>
  </a-modal>
        
        
    </div>
</template>

<script>

import { defineComponent, toRefs,ref,onMounted } from 'vue';
import useModal from './modal';
import useSelect from '../../hooks/useSelect'
import useTable from './table';
import useSearch from '../../hooks/useSearch';
import { deleteFk,deleteAdmin } from '../../api';
export default defineComponent({
  setup() {
   
  
   
   //表格数据
   let {data,columns,getList,pagination} = useTable()
    // 多选及其操作
   let {state,start,onSelectChange,deleteAll} = useSelect(getList,deleteAdmin)
 // 对话框
   let {edit,title,isShow,add,handleOk,dep,getTypeList,type,selectType,oldInfo} = useModal(getList)
   // 搜索及其部门选择
   let {departmentList,onSearch,handleChange,filterOption,search} = useSearch(getList)

onMounted(()=>{
  getList()
  getTypeList()
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
      getList,
      pagination,
      dep,
      type,
      selectType,
      oldInfo,
      search,
      deleteAll,
    
      ...toRefs(state),
      // func
      start,
      onSelectChange,

      add,
      isShow,
      handleOk,
      title,
      edit
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
     
      /deep/.ant-btn-primary{
        border-radius: 5px;
      }
      .btn{
        display: flex;
        justify-content: flex-end;     }
        /deep/.ant-table-thead > tr > th{
          text-align: center;
        }
        /deep/.ant-table-tbody > tr > td{
          text-align: center;
        }
     
    }
    :global(.ant-modal-footer){    
        display: flex;
        justify-content: center;
    }
    :global(.ant-modal-content){
        border-radius: 20px;
        
    }

  


}


</style>