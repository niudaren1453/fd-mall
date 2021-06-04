import { reactive } from 'vue'
export default function useSubmenu () {
  const state = reactive({
    list: [
    ],
    loading: false,
    finished: false
    // error: false
  })
  const onLoad = () => {
    // 异步更新数据
    // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    // finished如果为true 那么就加载结束
    console.log('update')
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        state.list.push(state.list.length + 1)
      }

      // catch 报错
      //   state.error = true;

      // 加载状态结束
      state.loading = false

      // 数据全部加载完成
      if (state.list.length >= 40) {
        state.finished = true
      }
    }, 1000)
  }
  return { state, onLoad }
}
