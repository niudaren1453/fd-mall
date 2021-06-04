<template>
  <van-tabs v-model:active="active" swipeable sticky>
    <!-- eslint-disable-next-line vue/valid-v-for -->
    <van-tab
      v-for="index in 7"
      :title="'选项 ' + index"
      :duration="0.1"
      lazy-render
    >
      <!-- 首 -->
      <!-- <template v-if="active === 0"> -->
      <div class="content-ul">
        <div class="content-li">
          <img />
          <div class="name text_overflow_2">牛式大砍刀，一刀一头小肥牛，小肥牛，牛牛牛</div>
          <div class="discount"><span> 6.9折</span></div>
          <div class="price">￥24.11</div>
          <div class="priceOriginal">￥21.22</div>
        </div>
        <div class="content-li">
          <img />
          <div class="name text_overflow_2">牛式大砍刀，一刀一头小肥牛，小肥牛，牛牛牛</div>
          <div class="discount"><span> 6.9折</span></div>
          <div class="price">￥24.11</div>
          <div class="priceOriginal">￥21.22</div>
        </div>
        <div class="content-li">
          <img />
          <div class="name text_overflow_2">牛式大砍刀，一刀一头小肥牛，小肥牛，牛牛牛</div>
          <div class="discount"><span> 6.9折</span></div>

          <div class="price">￥24.11</div>
          <div class="priceOriginal">￥21.22</div>
        </div>
      </div>
      <!-- </template> -->
      <!-- <template v-else-if="active !== 0"> </template> -->
    </van-tab>
  </van-tabs>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    const active = ref(2)
    return { active }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/mixin.scss";
::v-deep .van-tabs__nav {
  background-color: $bgColor;
}
::v-deep .van-tab--active {
  color: $priceColor;
  // .van-tab__text {
  //   color: white;
  //   background: $priceColor;
  // }
}

::v-deep .van-tabs__line {
  height: 0px;
}

.content-ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 $padding;
  .content-li {
    width: calc(50% - 7px - #{$padding} * 2);
    min-height: 130px;
    padding: 20px $padding 0 $padding;
    margin-bottom: 10px;
    border-radius: 8px;
    background: $white;
    > img {
      width: 100%;
      height: 100px;
      display: block;
      margin-bottom: 5px;
    }
    > .discount {
      > span {
        font-size: 10px;
        padding:1px;
        border: 1px solid $priceColor;
        border-radius: 4px;
        color: $priceColor;
      }
    }
    > .name {
      font-size: 14px;
    }
    &:nth-child(2n) {
      margin-left: 7px;
    }
    >.priceOriginal{
      display: inline-block;
    }
    >.price{
      color: $priceColor;
      display: inline-block;
    }

  }
}

// ::v-deep .van-tab {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// ::v-deep .van-tab__text {
//   font-size: 13px;
//   color: rgb(0,0,0);
// }
// ::v-deep .van-tab__text2 {
//   font-size: 10px;
//   height: 18px;
//   padding: 1px;
//   border-radius: 8px;
// }
</style>
