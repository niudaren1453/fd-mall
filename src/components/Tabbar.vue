<template>
  <div class="tab-bar">
      <div class="tab-box" v-for="(item, index) in list" :key="index">
        <ul class="tab-ul">
          <router-link tag="li" class="tab-li" :to="item.to">
            <i class="iconfont" :class="item.icon">
              <van-icon  class="iconfont" :badge="cartNum" v-if="item.bubble" > </van-icon>
            </i>
            <span> {{item.text}}</span>
          </router-link>
        </ul>
      </div>
  </div>
</template>
<script>
import { onMounted, computed } from 'vue'
// import {useRoute} from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    onMounted(() => {

    })
    const cartNum = computed(() => store.getters.getCartNum)
    return { cartNum }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/mixin.scss';
.tab-bar {
  width: 100vw;
  height: $tabHeight;
  bottom: 0;
  left: 0;
  border-top: 1px solid $gray;
  position: fixed;
  display: flex;
  z-index: 1100;
  background: $tabBg;
  .tab-box {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tab-ul{
    .tab-li{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      >i{
        font-size: $tabIconSize;
        margin-bottom:4px;
        position:relative;
        >i{
          position: absolute;
          right: 0;
          top:4px;
        }
      }

    }
    .router-link-active{
      color: $tabActiveColor;
    }
  }
}
</style>
