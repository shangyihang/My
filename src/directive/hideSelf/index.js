/*
 * @Author: hankaibo hankaibo@thtf.com.cn
 * @Date: 2022-07-11 10:01:33
 * @LastEditors: hankaibo hankaibo@thtf.com.cn
 * @LastEditTime: 2022-07-13 17:35:55
 * @Description:
 */
const mousedownOutside = {
  // 初始化指令
  bind(el, binding) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('mousedown', documentHandler);
  },
  unbind(el) {
    // 解除事件监听
    document.removeEventListener('mousedown', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};

export default mousedownOutside;

// import Clickoutside from 'element-ui/src/utils/clickoutside';

// export default Clickoutside;
