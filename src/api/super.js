/**
 * 总管理
 * 
 */

import request from './request'

/**
 * 登录
 */

export const login = (data)=>{
    return request.post('/login',data)

}

/**
 * 获取消息列表
 */
export const fkList = (isReplied,key='')=>{
    return request.get('/feedback/super/list',{params:{isReplied,key}})
}

/*
 *获取闲情 
 */

 export const detail = (feedbackId)=>{
    return request.get('/feedback/detail',{params:{feedbackId}})

 }

 /**
  * 部门列表
  */
 export const department = (key)=>{
    return request.get('/admin',{params:{key}})
 }

 /**
  * 删除反馈
  * 
  */
 export const deleteFk = (list)=>{
    return request({
        method:'delete',
        url:'/feedback',
        data:list
    })
 }

 /**
  * 获取反馈类型
  */
 export const getType = ()=>{
    return request.get('/type')
 }

 /**
  * 添加分部门账号
  */

 export const addDepartment = (data)=>{
    return request.post('/admin/register',data)
 }

 /**
  * 修改部门信息
  */

 export const updateDepartment = (data)=>{
    return request.post('/admin/update',data)
 }

 /**
  * 删除账号
  */
  export const deleteAdmin = (list)=>{
    return request({
        method:'delete',
        url:'/admin/delete',
        data:list
    })
 }

/**
 * 获取手机验证码
 */

 export const getCode = (phone)=>{
    return request.get('/user/sms',{params:{phone}})
}

/**
 * 修改密码
 */

export const changePwd = ({newPwd,phone,smsCode})=>{
    return request.put('/admin/retrieve',{newPwd,phone,smsCode})
}