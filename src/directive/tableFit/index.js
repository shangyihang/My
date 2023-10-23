/*
 * @Author: gengkaihui
 * @Date: 2021-12-16 14:31:21
 * @LastEditTime: 2022-07-23 10:42:36
 * @LastEditors: Yueenfan
 * @Description: 单元格宽度自适应，单行显示
 * @FilePath: \zhtj-web\src\directive\tableFit\index.js
 */
function adjustColumnWidth(table, vnode) {
  // 中文和全角正则
  // Use a regular expression literal instead of the 'RegExp' constructor  prefer-regex-literals 推荐使用正则表达式而不是'RegExp' 构造函数
  const CN = /[\u4E00-\u9FA5]|[^\uFF00-\uFFFF]'/;
  const NUM = /'[0-9]'/;
  // 中文字体的像素宽度比例
  const CN_RATE = 1.1;
  // 数字字体的像素宽度比例
  const NUM_RATE = 0.5;
  // 其他字体的像素宽度比例
  const OTHER_RATE = 0.5;

  const columns = vnode.child.columns.slice();
  // el-table通过colgroup标签设置html宽度
  const colgroup = table.querySelector('colgroup');
  const colDefs = [...colgroup.querySelectorAll('col')];
  // 忽略 设置了宽度 序号 多选框 的列
  // 判断gutter是否已存在
  const gutter = colgroup.querySelector(`col[name=gutter]`);
  const gutterx = colgroup.querySelector(`col[name=gutterx]`);
  let except = 0;
  if (gutter || gutterx) {
    // 删除gutter
    colDefs.pop();
  }
  // 若有序号 多选框则删除
  except = colDefs.length - columns.length;
  colDefs.splice(0, except);
  for (let i = columns.length - 1; i >= 0; i--) {
    if (columns[i].width) {
      colDefs.splice(i, 1);
      columns.splice(i, 1);
    }
  }

  // 设置每列宽度
  colDefs.forEach((col, index) => {
    // colgroup中 和 表头标签的class名相同 通过class寻找相同列
    const clsName = col.getAttribute('name');
    const cells = [
      ...table.querySelectorAll(`.el-table__body-wrapper td.${clsName}`),
      ...table.querySelectorAll(`th.${clsName}`),
    ];
    const widthList = cells.map((el) => {
      const cell = el.querySelector('.cell');
      if (cell) {
        let fontSize = parseInt(window.getComputedStyle(cell, null).fontSize, 10);
        fontSize = fontSize || 14;
        let width = 0;
        // 计算每个字符的宽度
        for (const str of cell.innerText) {
          if (CN.test(str)) {
            width += fontSize * CN_RATE;
          } else if (NUM.test(str)) {
            width += fontSize * NUM_RATE;
          } else {
            width += fontSize * OTHER_RATE;
          }
        }
        return Math.ceil(width);
      }
      return 0;
    });

    // 取一列中的最大宽度
    const max = Math.max(...widthList);
    if (max !== 0) {
      // 在表格数据中设置minWidth 防止尺寸变化重新计算原来的宽度
      // 20 + 2  20 是cell类的padding 2 是给予额外空间
      columns[index].minWidth = max + 22;
      table.querySelectorAll(`col[name=${clsName}]`).forEach((el) => {
        el.setAttribute('width', max + 22);
      });
    }
  });

  // 设置完后调用el-table方法更新布局
  vnode.child.doLayout();
  // tableRevise(table)
}
export default {
  componentUpdated(el, binding, vnode) {
    setTimeout(() => {
      adjustColumnWidth(el, vnode);
    }, 0);
  },
};
