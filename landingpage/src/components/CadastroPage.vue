<template>
  <div class="container">
    <div class="image-section">
      <img src="../assets/images/Card_3.png" alt="ASTRO A50 Wireless + Base Station" />
    </div>
    <div class="form-section">
      <h2 class="sign">Sign up</h2>
      <p class="sub">Sign up to listen to the best beats with GABINI Headset’s store!</p>
      <form @submit.prevent="handleSubmit">
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
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
          <span v-if="passwordError" style="color: red;">{{ passwordError }}</span>
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
        <div v-for="(address, index) in form.addresses" :key="index" class="address-form">
          <h2>Address Data</h2>
          <div class="form-group">
            <label for="postalCode">Postal Code (ZIP Code)</label>
            <input type="text" v-model="address.postalCode" @blur="fetchAddressByPostalCode(address)" />
          </div>
          <div class="form-group">
            <label for="street">Street</label>
            <input type="text" v-model="address.street" />
          </div>
          <div class="form-group">
            <label for="neighborhood">Neighborhood</label>
            <input type="text" v-model="address.neighborhood" placeholder="Enter neighborhood" />
          </div>
          <div class="form-group">
            <label for="addressType">Type of Address</label>
            <select v-model="address.addressType">
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" v-model="address.city" placeholder="Enter city" />
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input type="text" v-model="address.state" placeholder="Enter state" />
          </div>
          <div class="form-group">
            <label for="number">Number</label>
            <input type="text" v-model="address.number" placeholder="Apartment/Suite" />
          </div>
          <div class="form-group">
            <label for="additionalInfo">Additional Information</label>
            <input type="text" v-model="address.additionalInfo" placeholder="Additional information" />
          </div>
          <button type="button" @click="removeAddress(index)">Remove Address</button>
        </div>
        <button type="button" @click="addAddress">Add Another Address</button>
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
        password: '',
        confirmPassword: '',
        addresses: [
          {
            postalCode: '',
            street: '',
            neighborhood: '',
            addressType: 'residential',
            city: '',
            state: '',
            number: '',
            additionalInfo: ''
          }
        ]
      },
      passwordError: '',
      profilePic: null
    };
  },
  methods: {
    // Valida se as senhas são iguais
    validatePasswords() {
      if (this.form.password !== this.form.confirmPassword) {
        this.passwordError = 'As senhas não coincidem.';
        return false;
      }
      this.passwordError = ''; 
      return true; 
    },

    // Formata o CPF para o padrão 'xxx.xxx.xxx-xx'
    formatCPF() {
      let value = this.form.cpf.replace(/\D/g, ''); 
      if (value.length <= 3) {
        value = value.replace(/(\d{3})(\d{1,})/, '$1.$2');
      } else if (value.length <= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
      } else if (value.length <= 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
      }
      this.form.cpf = value; 
    },

    // Valida o CPF
    validateCPF() {
      const cpf = this.form.cpf.replace(/\D/g, '');
      if (cpf.length !== 11) {
        alert('CPF inválido!'); 
        return false;
      }
      return true;
    },

    // Busca o endereço a partir do código postal (CEP)
    async fetchAddressByPostalCode(address) {
      const cep = address.postalCode.replace(/\D/g, ''); 
      if (cep.length === 8) {  
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.data.erro) {
            address.street = response.data.logradouro;
            address.neighborhood = response.data.bairro;
            address.city = response.data.localidade;
            address.state = response.data.uf;
          } else {
            alert('Código postal não encontrado.');
          }
        } catch (error) {
          alert('Erro ao buscar o código postal.');
        }
      } else {
        alert('CEP inválido!');
      }
    },

    // Adiciona um novo endereço
    addAddress() {
      this.form.addresses.push({
        postalCode: '',
        street: '',
        neighborhood: '',
        addressType: 'residential',
        city: '',
        state: '',
        number: '',
        additionalInfo: ''
      });
    },

    // Remove um endereço
    removeAddress(index) {
      this.form.addresses.splice(index, 1);
    },

    // Envia os dados para o backend ao tentar registrar o usuário
    async handleSubmit() {
      if (!this.validatePasswords()) {
        return; 
      }
      if (!this.validateCPF()) {
        return;
      }

      const userData = {
        iD_Usuario: 0,
        nome: this.form.firstName,
        sobrenome: this.form.lastName,
        username: this.form.userName,
        email: this.form.email,
        senha: this.form.password,
        data_Registro: new Date().toISOString(),
        telefone: this.form.phoneNumber,
        genero: this.form.gender,
        cpf: this.form.cpf.replace(/\D/g, ''), // Envia apenas os números do CPF
        fotoUrl: this.profilePic ? await this.uploadProfilePic() : '',
        enderecos: this.form.addresses.map(address => ({
          ID_Endereco: 0,
          tipo_Endereco: address.addressType,
          rua: address.street,
          numero: address.number,
          complemento: address.additionalInfo,
          bairro: address.neighborhood,
          cidade: address.city,
          estado: address.state,
          cep: address.postalCode.replace(/\D/g, ''), // Envia apenas os números do CEP
          ID_Usuario: 0
        }))
      };
      
      try {
        const apiUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:5067/api';
        const response = await axios.post(`${apiUrl}/Auth/register`, userData);

        if (response.data && response.data.token) {
          localStorage.setItem('authToken', response.data.token); 
          this.$router.push('/'); 
          alert('Cadastro realizado com sucesso!');
        } else {
          alert('Cadastro realizado.');
        }
      } catch (error) {
        console.error('Erro de requisição:', error.response ? error.response.data : error.message);
        alert('Erro ao cadastrar: ' + (error.response ? error.response.data.message : error.message));
      }
    },

    // Lida com o upload da foto de perfil
    handleProfilePic(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePic = file;
      }
    },

    // Envia a foto de perfil para o backend (se necessário)
    async uploadProfilePic() {
      const formData = new FormData();
      formData.append('file', this.profilePic);
      try {
        const response = await axios.post('http://localhost:5067/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response.data.fileUrl; // A URL da imagem salva no servidor
      } catch (error) {
        console.error('Erro ao fazer upload da foto de perfil', error);
        return '';
      }
    }
  }
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
