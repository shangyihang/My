/*
 * @Author: yutao
 * @Date: 2022-11-22 15:51:31
 * @LastEditors: yutao
 * @LastEditTime: 2022-11-22 16:12:49
 * @Description: 按钮防抖
 */
const noMoreClick = {
  name: 'noMoreClick',
  inserted(el) {
    el.addEventListener('click', () => {
      el.classList.add('is-disabled');
      el.disabled = true;
      setTimeout(() => {
        el.disabled = false;
        el.classList.remove('is-disabled');
      }, 2000);
    });
  },
};
export default noMoreClick;
