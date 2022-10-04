import router from '../../router'
import {login,getInfo,getCode,userRegister,forgetPwd} from '../../api'
import { message } from 'ant-design-vue'

 export default {
    data(){
        return{
            time:60,
            isSms:true,
            formState:{
                "password": "",
                "phone":'',
                "code": "",
                 name:'',
                 checkPassword:''
              }

        }
    },
    methods: {
        toRegister(){
            console.log(router)
    router.push('/register')
            
    
        },
        forget(){
            console.log(router)
    router.push('/forget')
            
    
        },
        back(){
            router.go(-1)
        },
        async userLogin(values){
            const formData = new FormData()
            formData.append('account',values.account)
            formData.append('password',values.password)
            const result = await login(formData)
            if(result.data.msg=='Login success'){
              localStorage.setItem('phone',values.account)
              router.push('/main')
    
             }
             else{
                message.info('请检查账号密码')
             }
        
        },
        async sendSms(){
           
             if(!this.formState.phone){
              message.info('请输入手机号')
                return 
             }
             this.isSms = false
             const result = await getCode(this.formState.phone)
             if(result.code==200){
              message.info('已发送')
             }
             else{
                message.info(result.msg)
             }
           let e =  setInterval(() => {
                if(this.time!=0){
                    this.time--
                    return
                }
                this.isSms = true
                clearInterval(e)
                
            }, 1000);
            this.time = 60
        
        },
        async register(){
            if(this.formState.password!==this.formState.checkPassword){
              message.info('两次密码不一致')
                return 
            }
          const result = await userRegister(this.formState)
          if(result.data.code==200){
          message.info('注册成功')
            this.$router.push('/')
          }


        },
        async forgetPwd(){
            if(this.formState.password!==this.formState.checkPassword){
              message.info('两次密码不一致')
                return 
            }
            const result = await forgetPwd({newPwd:this.formState.password,phone:this.formState.phone,smsCode:this.formState.code})
            if(result.code==200){
              message.info('修改成功')
                this.$router.push('/')
            }
        }
        
        
    },
 }
    
    
    
    
  

   



