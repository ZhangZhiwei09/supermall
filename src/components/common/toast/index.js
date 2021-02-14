import Toast from './toast.vue'// 引入先前写好的vue

const obj = {};
// 注册Toast
obj.install = function (Vue) {
    // 生成一个Vue的子类
    const ToastConstructor = Vue.extend(Toast)
    // 生成一个该子类的实例
    const toast = new ToastConstructor();
 
    // 将这个实例挂载在我创建的div上
    // 并将此div加入全局挂载点内部
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
 
    // 通过Vue的原型注册一个方法
    Vue.prototype.$toast = toast
}
 
export default obj