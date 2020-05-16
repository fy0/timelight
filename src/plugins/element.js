import Vue from 'vue'
import { Button, Container, Main, Footer, Aside, Menu, MenuItem, MenuItemGroup, Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

for (const i of [Button, Container, Main, Footer, Aside, Menu, MenuItem, MenuItemGroup]) {
  Vue.use(i)
}

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
