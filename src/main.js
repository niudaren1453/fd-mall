import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
// import 'default-passive-events' swiper 警告(黄),添加后 swipe 滑动报错(红) 影响:性能

import 'vant/lib/index.css' // 推荐使用less 方便修改主题
import { Loading, Swipe, SwipeCell, SwipeItem, Icon, Checkbox, CheckboxGroup, Button, Stepper, RadioGroup, Radio, Cell, Lazyload, List, Tabs, Tab } from 'vant'
const app = createApp(App)

app.use(Loading)
  .use(Swipe)
  .use(SwipeCell)
  .use(SwipeItem)
  .use(Icon)
  .use(CheckboxGroup)
  .use(Checkbox)
  .use(Button)
  .use(Stepper)
  .use(Radio)
  .use(RadioGroup)
  .use(Cell)
  .use(List)
  .use(Tabs)
  .use(Tab)
  .use(Lazyload, {
    lazyComponent: true
  })

app.use(store).use(router).mount('#app')
// createApp(App).use(store).use(router).mount('#app')
