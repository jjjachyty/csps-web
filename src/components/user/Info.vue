<template>
  <q-layout ref="layout">
     <div class="">
         <div>
             <img width="100%" src="statics/images/qq2cy.jpg"/>
        </div>
        <!-- -->

        <div class="row justify-around">
            <div>

        <q-tabs   inverted class="shadow-1">
                    
        <q-tab default slot="title" name="base" label="基本信息" />
        <q-tab slot="title" label="修改头像" />
        <q-tab slot="title" label="修改密码" />
        <q-tab slot="title" label="修改手机" />
        <q-tab slot="title" label="账号绑定" />
        <q-tab slot="title" label="认证信息" />
              <q-tab-pane name="base">Tab One</q-tab-pane>

      </q-tabs>

            </div>
            <!-- 头像简介-->
           <div class="row justify-end">
           <div class="col-auto">
                   <q-card  square color="">
      <q-item>
        <!-- <q-item-side avatar="statics/images/boy-avatar.png" /> -->
        <avatar username="Darth Vader"
                src="statics/images/boy-avatar.png"
                :size="100"></avatar>
                <q-item-side/>
        <q-item-main>
          <q-item-tile label>Janly男</q-item-tile>
          <q-item-tile sublabel>摄影君</q-item-tile>
        </q-item-main>
        <q-item-side/>
      </q-item>
      <q-card-media>
        <img>
      </q-card-media>
      <q-card-title>
        社团
        <span slot="subtitle">の</span>
      </q-card-title>
            <q-card-separator inset />
      <q-card-main>
        <div>粉丝:2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         关注:20
        </div>
      </q-card-main>
            <q-card-actions align="around">
        <q-btn flat round small color="red"><q-icon name="favorite" /></q-btn>
        <q-btn flat round small color="teal"><q-icon name="mail" /></q-btn>
      </q-card-actions>
    </q-card>
           </div>
           </div>
        </div>
     </div>


  </q-layout>
</template>
<script>
import Avatar from 'vue-avatar/dist/Avatar'
export default {
  components: {
    Avatar
  }
}
</script>

