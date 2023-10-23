/**
 * @Author: hankaibo hankaibo@thtf.com.cn
 * @Date: 2023-02-11 11:25:53
 * @LastEditors: hankaibo hankaibo@thtf.com.cn
 * @LastEditTime: 2023-02-11 11:26:42
 * @Description: v-hasSecret 密网处理
 * Copyright (c) 2022 thtf
 */

export default {
  inserted(el) {
    const isSecret = process.env.VUE_APP_SECRET;
    if (isSecret !== 'true') {
      el.parentNode?.removeChild(el);
    }
  },
};
