<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <div class="row gutter wrap justify-center content-center text-center">
        <div class="width-2of4">
          <div class="text-blod login-title">
            <h4>《注册》</h4>
          </div>
          <div>
            <div class="stacked-label">
              <input required class="full-width " v-model="user.name" 
              placeholder="手机号"
              @input="$v.user.name.$touch()" :class="{'has-error': $v.user.name.$error}" >
              <label class="login-title">手机号</label>
            </div>
            <div class="stacked-label">
              <input required placeholder="6-12位密码" class="full-width " type="password"  v-model="user.password">
              <label class="login-title">密码</label>
            </div>
             <div class="stacked-label">
              <input required placeholder="重新输入6-12位密码" class="full-width " type="password"  v-model="user.password">
              <label class="login-title">确认密码</label>
            </div>
                          <div class="group">
      
        <button class="secondary full-width" @click="submit">注册...</button>
                    <div>
              <small>已有账号,请<router-link to="/login">登录</router-link>
              </small>
            </div>
      </div>
          </div>
        </div>
  
      </div>
  
      <div slot="header" class="footer">
        CopyRight @ Coser 2018.
      </div>
    </div>
  
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { Toast } from 'quasar'
export default {
  data() {
    return {
      user: {
        name: '',
        password:''
      }
  }
  },validations: {
    user: {
      name: { required, email  }
    }
  },methods: {
    submit () {
      this.$v.user.$touch()
      if (this.$v.user.$error) {
        //Toast.create('请输入正确的用户名')
          Toast.create({
        html: '请输入正确的用户名',
        color: '#BBB',
        bgColor: 'purple'
      })
        return
      }
     
    }
  }
}
</script>

<style>
.layout-padding {
  padding-top: 15%
}

body {
  background-image: url('../statics/images/register-bg.jpg')
}

.login-title {
  color: white
}

.footer {
  padding: 4px 12px;
  min-height: 50px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  color: #fff;
  /* background: #027be3; */
}
</style>
