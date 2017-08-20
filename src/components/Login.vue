<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
   <q-layout>
      <div class="row gutter wrap justify-center content-center ">
        <div class="width-4of4">
          <div class="text-blod login-title text-center">
            <h4>《登录》</h4>
          </div>
          <div>
            <div class="stacked-label">
               <q-input v-model="user.password" float-label="11位手机号" inverted color="blue-7" type="password" :after="[{icon: 'done', condition: user.password.length >= 6, handler () {}}]" />

            </div>
            <div class="stacked-label">
               <q-input v-model="user.password" float-label="6-12位密码" inverted color="teal-7" type="password" :after="[{icon: 'done', condition: user.password.length >= 6, handler () {}}]" />
            </div>

            <div class="group">

              <q-btn color="secondary" class="full-width"  @click="submit">登录</q-btn>
            </div>
            <div class="text-right">
              <small>还没有账号？,赶紧
                <router-link to="/register">注册</router-link>
              </small>
            </div>
          </div>
        </div>

      </div>

      <div slot="footer" class="footer text-center">
        CopyRight @ Coser 2018.
      </div>
    </q-layout>

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
        password: ''
      }
    }
  }, validations: {
    user: {
      name: { required, email }
    }
  }, methods: {
    submit() {
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
  background-image: url('../statics/images/login-bg.jpg')
}

.login-title {
  color: white
}


</style>
