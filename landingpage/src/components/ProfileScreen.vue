<template>

    <div class="navbar">
        <div class="navbar__logo">
            <img src="../assets/images/logo_g.png " alt="Logo">
        </div>
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">Sale</a>
            <a href="#">Bundle & Save</a>

            <div class="dropdown" @click="toggleDropdown">
                <a href="#" class="dropbtn">
                    Shop By Category
                    <img :src="arrowImg" alt="Dropdown arrow" class="arrow" />
                </a>
                <div v-if="isDropdownOpen" class="dropdown-content">
                    <a href="#">Category 1</a>
                    <a href="#">Category 2</a>
                    <a href="#">Category 3</a>
                </div>
            </div>

            <a href="#">Support</a>
        </div>

        <div class="nav-actions">
            <router-link to="/profile" class="sign-in-link">My Profile</router-link>
            <router-link to="/home" class="sign-up-link">Logout</router-link>
        </div>


    </div>

    <div class="container-profile">
        <div class="container-user-info">
            <div class="image-section">
                <p class="profilePic">PROFILE PICTURE</p>
                <img :src="profile.picture || 'profile-placeholder.png'" alt="Profile Picture" class="profile-img" />
                <div class="form-group">

                    <section style="display: flex; width: 200px; justify-content: space-between; gap: 15px;">
                        <label for="profilePic" class="choosePhoto">
                            <img src="../assets/icons/add.svg" alt=""> Browse
                        </label>
                        <input type="file" id="profilePic" @change="onFileChange" style="display: none;">
                        <button class="deletePhoto" @click="removeProfilePicture">
                            <img src="../assets/icons/delete.svg" alt="">
                        </button>
                    </section>

                </div>
            </div>
            <div class="name-username">
                <h1>{{ user.name }}</h1>
                <h2>@{{ user.lastName }}</h2>
            </div>
        </div>

        <div class="form-section">
            <form @submit.prevent="submitForm">
                <p class="personal">PERSONAL DATA</p>
                <div class="row">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" id="firstName" v-model="profile.firstName" placeholder="Enter first name" />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text" id="lastName" v-model="profile.lastName" placeholder="Enter last name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="profile.email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="phoneNumber">Phone Number</label>
                        <input type="text" id="phoneNumber" v-model="profile.phoneNumber"
                            placeholder="Enter phone number" />
                    </div>
                </div>

                <p class="address-data">ADDRESS DATA</p>
                <div class="row">
                    <div class="form-group">
                        <label for="postalCode">Postal Code (ZIP Code)</label>
                        <input type="text" id="postalCode" v-model="profile.postalCode" @blur="fetchAddressByPostalCode"
                            placeholder="Enter postal code" />
                    </div>
                    <div class="form-group">
                        <label for="street">Street</label>
                        <input type="text" id="street" v-model="profile.street" placeholder="Enter street" />
                    </div>
                    <div class="form-group">
                        <label for="neighborhood">Neighborhood</label>
                        <input type="text" id="neighborhood" v-model="profile.neighborhood"
                            placeholder="Enter neighborhood" />
                    </div>
                    <div class="form-group">
                        <label for="addressType">Type of Address</label>
                        <select id="addressType" v-model="profile.addressType">
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group">
                        <label for="city">City</label>
                        <input type="text" id="city" v-model="profile.city" placeholder="Enter city" />
                    </div>
                    <div class="form-group">
                        <label for="state">State</label>
                        <input type="text" id="state" v-model="profile.state" placeholder="Enter state" />
                    </div>
                    <div class="form-group">
                        <label for="number">Number</label>
                        <input type="text" id="number" v-model="profile.number" placeholder="Apartment/Suite" />
                    </div>
                    <div class="form-group">
                        <label for="additionalInfo">Additional Information</label>
                        <input type="text" id="additionalInfo" v-model="profile.additionalInfo"
                            placeholder="Additional information" />
                    </div>
                </div>

                <p class="address-data">SECURITY</p>
                <div class="row">
                    <div class="form-group-inline">
                        <div class="form-group">
                            <label for="newPassword">New Password</label>
                            <input type="password" id="newPassword" v-model="profile.newPassword"
                                placeholder="Enter new password" />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm New Password</label>
                            <input type="password" id="confirmPassword" v-model="profile.confirmPassword"
                                placeholder="Confirm new password" />
                        </div>
                    </div>
                </div>

                <div v-if="passwordMismatch" class="error-message">Passwords do not match.</div>


                <div class="row-2">
                    <button id="cancel" type="button" @click="cancelChanges">Cancel</button>
                    <button id="save" type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserService from '../services/apiService.js';


