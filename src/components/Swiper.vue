<template>
  <van-swipe
    :autoplay="5000"
    indicator-color="#1989fa"
    lazy-render
  >
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.src" @click="goTo(item.url)" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup (props, cxt) {
    const router = useRouter()
    const goTo = (url) => {
      router.push(url)
    }
    return {
      goTo
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>
