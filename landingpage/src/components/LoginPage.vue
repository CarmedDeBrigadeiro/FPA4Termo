<template>
  <div class="login-container">
    <div class="left-column">
      <img class="product-image" src="../assets/images/Card_2.png" alt="Headset HyperX"  />
    </div>

    <div class="right-column">
      <div class="login-box">
        <h1 class="sign">Sign in</h1>
        <p class="sign-text">Please login to continue to your account.</p>

        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>

          <button type="submit" class="login-button">Sign in</button>
        </form>

        <p class="register-text">
          Don't have an account? 
          <router-link to="/register">Register here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitLogin() {
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    }
  }
};
</script>

<style scoped>

.product-image{
    width: 860% !important; 
    height: 600px; 
    max-width: 600px; 
    border-radius: 20px;
}


.login-container {
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
}

.left-column {
  width: 50%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left-column .product-image {
  width: 300px;
  margin-bottom: 20px;
}

.left-column h2 {
  font-size: 24px;
  color: #333;
  text-align: center;
}

.right-column {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: #f4f4f4;
  padding: 40px;
  width: 400px;
  text-align: center;
}

.sign{
  font-family: Inter;
  font-weight: 700;
  font-size: 40px !important;
  line-height: 44px;
  letter-spacing: -4%;
  align-items: center;
  text-align: left;
}

.sign-text{
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #969696;
  font-family: Inter;
  text-align: left

}

.register-text{
  font-family: Inter;
}

.login-box h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.login-box p {
  font-size: 14px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #333;
}

.register-text {
  margin-top: 20px;
  font-size: 14px;
}

.register-text a {
  color: #007bff;
  text-decoration: none;
}
</style>
