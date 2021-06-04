import cartList from '../../views/cart/data/cartList.js'
import { Toast } from 'vant'
const cart = {
  state: {
    cartList: JSON.parse(localStorage.getItem('cart')) ?? cartList, // 购物车数组
    isAllSelected: false

  },
  getters: {
    //   init 初始化购物车
    cartList (state) {
      // 至少有一个false
      const Flag = state.cartList.some(item => item.selected === false)
      // 如果为true，那么就是非全选的状态
      if (Flag) {
        state.isAllSelected = false
      } else {
        state.isAllSelected = true
      }
      localStorage.setItem('cart', JSON.stringify(state.cartList))
      return state.cartList
    },
    // 获取购物车的总量
    getCartNum (state) {
      let num = 0
      state.cartList.forEach(item => {
        //   先判断是否选中
        if (item.selected === true) {
          // 在添加
          num = num + item.num
        }
      })
      return num
    },
    // 已选中的购物车商品价格
    getCartPrice (state) {
      let amount = 0
      state.cartList.forEach(item => {
        if (item.selected === true) {
          // +  价格 * 数量
          amount = Number((parseFloat(amount) + parseFloat(item.price) * parseFloat(item.num)).toFixed(2))
        }
      })
      return amount
    },
    // Allselect
    getAllSelect (state) {
      return state.isAllSelected
    }

  },
  mutations: {
    //   添加购物车
    ADDGOODS (state, data) {
      const { id } = data
      //   判断这个商品是否存在
      const Index = state.cartList.findIndex(item => item.id === id)
      if (Index === -1) {
        //   添加数组
        data.num = 1
        // console.log('push')
        state.cartList.push(data)
      } else {
        // 增加数量
        // console.log('add')
        if (!state.cartList[Index].num) {
          state.cartList[Index].num = 1
        } else {
          state.cartList[Index].num++
        }
      }
      // console.log(state.cartList)
    },
    // 购物车全选
    ALLSELECTCART (state) {
      state.cartList.forEach(item => {
        item.selected = !state.isAllSelected
      })
      state.isAllSelected = !state.isAllSelected
      // console.log(state.cartList)
    },
    // 单选
    SELECTCART (state, id) {
      //   改变选中的商品selected
      // const Index = state.cartList.findIndex(item => item.id === id)
      // state.cartList[Index].selected = !state.cartList[Index].selected
      // 检测list 是否有单个 true|false
      const Flag = state.cartList.some(item => item.selected === false)
      // 如果为true，那么就是非全选的状态

      Flag ? state.isAllSelected = false : state.isAllSelected = true
      // if (Flag) {
      //   // console.log('非全选')
      //   state.isAllSelected = false
      // } else {
      //   // console.log('全选')
      //   state.isAllSelected = true
      // }
    },
    // 添加商品数量
    PLUSGOODSNUM (state, id) {
      const Index = state.cartList.findIndex(item => item.id === id)
      state.cartList[Index].num++
    },
    // 减少商品数量
    MINUSGOODSNUM (state, id) {
      const Index = state.cartList.findIndex(item => item.id === id)
      console.log('index' + Index)
      state.cartList[Index].num--
    },
    // 删除购物车商品
    DELETEGOODS (state, id) {
      try {
        const Index = state.cartList.findIndex(item => item.id === id)
        state.cartList.splice(Index, 1)
        Toast('删除成功')
      } catch (error) {
        Toast(error)
      }
    }
  },
  actions: {
    // 商品页
    addGoods ({ commit }, data) {
      commit('ADDGOODS', data)
    },
    // 购物车页
    allSelectCart ({ commit }) {
      commit('ALLSELECTCART')
    },
    // 购物车页
    selectCart ({ commit }, id) {
      commit('SELECTCART', id)
    },
    // 购物车页
    plusGoodsNum ({ commit }, id) {
      commit('PLUSGOODSNUM', id)
    },
    // 购物车页
    minusGoodsNum ({ commit }, id) {
      commit('MINUSGOODSNUM', id)
    },
    // 购物车页
    deleteGoods ({ commit }, id) {
      commit('DELETEGOODS', id)
    }
  }
}

export default cart
