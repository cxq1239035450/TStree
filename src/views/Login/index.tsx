
import { defineComponent, reactive } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {
    interface formType {
      userName: String,
      userPassword: String
    }
    const form:formType = reactive({
      userName:'',
      userPassword:''
    })
    const router = useRouter()
    const login = ():void=>{
      if(form.userName =='123'&&form.userPassword =='123456'){
        router.push({path:'layout'})
      }
    }
    const render =  () => (
    <>
    <div class="absolute top-50% left-50% translate-x--50% translate-y--50% w-80% max-w-300px">
      <el-form model={form} label-width="80px">
        <el-form-item label="用户名：">
          <el-input v-model={form.userName} placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model={form.userPassword} placeholder="请输入用户密码" oninput="value=value.replace(/[^0-9]*/g,'')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button onclick={login}>登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    </>
    )
    return render
  }
})
