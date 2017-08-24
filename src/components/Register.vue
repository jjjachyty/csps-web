<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <div class="row sm-gutter justify-center content-center">
        <div class="col-3 col-xl-4 col-xs-10">
          <div class="text-blod text-primary text-center">
            <h4 >{{$t("register.title")}}</h4>
          </div>
          <div>
            <div  ref="step1">
              <div class="stacked-label">
                <!-- <q-input v-model="userName" :before="[{icon: 'phone_iphone'}]" :max="11" :error="phoneError" @change="$v.userName.$touch" float-label="手机号" color="blue-7" type="number" autofocus :after="[{icon: 'done', condition: (/^1(3|4|5|7|8)\d{9}$/.test(userName)),error:true, handler () {alert(2)}}]" /> -->
                <q-field icon="phone_iphone"  :error="$v.userName.$error"  :error-label="phoneError">
                  <q-input v-model="userName" :max-length="11" clearable autofocus color="bule" :float-label="$t('register.userNameFlabe')" @blur="$v.userName.$touch" :after="[{icon: 'done', condition: userName.length == 11&&!$v.userName.$error, handler () {}}]" />
                </q-field>
                <br>
              </div>
              <div class="stacked-label row items-center">
                <q-field icon="closed_caption" helper="输入右边图中验证码" :error="$v.verCode.$error" class="col-8" :error-label="verCodeError">
                  <q-input v-model="verCode" :max-length="4" clearable :float-label="$t('register.verCodeFlabe')" @blur="$v.verCode.$touch" :after="[{icon: 'done', condition: verCode.length == 4&& !$v.verCode.$error, handler () {}}]" />
                </q-field>
                <img class="col-4" height="42px" ref="verCodeImg" v-bind:src="verCodeUrl" v-on:click="refreshVerCode">
  
              </div>
              <!-- <q-btn v-if="step ==1" outline style="color: teal;" class="full-width" @click="toStep2">下一步</q-btn> -->
  
            </div>
            <div  ref="step1">
              <div class="stacked-label">
                <!-- <q-input v-model="userName" :before="[{icon: 'phone_iphone'}]" :max="11" :error="phoneError" @change="$v.userName.$touch" float-label="手机号" color="blue-7" type="number" autofocus :after="[{icon: 'done', condition: (/^1(3|4|5|7|8)\d{9}$/.test(userName)),error:true, handler () {alert(2)}}]" /> -->
                <q-field icon="lock_outline" helper="6-12位包含大、小写字母和数字密码" :error="$v.passWord.$error" color="bule" error-label="">
                  <q-input v-model="passWord" :max-length="16" clearable type="password" float-label="密码" @blur="$v.passWord.$touch" />
                </q-field>
                <br>
              </div>
              <div class="stacked-label  items-center">
                <q-field icon="lock" helper="再次确认密码" :error="$v.repeatPassword.$error" error-label="两次密码不一致">
                  <q-input v-model="repeatPassword" :max-length="16" type="password" clearable float-label="确认密码" @blur="$v.repeatPassword.$touch" />
                </q-field>
  
              </div>
              <q-btn  outline style="color: teal;" class="full-width" @click="submit">注册</q-btn>
  
            </div>
            <div class="text-right">
  
              <div v-if="step==1">
                <small>
                        <router-link to="/login">{{$t("register.loginTips")}}</router-link>
                      </small>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
      <div slot="header" class="footer text-primary text-center">
        CopyRight @ Coser 2018.
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  import {
    required,
    sameAs,
    minLength
  } from 'vuelidate/lib/validators'
  import {
    Toast
  } from 'quasar'
  import {
    cspsApiRoot  } from '../config'
  
  import {
    isPhone,
    checkPassWord
  } from '../validators'
  import axios from 'axios'
   import Qs from 'qs'
  export default {
    data() {
      return {
        verCodeUrl: cspsApiRoot + "/user/validateCode",
        step: 1,
        userName: "",
        verCode: "",
        verCodeError: "",
        passWord: "",
        repeatPassword: "",
        phoneError: ""
  
      }
    },
    computed: {
      ...mapGetters({
        message: 'checkOutMessage'
      })
    },
    validations: {
      userName: {
        required,
        async isUnique(value) {
          var self = this
           if  (!isPhone(value)){
             self.phoneError=this.$t("register.userNameError")
             console.log(this.$i18n)
             return false
           }
          if (value === "" || value.length < 11){
            self.phoneError="请输入11位的手机号"
             return false
          }
             return  self.$store.dispatch('checkUserName',{"userName":value}).then((response)=>{
                if (response.data.status){
                  self.phoneError=""
                    return true
                }else{
                    self.phoneError=response.data.message
                    return false
                }
              }).catch((response)=>{
                    self.phoneError=errPrixTips+response.message
                    return false
              })
        }
        
      },
      verCode: {
        required,
        // async isUnique(value) {
        //   var self = this
  
        //   if (value === "" || value.length < 4) return false
  
        //   return  self.$store.dispatch('checkVerCode',{"param": value}).then((response)=>{
        //         if (response.data.status){
        //           self.phoneError=""
        //             return true
        //         }else{
        //             self.phoneError=response.data.message
        //             return false
        //         }
        //       }).catch((response)=>{
        //             self.phoneError=errPrixTips+response.message
        //             return false
        //       })

        // }
  
      },
      passWord: {
        required,
        minLength: minLength(6),
        checkPassWord
  
      },
      repeatPassword: {
        sameAsPassword: sameAs('passWord')
      }
  
    },
    methods: {
      refreshVerCode() {
        this.$refs.verCodeImg.src = this.verCodeUrl + "?tm=" + Math.random()
      },
      toStep2() {
        this.$v.verCode.$touch()
        this.$v.userName.$touch()
        if (!this.$v.verCode.$invalid && !this.$v.userName.$invalid) {
          this.step = 2
        }
  
      },
      submit() {
        this.$v.verCode.$touch()
        this.$v.userName.$touch()
        this.$v.passWord.$touch()
        this.$v.repeatPassword.$touch()
        if (!this.$v.verCode.$invalid && !this.$v.userName.$invalid && !this.$v.passWord.$invalid && !this.$v.repeatPassword.$invalid) {
          this.$store.dispatch("register", {
            "userName": this.userName,
            "passWord": this.passWord,
            "validataCode":this.verCode
          }).then((respons)=>{
              if(respons.data.status){
            Toast.create({
            html: "注册成功，欢迎使用",
            icon: 'highlight off',
            timeout: 2500,
            color: 'white',
            bgColor: '#e57373',
          })
                router.push("/userinfo")
              }else{
                this.refreshVerCode()
                Toast.create({
            html: "注册失败"+respons.data.message,
            icon: 'highlight off',
            timeout: 2500,
            color: 'white',
            bgColor: '#e57373',
                })
              }
          }).catch((respons)=>{

          })
        }
      }
    },
    watch: {
      'message': function(value) {
        if (!value.status) {
          Toast.create({
            html: value.text,
            icon: 'highlight off',
            timeout: 2500,
            color: 'white',
            bgColor: '#e57373',
          })
        }
      }
    }
  }
</script>

<style>
  .layout-padding {
    padding-top: 10%
  }
  
  body {
    background-image: url('../statics/images/register-bg.jpg')
  }
  
  .login-title {
    color: white
  }
  

</style>
