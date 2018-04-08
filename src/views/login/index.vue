<template>
  <div class="login-container">
    <el-form :model="loginForm" ref="loginForm" class="login-form" :rules="loginRules" autoComplete="off">
      <div class="titel-container">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container-login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username"  placeholder="$t('login.username')"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="passwordType" v-model="loginForm.password" placeholder="$t('login.password')"></el-input>
        <span class="svg-container" @click="showPwd">
          <svg-icon icon-class="eye"></svg-icon>
        </span>
      </el-form-item>

      <el-button class="" type="primary" sytle="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
    </el-form>
  </div>
  
</template>

<script>
import LangSelect from "@/components/LangSelect";

export default {
  components: { LangSelect },
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "Please enter the correct user name!"
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "Please enter your password!"
          }
        ]
      },
      passwordType: "password",
      loading: false
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    }
  }
}
</script>
