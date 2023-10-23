/**
 * v-dialogDragWidth 可拖动弹窗高度（右下角）
 * Copyright (c) 2022 thtf
 */

export default {
  bind(el) {
    const dragDom = el.querySelector('.el-dialog');
    const lineEl = document.createElement('div');
    lineEl.style =
      'width: 6px; background: inherit; height: 10px; position: absolute; right: 0; bottom: 0; margin: auto; z-index: 1; cursor: nwse-resize;';
    lineEl.addEventListener(
      'mousedown',
      (evt) => {
        // 鼠标按下，计算当前元素距离可视区的距离
        const disX = evt.clientX - el.offsetLeft;
        const disY = evt.clientY - el.offsetTop;
        // 当前宽度 高度
        const curWidth = dragDom.offsetWidth;
        const curHeight = dragDom.offsetHeight;
        document.onmousemove = (e) => {
          e.preventDefault(); // 移动时禁用默认事件
          // 通过事件委托，计算移动的距离
          const xl = e.clientX - disX;
          const yl = e.clientY - disY;
          dragDom.style.width = `${curWidth + xl}px`;
          dragDom.style.height = `${curHeight + yl}px`;
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      },
      false,
    );
    dragDom.appendChild(lineEl);
  },
};
