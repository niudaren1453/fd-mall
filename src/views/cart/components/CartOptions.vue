<template>
  <div class="cart-options line_top">
    <div class="left">
      <div class="all-select">
        <van-checkbox v-model="checked" ></van-checkbox>
        <div class="check-desc">全选</div>
        <div class="amount-num">
          已选择<span class="red">{{ amountNum }}</span
          >件商品
        </div>
      </div>
    </div>
    <div class="right">
      <div class="price">
        总价: <span class="red">{{ price }} </span>
      </div>
      <div class="btn-area">立即购买</div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import { numberFormat } from 'utils/index.js'
export default {
  setup () {
    const state = reactive({})
    const store = useStore()
    const allSelect = () => store.dispatch('allSelectCart')
    const amountNum = computed(() => store.getters.getCartNum)
    const isAllChecked = computed(() => store.getters.getAllSelect)
    const checked = computed({
      set: () => {
        allSelect()
      },
      get: () => {
        return isAllChecked.value
      }
    })

    const price = computed(() => numberFormat(store.getters.getCartPrice))
    return { ...toRefs(state), checked, amountNum, price }
  }

}
</script>
<style lang="scss" scoped>
@import "../../../assets/style/mixin.scss";
.cart-options {
  width: 100%;
  height: 60px;
  bottom: $tabHeight;
  left: 0;
  background: $white;
  display: flex;
  position: fixed;
  align-items: center;
  .left {
    flex: 1;
    height: 100%;
    margin-left:$padding;
    display: flex;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .check-desc {
      margin-left: 10px;
    }
    .all-select {
      display: flex;
    }
    .amount-num {
      margin-left: 10px;
      > span {
        color: red;
      }
    }
  }
  .right {
    flex: 1;
    height: 100%;
    margin-right:$padding;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .btn-area {
      width: 90px;
      height: 34px;
      background: $themeColor;
      color: $white;
      font-size: 15px;
      border-radius: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