export default {
    data() {
        return {
            userId: 1, // User ID
            isDropdownOpen: false,
            arrowImg: require('@/assets/icons/seta.png'),
            arrowUp: require('@/assets/icons/seta.png'),
            user: {
                name: 'John',
                lastName: 'Doe'
            },
            profile: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                postalCode: '',
                street: '',
                neighborhood: '',
                addressType: '',
                city: '',
                state: '',
                additionalInfo: '',
                picture: null,
                newPassword: '',
                confirmPassword: ''
            },
            passwordMismatch: false
        };
    },

    async created() {
        await this.loadUserProfile();
    },

    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
            this.arrowImg = this.isDropdownOpen
                ? this.arrowUp
                : require('@/assets/icons/seta.png');
        },
        async loadUserProfile() {
            try {
                const userProfile = await UserService.getUser(this.userId);
                this.profile = { ...userProfile };
            } catch (error) {
                // alert(error.message || 'Error loading profile');

            }
        },

        async submitForm() {
            try {
                if (this.profile.newPassword !== this.profile.confirmPassword) {
                    this.passwordMismatch = true;
                    return;
                }
                this.passwordMismatch = false;

                const updatedProfile = await UserService.updateUser(this.userId, this.profile);
                this.user = { ...this.user, ...updatedProfile };
                // alert('Profile updated successfully!');
            } catch (error) {
                // alert(error.message || 'Error updating profile');
            }
        },

        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.profile.picture = URL.createObjectURL(file);
            }
        },

        removeProfilePicture() {
            this.profile.picture = null;
        },

        async fetchAddressByPostalCode() {
            const cep = this.profile.postalCode.replace(/\D/g, '');
            if (cep.length === 8) {
                try {
                    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = await response.json();
                    if (!data.erro) {
                        this.profile.street = data.logradouro;
                        this.profile.neighborhood = data.bairro;
                        this.profile.city = data.localidade;
                        this.profile.state = data.uf;
                    } else {
                        // alert('Postal code not found');
                    }
                } catch (error) {
                    // alert('Error fetching postal code');
                }
            }
        },

        async cancelChanges() {
            try {
                await this.loadUserProfile();
                // alert("Changes canceled and profile data reloaded.");
            } catch (error) {
                // alert(error.message || 'Error canceling changes');
            }
        }
    }
};
</script>



<style scoped>
.container-user-info {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
}

.choosePhoto {
    display: flex;
    padding: 7px;
    align-items: center;
    gap: 13px;
    border-radius: 5px;
    width: 300px;
    background: #020617;
    color: #FFF;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
}

.deletePhoto {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    background: transparent !important;
    width: fit-content;
}

.image-section {
    display: flex;
    width: fit-content;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}

.profile-img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: #e0e0e0;
}

.form-section {
    width: 100%;
    padding: 20px;
}

.sign {
    font-family: Inter;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    color: #000;
    margin-bottom: 20px;
}

.personal,
.address-data {
    color: #969696;
    font-family: "Inter-Bold", sans-serif;
    font-size: 18px;
    line-height: 150%;
    font-weight: 700;
    margin-top: 20px;
}

.form-group {
    display: flex;
    /* Torna cada grupo de formulários flexível */
    flex-direction: column;
    /* Coloca label e input um abaixo do outro */
    justify-content: space-between;
    /* Distribui o espaço igualmente */
    margin-bottom: 15px;
}


label {
    color: #969696;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}

input,
select {
    width: 100%;
    /* Garante que todos os inputs e selects ocupem 100% da largura de seus containers */
}

button:hover {
    background-color: #444;
}

.form-group-inline {
    display: flex;
    flex: 1;
    /* Faz com que todos os itens ocupem a mesma largura */
    gap: 15px;
}


.form-group-inline .form-group {
    flex: 1;
}

.row {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
}

.row>div {
    flex: 0 0 23%;
    max-width: 23%;
    min-width: 200px;
    box-sizing: border-box;
}


input {
    display: flex;
    width: 380px;
    padding: 16px;
    align-items: center;
    gap: 2px;
    border-radius: 10px;
    border: 1.5px solid #D9D9D9;
}

input:hover {
    border-radius: 10px;
    border: 1.5px solid #367AFF;
}


h1 {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.2px;
    text-transform: uppercase;
}

h2 {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
}

.container-profile {
    display: flex;
    width: 1700px;
    flex-direction: column;
    align-items: flex-start;
    gap: 27px;
}

#addressType {
    display: flex;
    width: 420px;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1.5px solid #D9D9D9;
}

.column {
    display: flex;
    flex-direction: column;
}

label {
    color: #9A9A9A;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

p {
    color: #969696;
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
}

#cancel {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #9A9A9A;
    background: #fff;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.16px;
    text-transform: capitalize;
}

#cancel:hover {
    background-color: #969696;
    cursor: pointer;


}

#save:hover {
    cursor: pointer;
    background-color: #969696;
}

#save {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #FFF;
    background: #000;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    /* 150% */
    letter-spacing: -0.16px;
}

.row-2 {
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;
    gap: 10px;

}


.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    cursor: pointer;
    position: relative;
    padding: 8px 16px;
    display: flex;
    align-items: center;
}

img.arrow {
    width: 13px !important;
    height: 13px !important;
    margin-left: 2px !important;
}

.dropdown-content {
    display: none;
    position: absolute;
    padding: 12px 16px;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 1;
    min-width: 160px;
}

.dropdown-content a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown .dropdown-content {
    display: block;
}

.navbar img {
    width: 135px;
    height: 26px;
    flex-shrink: 0;
    margin-left: 50px;
}

.navbar .nav-links {
    color: var(--Black-black-500, #000);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.14px;
    text-transform: uppercase;
}

.navbar .nav-links a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    padding: 10px;
}


.navbar .nav-actions {
    color: var(--Black-black-500, #000);
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.14px;
    display: flex;
    text-transform: uppercase;
    text-align: none;
}

.navbar .nav-actions a {
    color: var(--Black-black-500, #000);
    text-decoration: none;
    padding: 10px 20px;
}
</style>
