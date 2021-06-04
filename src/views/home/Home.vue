<template>
  <div class="home-container">
    <!-- 轮播 -->
    <Swiper :list="list" class="swiper-region" />
    <!-- 广告位 -->
    <div class="banner-region">
      <img src="#" alt="广告位" />
    </div>
    <!-- nav -->
    <div class="nav-region">
      <div class="nav-ul">
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
        <div class="nav-li">
          <van-icon name="cart-o" size="30" class="icon_"></van-icon>
          <div class="font_">nav</div>
        </div>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recommendation-region">
      <div class="recomend-ul">
        <div class="recomend-li">
          <div class="header_">
            <div class="title_">超级集市</div>
            <div class="label_">超级市场</div>
          </div>
          <div class="imgs_">
            <!-- <div class=""> </div> -->
            <img />
            <img />
          </div>
        </div>
        <div class="recomend-li">
          <div class="header_">
            <div class="title_">超级集市</div>
            <div class="label_">超级市场</div>
          </div>
          <div class="imgs_">
            <!-- <div class=""> </div> -->
            <img />
            <img />
          </div>
        </div>
      </div>
      <div class="recomend-ul">
        <div class="recomend-li">
          <div class="header_">
            <div class="title_">超级集市</div>
            <div class="label_">超级市场</div>
          </div>
          <div class="imgs_">
            <!-- <div class=""> </div> -->
            <img />
            <img />
          </div>
        </div>
        <div class="recomend-li">
          <div class="header_">
            <div class="title_">超级集市</div>
            <div class="label_">超级市场</div>
          </div>
          <div class="imgs_">
            <!-- <div class=""> </div> -->
            <img />
            <img />
          </div>
        </div>
      </div>
    </div>
    <!-- 热销,特选 -->
    <div class="hot-region">
      <!-- 热销 -->
      <div class="hot-popular">
        <div class="hot-title">热门商品</div>
        <div class="hot-ul">
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
        </div>
      </div>
      <!-- 特选 -->
      <div class="hot-carefullyChosen">
        <div class="hot-title">今日特选</div>
        <div class="hot-ul">
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
          <div class="hot-li">
            <img class="hot-img" />
            <div class="hot-price">$<span>8</span>.6</div>
          </div>
        </div>
      </div>
    </div>
    <!-- subnav -->
    <div class="subnav-region">
      <!-- <div class="subnav-ul">
        <div class="subnav-li">
          <div> 精选</div>
        </div>
      </div> -->
      <!-- <van-pull-refresh > -->
      <Tab />
      <!-- <van-list
          v-model:loading="submenu.state.loading"
          :finished="submenu.state.finished"
          finished-text="没有更多了"
          @load="submenu.onLoad"
        >
          <van-cell
            v-for="item in submenu.state.list"
            :key="item"
            :title="item"
          />
        </van-list> -->
      <!-- </van-pull-refresh> -->
    </div>
    <!-- <div @click="addGoods(data1)">  添加商品id4</div>
        <div @click="addGoods(data2)">  添加商品id10</div> -->
  </div>
</template>
<script>
import { toRefs, reactive } from 'vue'
// import { useStore } from 'vuex'
import Swiper from 'com/Swiper.vue'
import Tab from 'com/Tab.vue'
import useSubmenu from './composition/submenu.js'
export default {
  components: {
    Swiper,
    Tab
  },
  setup () {
    // const store = useStore()
    // submenu
    const submenu = useSubmenu()
    console.log(submenu.state.list)
    const state = reactive({
      //   data1: {
      //     id: 4,
      //     desc: '式大砍刀，一刀一头小肥牛，两刀一头肥牛，N刀一大片牛肉片',
      //     price: 544.11,
      //     title: '牛牛式水果刀MAX超级升级版本！！',
      //     num: 1,
      //     selected: true
      //   },
      //   data2: {
      //     id: 10,
      //     desc: '新增的牛式大砍刀，一刀一头小肥牛，两刀一头肥牛，N刀一大片牛肉片',
      //     price: 544.11,
      //     title: '新增牛牛式水果刀MAX超级升级版本！！',
      //     num: 1,
      //     selected: true
      //   },
      list: [
        {
          src: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
          url: ''
        },
        {
          src: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
          url: ''
        }
      ]
    })
    const addGoods = (data) => {
      // 数量可以自定义其他功能
      // store.dispatch('addGoods', data)
    }

    return { ...toRefs(state), addGoods, submenu } //
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
.home-container {
  background: $bgColor;
  padding-bottom: $tabHeight; // tabbar
}
.banner-region {
  height: 80px;
  padding: 20px $padding;
  img {
    width: 100%;
    height: 100%;
  }
}

.nav-region {
  padding: 0 $padding;
  background: $white;
  border-top: 1px solid $gray;
  .nav-ul {
    display: flex;
    flex-wrap: wrap;
    .nav-li {
      width: calc(25% - #{$padding * 2});
      height: auto;
      margin: $padding;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      > .icon_ {
        width: 40px;
        height: 40px;
        background: red;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > .font_ {
        margin-top: 10px;
        color: $fc;
      }
    }
  }
}

.recommendation-region {
  padding: $padding;
  .recomend-ul {
    display: flex;
    height: 120px;
    border-radius: 7px;
    background: $white;
    .recomend-li {
      flex: 1;
      .header_ {
        padding: 0 $padding;
        height: 40px;
        display: flex;
        align-items: center;
        > .title_ {
          font-size: 18px;
          margin-right: 8px;
        }
        > .label_ {
          padding: 1px 7px;
          border-top-left-radius: 7px;
          border-bottom-right-radius: 7px;
        }
      }
      .imgs_ {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        > img {
          width: 60px;
          height: 60px;
          background: red;
        }
      }
      &:nth-child(1) {
        .label_ {
          background: chartreuse;
        }
      }
      &:nth-child(2) {
        .label_ {
          background: orange;
        }
      }
    }
    &:nth-child(2) {
      margin-top: 15px;
    }
  }
}

.hot-region {
  padding: 0 $padding;
  margin-top: 20px;
  margin-bottom: 20px;
  > div {
    padding: $padding 4px $padding $padding;
    border-radius: 8px;
    display: flex;
    &:nth-child(2) {
      margin-top: 10px;
    }
    > .hot-title {
      width: 60px;
      height: 100px;
      font-size: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    > .hot-ul {
      display: flex;
      flex: 1;
      > .hot-li {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        > img {
          width: 90%; // 60
          height: 70%;
          background-color: black;
          display: block;
        }
        > .hot-price {
          height: 30px;
          line-height: 30px;
          color: $priceColor;
          font-size: 14px;
          span:nth-child(1) {
            padding: 0 1px;
            // letter-spacing: 0.1em;
            font-size: 16px;
          }
        }
      }
    }
  }
  > .hot-popular {
    background-color: rgb(243, 151, 46);
  }
  > .hot-carefullyChosen {
    background-color: rgb(79, 235, 79);
  }
}
</style>
