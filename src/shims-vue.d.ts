/*
 * @Author: [shangze]
 * @Date: 2023-10-23 14:40:56
 * @LastEditors: [shangze]
 * @LastEditTime: 2023-10-24 11:42:32
 * @Description:
 */

import Vue from 'vue'
// 帮我配置一下这个文件
declare module "*.vue" {
  import { VueConstructor } from "vue";
  const component: VueConstructor;
  export default component;
}
declare module 'vue-router' {
  import { RouteConfig } from 'vue-router';

  export type RouterMode = 'hash' | 'history' | 'abstract';
  
  export interface RouterOptions {
    mode?: RouterMode;
    routes: RouteConfig[];
    base?: string;
    linkActiveClass?: string;
    linkExactActiveClass?: string;
    scrollBehavior?: (
      to: Route,
      from: Route,
      savedPosition: Position | void
    ) => PositionResult | Promise<PositionResult>;
  }

  export interface Position {
    x: number;
    y: number;
  }

  export interface PositionResult {
    selector?: string;
    offset?: Position | { x: number; y: number };
    behavior?: ScrollBehavior;
  }

  export interface Route {
    path: string;
    name?: string;
    hash?: string;
    query?: any;
    params?: any;
    fullPath?: string;
    matched?: RouteRecord[];
    redirectedFrom?: string;
    meta?: any;
  }

  export interface RouteRecord {
    path: string;
    component?: Component;
    name?: string;
    components?: Dictionary<Component>;
    redirect?: RedirectOption;
    alias?: string | string[];
    children?: RouteConfig[];
    beforeEnter?: NavigationGuard;
    meta?: any;
    props?: boolean | Object | RoutePropsFunction;
  }

  // 其他类型声明...

  export class VueRouter {
    constructor(options?: RouterOptions);
    beforeEach(guard: NavigationGuard): Function;
    afterEach(hook: (to: Route, from: Route) => any): Function;
    push(location: RawLocation): Promise<Route>;
    replace(location: RawLocation): Promise<Route>;
    go(n: number): void;
    back(): void;
    forward(): void;
    getMatchedComponents(to?: RawLocation | Route): Component[];
    resolve(to: RawLocation, current?: Route, append?: boolean): {
      location: Location;
      route: Route;
      href: string;
      // 其他属性...
    };
    addRoutes(routes: RouteConfig[]): void;
    onReady(callback: Function, errorCb?: Function): void;
    onError(callback: Function): void;
    beforeEach(guard: NavigationGuard): Function;
    afterEach(hook: (to: Route, from: Route) => any): Function;
  }

  export interface RedirectOption {
    path: string;
    query?: Dictionary<string>;
    hash?: string;
    params?: Dictionary<string>;
    fullPath?: string;
    name?: string;
  }

  export type NavigationGuard = (
    to: Route,
    from: Route,
    next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
  ) => any;

  export type RoutePropsFunction = (route: Route) => Object;

  // 其他类型声明...

  export function createRouter(options: RouterOptions): VueRouter;
}



// 其他的根据需要自己加
declare module 'vue-cropper'
declare module "vue-clipboard2"
declare module "lodash/debounce"
declare module "file-saver"
declare module "*.less"
declare module "ant-design-vue" {
  const Ant: any
  export default Ant
}

// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_PORT: string;
  VITE_APP_BASE_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


