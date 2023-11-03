<!--
 * @Author: [shangze]
 * @Date: 2023-10-23 18:10:12
 * @LastEditors: [shangze]
 * @LastEditTime: 2023-11-03 11:29:49
 * @Description: 
-->
<template>
  <div id="app">
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/about"> About </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
