/*
 * @Author: hankaibo hankaibo@thtf.com.cn
 * @Date: 2022-11-01 19:25:11
 * @LastEditors: yutao yutao@thtf.com.cn
 * @LastEditTime: 2023-08-07 10:25:31
 * @Description:
 */
export default {
  inserted(el, binding) {
    const body = document.querySelector('body');

    let dom = el;
    if (binding.modifiers.parent) {
      dom = el.parentNode;
    }
    el.style.cursor = 'pointer';
    dom.style.position = 'fixed';
    dom.style.zIndex = '9999999';

    el.onmousedown = (event) => {
      // 如果是表单元素，在其内部移动鼠标时，禁掉拖拽事件
      if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName)) {
        return;
      }
      // el-button里有个span
      if (event.target.parentNode.tagName === 'BUTTON') {
        return;
      }
      el.style.cursor = 'move';
      body.style.userSelect = 'none'; // 拖动时禁止选择

      const startX = event.clientX;
      const startY = event.clientY;
      const { top, left, width, height } = dom.getBoundingClientRect();
      const bodyRect = body.getBoundingClientRect();

      body.onmousemove = (e) => {
        el.style.cursor = 'move';
        const moveX = e.clientX - startX;
        const moveY = e.clientY - startY;
        let newTop = top + moveY;
        let newLeft = left + moveX;
        if (binding.modifiers.inner) {
          newTop = Math.max(newTop, 0);
          newLeft = Math.max(newLeft, 0);
          newTop = Math.min(newTop, bodyRect.height - height);
          newLeft = Math.min(newLeft, bodyRect.width - width);
        }
        dom.style.top = `${newTop}px`;
        dom.style.left = `${newLeft}px`;
        el.style.pointerEvents = 'none';
      };

      window.onmouseup = () => {
        el.style.cursor = 'pointer';
        body.style.userSelect = null;
        body.onmousemove = null;
        window.onmouseup = null;
        el.style.pointerEvents = null;
      };
    };
  },
  unbind(el) {
    el.onmousedown = null;
  },
};
