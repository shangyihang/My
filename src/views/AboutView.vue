<!--
 * @Author: [shangze]
 * @Date: 2023-09-22 09:30:31
 * @LastEditors: [shangze]
 * @LastEditTime: 2023-11-03 16:35:34
 * @Description: 
-->
<template>
  <div class="about">
    <h1>This is an about page1</h1>
    <h1>This is an about page2</h1>
    <h1>This is an about page3</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HomeView extends Vue {
  data() {
    return {
      message: 'Hello Vue.js!',
    };
  }
}
</script>
