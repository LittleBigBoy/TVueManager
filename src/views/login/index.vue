<template>
  <div class="login-container">
    <el-form :model="loginForm" ref="loginForm" class="login-form" :rules="loginRules" autoComplete="off">
      <div class="title-container">
        <h3 class="title">{{$t('login.title')}}</h3>
        <lang-select class="set-language"></lang-select>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container-login">
          <svg-icon icon-class="user" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username"  :placeholder="$t('login.username')" autoComplete="on"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input name="password" :type="passwordType" v-model="loginForm.password" :placeholder="$t('login.password')" autoComplete="on"></el-input>
        <span class="svg-container" @click="showPwd">
          <svg-icon :icon-class="eyeIcon"></svg-icon>
        </span>
      </el-form-item>
      <div class="tips"><span >{{$t('login.forgetPwd')}}</span></div>
      <el-button class="" type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
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
            message: this.$t("validate.username")
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: this.$t("validate.password")
          }
        ]
      },
      passwordType: "password",
      eyeIcon: "eye",
      loading: false
    };
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = ""
        this.eyeIcon = "eye-open"
      } else {
        this.passwordType = "password"
        this.eyeIcon = "eye"
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
        } else {
          this.$message({
            message: this.$t("tips.loginErrorMessage"),
            type: "error"
          });
          return false;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 80%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>


<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    height: 20px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin: 0 5px;
        float: right;

      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
