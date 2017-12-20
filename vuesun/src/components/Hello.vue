<template>
  <div class="jumbotron">
    <h1 id="hh">任务追踪</h1>
    <div id="ha"></div>
    <el-button type="primary">主要按钮</el-button>
    <p>
      <strong id="he">
        <!--<a v-link="'/time-entries'">创建一个任务</a>-->
      </strong>
    </p>
  </div>
</template>

<script>
  import '../../static/jquery.js'
export default {
  name:'Hello',
  mounted(){//这里是组件加载完毕后自动运行的钩子
    this.slideFn();
  },
  methods:{
      slideFn(){
          $('#hh').click(function(){
              alert(1);
          });

      }
  }

}

</script>

<style lang="less" src="../less/hello.less">
/*@import "../css/hello.css";*/

</style>
