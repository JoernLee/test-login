<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入标题" autocomplete="off"
                   class="layui-input" v-model="name">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required lay-verify="required" placeholder="请输入密码" autocomplete="off"
                   class="layui-input" v-model="password">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required lay-verify="required" placeholder="请输入验证码" autocomplete="off"
                   class="layui-input" v-model="code">
          </div>
          <div
              class="layui-form-mid"
              v-html="svg"
              @click="getCaptcha()"
          ></div>
        </div>
        <button type="button" class="layui-btn" @click="checkForm()">点击登录</button>
        <a href="" class="imooc-link">忘记密码</a>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: []
    }
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      axios.get('http://localhost:3000/getCaptcha').then(res => {
        console.log(res);
        if (res.status === 200) {
          let obj = res.data;
          if (obj.code === 200) {
            this.svg = obj.data;
          }
        }
      });
    },
    checkForm() {
      this.errorMsg = [];
      // 还可以加入一些regEx的校验，例如针对邮箱等等
      if (!this.name) {
        this.errorMsg.push('登录名为空!');
      }
      if (!this.password) {
        this.errorMsg.push('密码为空!');
      }
      if (!this.code) {
        this.errorMsg.push('验证码为空!');
      }
      console.error(this.errorMsg);
    },
  }
}

</script>

<style lang="scss" scoped>
#app {
  background: #f2f2f2;
}

.layui-container {
  background: #fff;
}

input {
  width: 190px
}

.imooc-link {
  margin-left: 10px;

  &:hover {
    color: #009688;
  }
}

</style>
