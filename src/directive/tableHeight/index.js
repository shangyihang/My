/*
 * @Author: sunshiynog
 * @Date: 2022-05-30 15:35:40
 * @LastEditTime: 2023-03-21 19:29:29
 * @LastEditors: hankaibo hankaibo@thtf.com.cn
 * @Description: 设置 element-ui table 的最大高度
 */

import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';

const doResize = async (el, binding, vnode) => {
  const { componentInstance: $table } = await vnode;
  const { value } = binding;
  const paginationHeight = (value && value.bottomOffset) ?? 46;
  if (!$table) {
    return;
  }

  const cardPaddingBottom = 4; // 表格所在 card 的 bottom 4px
  const containerPaddingBottom = 4; // 容器的 bottom 10px
  const height =
    window.innerHeight - el.getBoundingClientRect().top - paginationHeight - cardPaddingBottom - containerPaddingBottom;
  $table?.layout?.setMaxHeight(height);
  // el.children[2].style.maxHeight = height - $table.layout.footerHeight - $table.layout.headerHeight + 'px';
  el.children[2].style.height = `${
    height - ($table?.layout?.footerHeight || 0) - ($table.layout?.headerHeight || 0)
  }px`;

  $table.doLayout();
};

export default {
  bind(el, binding, vnode) {
    el.resizeListener = async () => {
      await doResize(el, binding, vnode);
    };
    addResizeListener(window.document.body, el.resizeListener);
  },
  inserted(el, binding, vnode) {
    doResize(el, binding, vnode);
  },
  update(el, binding, vnode) {
    doResize(el, binding, vnode);
  },
  componentUpdated(el, binding, vnode) {
    doResize(el, binding, vnode);
  },
  unbind(el) {
    removeResizeListener(el, el.resizeListener);
  },
};
