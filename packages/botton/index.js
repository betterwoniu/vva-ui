// 导入组件，组件必须声明 name
import VVAButton from './src'

// 为组件提供 install 安装方法，供按需引入
VVAButton.install = function (Vue) {
  Vue.component(VVAButton.name, VVAButton)
}

// 导出组件
export default VVAButton
