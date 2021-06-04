<template>
  <div class="cart-contaienr" v-if="cartList.length > 0">
    <div class="cart-region">
      <template v-for="item in cartList" :key="item.id">
        <van-swipe-cell>
          <div class="goods-item line_bottom">
            <van-checkbox
              v-model="item.selected"
              @click="selectCart(item.id)"
              :name="item.id"
            ></van-checkbox>
            <img />
            <div class="item-info">
              <div class="title m_f_b text_overflow_1">
                {{ item.title }}
              </div>
              <div class="desc text_overflow_2">
                {{ item.desc }}
              </div>
              <div class="price s_f_b red">￥{{ item.price }}</div>
              <van-stepper
                v-model="item.num"
                :max="item.max"
                class="step"
                :integer="true"
                @plus="plusGoodsNum(item.id)"
              />
            </div>
          </div>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="deleteCart"
            />
          </template>
        </van-swipe-cell>
      </template>
    </div>
    <cart-options />
  </div>
  <div style="font-size:60px" v-else>空空如也</div>
</template>
<script>
import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import CartOptions from './components/CartOptions.vue'
export default {
  components: { CartOptions },
  setup () {
    const store = useStore()
    const state = reactive({
      checked: [],
      list: [
        {
          cash: 11,
          nn: '1'
        },
        {
          cash: 11
        }
      ]
    })
    const cartList = computed(() => store.getters.cartList)
    const plusGoodsNum = (id) => store.dispatch('plusGoodsNum', id)
    const deleteCart = (id) => store.dispatch('deleteGoods', id)
    const selectCart = (id) => store.dispatch('selectCart', id)

    return { ...toRefs(state), cartList, plusGoodsNum, deleteCart, selectCart } // selectCart
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
.cart-region {
  background: $white;
  margin-bottom: $tabHeight + 60px; // 60 cartOptions height
}

.goods-item {
  padding: $padding;
  display: flex;
  align-items: center;
  > img {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
  .item-info {
    flex: 1;
    flex-direction: column;
    height: 100px;
    margin-left: 15px;
    position: relative;
    .title {
      height: 24px;
    }
    .desc {
      height: 38px;
      line-height: 20px;
    }
    .price {
      height: 38px;
      display: flex;
      align-items: flex-end;
    }
    .step {
      bottom: 0;
      right: 0;
      position: absolute;
    }
  }
}

.delete-button {
  height: 100%;
}
</style>
