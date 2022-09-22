import { changePwd,getCode,changeTel } from "../../api"
import { message } from "ant-design-vue/lib/components"

export default{
 data(){
    return {
    time:60,
    isSms:true,
    formState:{
        "newPwd": "",
        "phone":localStorage.getItem('phone'),
        "smsCode": "",
         newPhone:'',
         oldPhone:'',
         pwd:''

      },
      title:'',
      input1:'',
      input2:'',
      obj1:{
        '修改密码':'新密码',
        '修改手机号':'旧手机号'
      },
      obj2:{
        '修改密码':'确认新密码',
        '修改手机号':'新手机号'
      }
    }
 },
updated() {
    this.title = this.$route.meta.mark
    this.input1 = this.obj1[this.title]
    this.input2 = this.obj2[this.title]
    this.formState.phone = localStorage.getItem('phone')
},
mounted() {
    this.title = this.$route.meta.mark
    this.input1 = this.obj1[this.title]
    this.input2 = this.obj2[this.title]
},
    methods: {
        async sendSms(){
            this.isSms = false
             if(this.title=='修改手机号'){
              this.formState.phone = this.formState.newPhone
             }
             if(!this.formState.phone){
              message.info('请先输入手机号')
             }
             const result = await getCode(this.formState.phone)
             if(result.code==200){
                message.info('已发送')
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
   async onFinish(values){
    // todo
       const result = await this.change(this.formState)
       if(result.code==200){
        message.info('修改成功',1)
        if(this.title=='修改手机号'){
          message.info('修改手机号后请重新登录')
          this.$router.push('/')
        }
       }
       else{
        message.info(result.msg)
        
       }

    },
    async change(data){
      if(this.title=='修改密码'){
        return changePwd(data)
      }
      else{
        return changeTel(data)
      }

    }
    }
}