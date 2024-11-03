<template>
  <div class="container">
    <div class="image-section">
      <img src="../assets/images/Card_3.png" alt="ASTRO A50 Wireless + Base Station" />
    </div>

    <div class="form-section">
      <h2 class="sign">Sign up</h2>
      <p class="sub">Sign up to listen to the best beats with GABINI Headset’s store!</p>

      <form @submit.prevent="handleSubmit"> <!-- Alinhando o método aqui -->
        <div class="form-group">
          <p class="personal">PERSONAL DATA</p>
          <label for="profilePic">Profile Picture</label>
          <input type="file" id="profilePic" />
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="form.firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="form.lastName" required />
        </div>
        <div class="form-group">
          <label for="userName">Username</label>
          <input type="text" id="userName" v-model="form.userName" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" v-model="form.phoneNumber" />
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" v-model="form.dob" />
        </div>
        <div class="form-group-inline">
          <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" v-model="form.gender">
              <option value="" disabled>Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="preferNot">Prefer not to say</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" v-model="form.cpf" @input="formatCPF" placeholder="000.000.000-00" />
          </div>
        </div>
        
        <div class="address-data">ADDRESS DATA</div>
        <div class="form-group">
          <label for="postalCode">Postal Code (ZIP Code)</label>
          <input type="text" id="postalCode" v-model="form.postalCode" />
        </div>
        <div class="form-group">
          <label for="street">Street</label>
          <input type="text" id="street" v-model="form.street" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        cpf: '',
        postalCode: '',
        street: '',
        password: '', 
        confirmPassword: ''
      },
      passwordError: '',
    };
  },
  methods: {
    validatePasswords() {
      if (this.form.password !== this.form.confirmPassword) {
        this.passwordError = "As senhas não coincidem.";
        return false;
      }
      this.passwordError = ''; 
      return true; 
    },
    async handleSubmit() {
      if (!this.validatePasswords()) {
        return; 
      }

      try {
        const response = await axios.post('http://localhost:5067/api/Auth/register', this.form);
        alert('Cadastro realizado com sucesso!');
        console.log(response.data);
      } catch (error) {
        alert('Erro ao cadastrar: ' + (error.response ? error.response.data.message : error.message));
        console.error(error);
      }
    }
  },
};

</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  font-family: Inter;
  color: #969696;
  margin-top: -50px;
}

.image-section {
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-section img {
  width: 650px;
  height: 850px;
  border-radius: 20px;
  padding-top: 25px;
  float: left;
  margin-right: 500px;
  position: sticky;
  top: 0;
  margin-top: -200px;

}

.image-section h2 {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.form-section {
  width: 50%;
  padding: 20px;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;

}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.sign {
  font-family: Inter;
  font-weight: 700;
  font-size: 40px !important;
  line-height: 44px;
  letter-spacing: -4%;
  align-items: center;
  text-align: left;
  color: #000000;
}

.sub {
  font-family: Inter;
  color: #969696;
}

.personal {
  color: #969696;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  position: relative;

}

.address-data {

  color: #969696;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  position: relative;
  align-self: stretch;
  margin-top: 20px;
}

.address-1 {
  color: #969696;
  text-align: left;
  font-family: "Inter-Bold", sans-serif;
  font-size: 18px;
  line-height: 150%;
  font-weight: 700;
  position: relative;
  align-self: stretch;

}

button {
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #444;
}

.form-group-inline {
  display: flex;
  gap: 15px;
}

.form-group-inline .form-group {
  flex: 1;
}

#addAddress button {
  display: flex;
  height: 54px;
  padding: 16px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid #000;
}



</style>
