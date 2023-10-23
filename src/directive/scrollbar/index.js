/*
 * @Author: sunshiynog
 * @Date: 2022-05-30 15:35:40
 * @LastEditTime: 2023-03-26 21:12:12
 * @LastEditors: hankaibo hankaibo@thtf.com.cn
 * @Description: 设置 element-ui table 的最大高度
 */

import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';

const doResize = async (el, binding, vnode) => {
  const { componentInstance: $el } = await vnode;
  const { value } = binding;
  const buttonHeight = (value && value.bottomOffset) ?? 0;
  if (!$el) {
    return;
  }
  const cardPaddingBottom = 4; // 所在 card 的 bottom 10px
  const cardBorderBottom = 1; // 所在卡片 card 的 border-bottom
  const containerPaddingBottom = 8; // 容器的 bottom 10px
  const height =
    window.innerHeight -
    el.getBoundingClientRect().top -
    cardPaddingBottom -
    cardBorderBottom -
    containerPaddingBottom -
    buttonHeight;
  el.setAttribute('style', `height:${height}px`);
};

export default {
  bind(el, binding, vnode) {
    el.resizeListener = async () => {
      await doResize(el, binding, vnode);
    };
    addResizeListener(window.document.body, el.resizeListener);
  },
  componentUpdated(el, binding, vnode) {
    doResize(el, binding, vnode);
  },
  unbind(el) {
    removeResizeListener(el, el.resizeListener);
  },
};
