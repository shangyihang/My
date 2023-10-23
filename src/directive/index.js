/*
 * @Author: liushengyan
 * @Date: 2022-06-21 13:45:02
 * @LastEditTime: 2023-02-11 17:11:57
 * @LastEditors: hankaibo hankaibo@thtf.com.cn
 * @Descripttion:
 * @Description:
 */
import hasRole from './permission/hasRole';
import hasPermi from './permission/hasPermi';
import hasSecret from './permission/hasSecret';
import isDisabled from './permission/isDisabled';
import dialogDrag from './dialog/drag';
import simpleDrag from './drag';
import dialogDragWidth from './dialog/dragWidth';
import dialogDragHeight from './dialog/dragHeight';
import autoHeight from './tableHeight';
import autoScrollbar from './scrollbar';
import hideSelf from './hideSelf';
import tableFit from './tableFit';
import noMoreClick from './noMoreClick/noMoreClick';

const noMoreClickList = [noMoreClick];
const install = (Vue) => {
  Vue.directive('hasRole', hasRole);
  Vue.directive('hasPermi', hasPermi);
  Vue.directive('hasSecret', hasSecret);
  Vue.directive('isDisabled', isDisabled);
  Vue.directive('autoHeight', autoHeight);
  Vue.directive('autoScrollbar', autoScrollbar);
  Vue.directive('dialogDrag', dialogDrag);
  Vue.directive('drag', simpleDrag);
  Vue.directive('dialogDragWidth', dialogDragWidth);
  Vue.directive('dialogDragHeight', dialogDragHeight);
  Vue.directive('mousedownOutside', hideSelf);
  Vue.directive('tableFit', tableFit);
  noMoreClickList.forEach((e) => {
    Vue.directive(e.name, e);
  });
};

if (window.Vue) {
  window.hasRole = hasRole;
  window.hasPermi = hasPermi;
  window.autoHeight = autoHeight;
  window.Vue.use(install);
  window.tableFit = tableFit;
}

export default install;
