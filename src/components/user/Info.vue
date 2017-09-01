<template>
  <q-layout ref="layout">
  
    <!-- -->
      <q-toolbar slot="header" color="secondary"  class="fixed-top">
    <!-- toggles QLayout left side -->
    <q-btn
      flat
      @click="$refs.layout.toggleLeft()"
    >
      <!-- <q-icon name="arrow_back" /> -->
    </q-btn>
    <q-toolbar-title>
      账号设置
    </q-toolbar-title>
    </q-toolbar>
    <div style="padding-top:50px">



  
      <q-list separator highlight>
        <q-item>
          <q-item-side>
            <q-item-tile label>账号</q-item-tile>
  
          </q-item-side>
          <q-item-main inset>
            <q-item-tile right sublabel>15520010009</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile avatar>
              <img src="statics/images/boy-avatar.png">
            </q-item-tile>
          </q-item-side>
        </q-item>
        <q-item-separator />
        <q-item-separator />
  
        <q-item tag="label">
          <q-item-side>
            <q-item-tile label>
              cn
            </q-item-tile>
  
          </q-item-side>
          <q-item-main />
          <q-item-tile sublabel>15520010009</q-item-tile>
  
          <q-item-side right icon="chevron_right">
          </q-item-side>
        </q-item>
  
        <q-item-separator />
  
        <q-item tag="label">
          <q-item-side>
            <q-item-tile label>
              性别
            </q-item-tile>
  
          </q-item-side>
          <q-item-main />
          <q-item-tile sublabel>男</q-item-tile>
  
          <q-item-side right icon="chevron_right">
          </q-item-side>
        </q-item>
  
        <q-item tag="label">
          <q-item-side>
            <q-item-tile>
              个性签名
            </q-item-tile>
  
          </q-item-side>
          <q-item-main />
          <q-item-tile sublabel>有时候明明知道事情很假，你也不能去拆穿</q-item-tile>
  
          <q-item-side right icon="chevron_right">
          </q-item-side>
        </q-item>
        <q-item-separator />
        <q-item-separator />
  
        <q-item tag="label">
          <q-item-side>
            <q-item-tile label>
              微信号
            </q-item-tile>
  
          </q-item-side>
          <q-item-main />
          <q-item-tile sublabel>立刻绑定</q-item-tile>
  
          <q-item-side right icon="chevron_right">
          </q-item-side>
        </q-item>
        <q-item tag="label">
          <q-item-side>
            <q-item-tile label>
              QQ号
            </q-item-tile>
  
          </q-item-side>
          <q-item-main />
          <q-item-tile sublabel>立刻绑定</q-item-tile>
  
          <q-item-side right icon="chevron_right">
          </q-item-side>
        </q-item>
                        <q-item tag="label">
          <q-item-side>
            <q-item-tile label>
              微博
            </q-item-tile>
  
          </q-item-side>
          <q-item-main />
          <q-item-tile sublabel>立刻绑定</q-item-tile>
  
          <q-item-side right icon="chevron_right">
          </q-item-side>
        </q-item>
      </q-list>
      <q-item-separator />
  
      <q-btn color="primary" class="full-width">退出登陆</q-btn>
  
    </div>
  
  </q-layout>
</template>

<script>
  import Avatar from 'vue-avatar/dist/Avatar'
  export default {
    components: {
      Avatar
    },
    methods: {
      handler(obj) {
        console.log(obj.direction) // "right"
        console.log(obj.duration) // 78
        console.log(obj.distance.x) // 273
      }
    }
  }
</script>

