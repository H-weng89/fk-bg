(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-101f7e68"],{"0328":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("7a23"),n=a("6605"),o=a("365c");function l(e,t,a){const l=Object(n["c"])(),d=Object(c["ref"])([{value:"jack",label:"Jack"},{value:"lucy",label:"Lucy"},{value:"tom",label:"Tom"}]),i=async e=>{a.value=t.value,e&&(a.value=a.value.filter(t=>t.department==e))},s=()=>{Object(o["f"])("").then(e=>{d.value=e.data.map(e=>({label:e.depName,value:e.depName})),d.value.unshift({label:"全部",value:""})})};s();const r=t=>{e(l.meta.status,t)};let p=Object(c["ref"])("");const u=(e,t)=>t.value.toLowerCase().indexOf(e.toLowerCase())>=0;return{filterOption:u,onSearch:r,handleChange:i,departmentList:d,search:p}}},"0c17":function(e,t,a){},"351f":function(e,t,a){"use strict";a("0c17")},"872e":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("7a23"),n=(a("365c"),a("f64c")),o=a("6605");function l(e,t){const a=Object(o["c"])();let l=Object(c["ref"])([]);const d=e=>{console.log("selectedRowKeys changed: ",e),l.value=e},i=async(c="")=>{let o;console.log(c),c?o=await t(c):(console.log(l.value),o=await t(l.value)),200==o.code?(n["a"].info("删除成功"),e(a.meta.status)):n["a"].info(o.msg||"失败")};return{onSelectChange:d,selectedRowKeys:l,deleteAll:i}}},a935:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=e=>(Object(c["pushScopeId"])("data-v-2b401786"),e=e(),Object(c["popScopeId"])(),e),o={class:"message_wra"},l={class:"search"},d={class:"department"},i=n(()=>Object(c["createElementVNode"])("div",{class:"title"},"部门：",-1)),s={class:"table"},r={style:{"margin-bottom":"16px"},class:"btn"},p=Object(c["createTextVNode"])(" 新增账号 "),u=Object(c["createTextVNode"])(" 批量删除 "),b=n(()=>Object(c["createElementVNode"])("span",{style:{"margin-left":"8px"}},null,-1)),m={key:0},O=["onClick"],j=["onClick"],v={class:"title",style:{display:"flex","font-size":"20px","justify-content":"center"}},h={class:"form",style:{display:"flex","flex-direction":"column","align-items":"flex-end","margin-right":"100px"}},f={style:{display:"flex","align-items":"center","margin-bottom":"20px","margin-top":"20px"}},g=Object(c["createTextVNode"])("部门名称： "),y=Object(c["createTextVNode"])("负责人手机号： "),x={key:0,style:{display:"flex","align-items":"center","margin-bottom":"20px","margin-top":"20px"}},N=Object(c["createTextVNode"])("负责反馈： ");function k(e,t,a,n,k,w){const C=Object(c["resolveComponent"])("a-input-search"),V=Object(c["resolveComponent"])("a-button"),S=Object(c["resolveComponent"])("a-table"),T=Object(c["resolveComponent"])("a-input"),E=Object(c["resolveComponent"])("a-select"),L=Object(c["resolveComponent"])("a-modal");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",d,[i,Object(c["createVNode"])(C,{value:e.search,"onUpdate:value":t[0]||(t[0]=t=>e.search=t),placeholder:"请输入",style:{width:"200px"},onSearch:e.onSearch},null,8,["value","onSearch"])])]),Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",r,[Object(c["createVNode"])(V,{type:"primary",loading:e.loading,onClick:e.add,style:{"margin-right":"16px"}},{default:Object(c["withCtx"])(()=>[p]),_:1},8,["loading","onClick"]),Object(c["createVNode"])(V,{type:"primary",onClick:t[1]||(t[1]=t=>e.deleteAll(""))},{default:Object(c["withCtx"])(()=>[u]),_:1}),b]),Object(c["createVNode"])(S,{"row-selection":{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},columns:e.columns,"data-source":e.data,pagination:e.pagination,rowKey:e=>e.account},{bodyCell:Object(c["withCtx"])(({column:t,record:a})=>["action"===t.key?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",m,[Object(c["createElementVNode"])("a",{onClick:t=>e.edit(a)},"编辑",8,O),Object(c["createElementVNode"])("a",{onClick:t=>e.deleteAll([a.account])}," 移除 ",8,j)])):Object(c["createCommentVNode"])("",!0)]),_:1},8,["row-selection","columns","data-source","pagination","rowKey"])]),Object(c["createVNode"])(L,{visible:e.isShow,"onUpdate:visible":t[5]||(t[5]=t=>e.isShow=t),onOk:e.handleOk,centered:"",cancelText:"取消",okText:"保存",closable:!1},{default:Object(c["withCtx"])(()=>[Object(c["createElementVNode"])("div",v,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",f,[g,Object(c["createVNode"])(T,{value:e.dep.depName,"onUpdate:value":t[2]||(t[2]=t=>e.dep.depName=t),placeholder:"部门名称",style:{width:"200px"}},null,8,["value"])]),Object(c["createElementVNode"])("div",null,[y,Object(c["createVNode"])(T,{value:e.dep.account,"onUpdate:value":t[3]||(t[3]=t=>e.dep.account=t),placeholder:"手机号",style:{width:"200px"}},null,8,["value"])]),e.oldInfo.isAdd?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[N,e.oldInfo.isAdd?(Object(c["openBlock"])(),Object(c["createBlock"])(E,{key:0,value:e.department,"onUpdate:value":t[4]||(t[4]=t=>e.department=t),"show-search":"",placeholder:"选择反馈类型",style:{width:"200px"},options:e.type,"filter-option":e.filterOption,onChange:e.selectType,mode:"multiple"},null,8,["value","options","filter-option","onChange"])):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)])]),_:1},8,["visible","onOk"])])}var w=a("365c"),C=a("81cb");function V(e){let t=Object(c["reactive"])({isAdd:!1});const a=e=>{l.value="修改账号信息",r.value=!0,t.data=e,t.isAdd=!1,n.depName=e.depName,n.account=e.account},n=Object(c["reactive"])({depName:"",account:"",typeList:[]});let o=Object(c["ref"])([]),l=Object(c["ref"])("");const d=()=>{Object(w["k"])().then(e=>{o.value=e.data.map(e=>({label:e.typeName,value:e.typeId}))})},i=e=>{n.typeList=e},s=()=>{"添加账号信息"==l.value?Object(w["a"])(n).then(t=>{200==t.code?(C["message"].info("添加成功"),e(),r.value=!1):C["message"].info(t.msg)}):Object(w["o"])({depName:n.depName,oldAccount:t.data.account,newAccount:n.account==t.data.account?"":n.account}).then(t=>{200==t.code?(C["message"].info("更新成功"),e(),r.value=!1):C["message"].info(t.msg)})};let r=Object(c["ref"])(!1);const p=()=>{t.isAdd=!0,r.value=!0,l.value="添加账号信息"};return{edit:a,add:p,handleOk:s,isShow:r,dep:n,getTypeList:d,type:o,selectType:i,oldInfo:t}}var S=a("872e");function T(){const e=[{title:"账号",dataIndex:"account",key:"account"},{title:"部门名称",key:"depName",dataIndex:"depName",isShow:!1},{title:"创建时间",key:"date",dataIndex:"date",sorter:(e,t)=>e.name.length-t.name.length},{title:"操作",key:"action"}],t=Object(c["ref"])([{topic:"xxxxxx",content:"xxxx"}]),a={size:"large",pageSize:7},n=(e,a="")=>{Object(w["f"])(a).then(e=>{t.value=e.data.map(e=>({...e,date:e.createTime.replace("T"," ").replace("Z","")}))})};return{data:t,columns:e,getList:n,pagination:a}}var E=a("0328"),L=Object(c["defineComponent"])({setup(){let{data:e,columns:t,getList:a,pagination:n}=T(),{state:o,start:l,onSelectChange:d,deleteAll:i}=Object(S["a"])(a,w["d"]),{edit:s,title:r,isShow:p,add:u,handleOk:b,dep:m,getTypeList:O,type:j,selectType:v,oldInfo:h}=V(a),{departmentList:f,onSearch:g,handleChange:y,filterOption:x,search:N}=Object(E["a"])(a);return Object(c["onMounted"])(()=>{a(),O()}),{department:Object(c["ref"])(void 0),filterOption:x,handleChange:y,departmentList:f,onSearch:g,topic:Object(c["ref"])(""),columns:t,data:e,getList:a,pagination:n,dep:m,type:j,selectType:v,oldInfo:h,search:N,deleteAll:i,...Object(c["toRefs"])(o),start:l,onSelectChange:d,add:u,isShow:p,handleOk:b,title:r,edit:s}}}),A=(a("351f"),a("6b0d")),I=a.n(A);const B=I()(L,[["render",k],["__scopeId","data-v-2b401786"]]);t["default"]=B}}]);
//# sourceMappingURL=chunk-101f7e68.b6802b26.js.map