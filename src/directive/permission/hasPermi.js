/*
 * @Author: Yueenfan
 * @Date: 2022-07-11 20:10:56
 * @LastEditors: tanshaobo tanshaobo@thtf.com.ccn
 * @LastEditTime: 2023-08-23 13:46:02
 * @Description:
 */
/**
 * v-hasPermi 操作权限处理
 * Copyright (c) 2022 thtf
 */

import store from '@/store';

export default {
  inserted(el, binding) {
    const { value } = binding;
    if (value === undefined) {
      return;
    }
    const allPermission = '*:*:*';
    const permissions = store.getters && store.getters.permissions;
    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;
      const hasPermissions =
        permissions.some((permission) => {
          return allPermission === permission || permissionFlag.includes(permission);
        }) || permissionFlag.includes(allPermission);

      if (!hasPermissions) {
        el.parentNode?.removeChild(el);
      }
    } else {
      throw new Error('请设置操作权限标签值');
    }
  },
};
