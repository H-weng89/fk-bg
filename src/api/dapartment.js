/**
 * 分部门账号
 */
import request from './request'

/**
 * 获取分部门信息
 */

export const getUser = ()=>{
    return request.get('/user',{params:{phone:localStorage.getItem('phone')}})
}


/**
 * 回复
 */

export const reply = (data)=>{
    return request.post('/feedback/admin/reply',data)
}

/**
 * 修改手机号
 */

export const changeTel = ({newPhone,oldPhone,smsCode})=>{
    return request.put('/admin/alter/phone',{newPhone,oldPhone,smsCode})
}

/**
 * 找回密码
 */
export const forgetPwd = (data)=>{
    return request.put('/admin/retrieve',data)
}