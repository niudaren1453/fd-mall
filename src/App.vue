<template>
  <div class="main">
    <router-view v-slot="{ Component }" class="router-view">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
      <template v-if="isTabbar">
        <tabbar :list="navbarList" />
      </template>
    </router-view>
  </div>
</template>

<script>
import Tabbar from 'com/Tabbar.vue'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    const state = reactive({
      navbarList: [
        {
          text: '首页',
          to: 'home',
          icon: 'icon-Homehomepagemenu'
        },
        {
          text: '购物车',
          to: 'Cart',
          bubble: true,
          icon: 'icon-cart'
        },
        {
          text: '我的',
          to: 'mine',
          icon: 'icon-user'
        }
      ],
      isTabbar: false,
      transitionName: ''
    })
    router.beforeEach((to, from, next) => {
      // 判断是否为tabbar页面
      if (to.meta.index === 1) {
        state.isTabbar = true
      }
      // 判断是否为权限页
      // if(from.meta){}

      // https://www.jianshu.com/p/5a98377d146b
      if (to.meta.index > from.meta.index) {
        state.transitionName = 'slide-left'
        next()
      } else if (to.meta.index < from.meta.index) {
        state.transitionName = 'slide-right'
        next()
      } else {
        state.transitionName = ''
        next()
      }
    })
    return {
      ...toRefs(state)
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
@import "./assets/style/index.scss";
@import "./assets/icon/index.css";
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-100%);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%);
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate(-100%);
}

// animation路由跳转抖动问题
.router-view {
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>
