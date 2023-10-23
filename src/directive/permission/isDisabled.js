/*
 * @Author: hankaibo hankaibo@thtf.com.cn
 * @Date: 2022-11-01 19:25:11
 * @LastEditors: hankaibo hankaibo@thtf.com.cn
 * @LastEditTime: 2023-02-23 13:43:53
 * @Description:
 */
/**
 * v-isDisabled 操作权限处理，当没有相应权限时，禁用其状态
 * Copyright (c) 2022 thtf
 */

import store from '@/store';

export default {
  inserted(el, binding) {
    const { value } = binding;
    const allPermission = '*:*:*';
    const permissions = store.getters && store.getters.permissions;

    if (value && value instanceof Array && value.length > 0) {
      const permissionFlag = value;

      const hasPermissions = permissions.some((permission) => {
        return allPermission === permission || permissionFlag.includes(permission);
      });

      if (!hasPermissions) {
        el.style.opacity = 0.6;
        el.style.pointerEvents = 'none';
      }
    } else {
      throw new Error('请设置操作权限标签值');
    }
  },
};
