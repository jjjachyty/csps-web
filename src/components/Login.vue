<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
   <q-layout class="layout-padding">
      <div class="row gutter wrap justify-center content-center ">
        <div class="col-3 col-xl-4 col-xs-10">
          <div class="text-blod login-title text-center">
            <h4>{{$t("login.title")}}</h4>
          </div>
          <div>
            <div class="stacked-label">
                <q-field icon="phone_iphone"  :error="$v.userName.$error"  :error-label="userNameError">
                  <q-input v-model="userName" :max-length="11" clearable autofocus color="bule" :float-label="$t('login.userNameFlabe')" @blur="$v.userName.$touch" :after="[{icon: 'done', condition: userName.length == 11&&!$v.userName.$error, handler () {}}]" />
                </q-field>
            </div>
            <div class="stacked-label">
               <!-- <q-input v-model="passWord" :before="[{icon: 'lock_outline'}]" :error="$v.passWord.$error"  float-label="密码"  color="teal-7" type="password" :after="[{icon: 'done', condition: passWord.length >= 6, handler () {}}]" /> -->
                  <q-field icon="lock_outline" helper="6-12位包含大、小写字母和数字密码" :error="$v.passWord.$error" color="bule" error-label="">
                  <q-input v-model="passWord" :max-length="16" clearable type="password" :float-label="$t('login.passWordFlabe')" @blur="$v.passWord.$touch" />
                </q-field>
            </div>
              <div class="stacked-label row items-center">
                <q-field icon="closed_caption" helper="输入右边图中验证码" :error="$v.verCode.$error" class="col-8" :error-label="verCodeError">
                  <q-input v-model="verCode" :max-length="4" clearable :float-label="$t('register.verCodeFlabe')" @blur="$v.verCode.$touch" :after="[{icon: 'done', condition: verCode.length == 4&& !$v.verCode.$error, handler () {}}]" />
                </q-field>
                <img class="col-4" height="42px" ref="verCodeImg" v-bind:src="verCodeUrl" v-on:click="refreshVerCode">
  
              </div>
            <div class="group">

              <!-- <q-btn color="secondary" class="full-width"  @click="submit">登录</q-btn> -->

      <q-btn outline style="color: goldenrod;" class="full-width" @click="submit">登录</q-btn>
            </div>
            <div class="text-right">
              <small>
                <router-link to="/register">{{$t("login.regTips")}}</router-link>
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
 import {Toast} from 'quasar'

  import {
    mapGetters,
    mapActions
  } from 'vuex'

  import {
    isPhone,
    checkPassWord
  } from '../validators'
  import {
    cspsApiRoot  } from '../config'
  
export default {
  data() {
    return {
        verCodeUrl: cspsApiRoot + "/user/validateCode",
        userName: '',
        userNameError:'',
        passWord: '',
        verCode:''
    }
  }, validations: {
      userName: { required,isPhone },
      passWord: { required,checkPassWord },
           verCode: {
        required}
  }, methods: {
          refreshVerCode() {
        this.$refs.verCodeImg.src = this.verCodeUrl + "?tm=" + Math.random()
      },
    submit() {
      this.$v.userName.$touch()
      this.$v.passWord.$touch()
      if (this.$v.userName.$error || this.$v.passWord.$error) {
        //Toast.create('请输入正确的用户名')
        Toast.create({
          html: '请输入正确的用户名',
          color: '#BBB',
          bgColor: 'purple'
        })
        return
      }

     this.$store.dispatch('userLogin',{userName:this.userName,passWord:this.passWord})


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
