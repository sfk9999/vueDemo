<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划表
        </a>
        <ul class="nav navbar-nav">
          <!--<li><a v-link="'/home'">首页</a></li>-->
          <li><router-link to="/hello">123</router-link></li>
          <li><router-link to="/helloword">456</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">

      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

  import Hello from './components/Hello.vue'
  import HelloWord from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    Hello,
    HelloWord
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
