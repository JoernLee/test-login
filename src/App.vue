<template>
  <div id="app">
    <joern-header/>
    <router-view></router-view>
    <joern-footer/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'app',
  components: {
    'joern-header': Header,
    'joern-footer': Footer
  },
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
</style>
