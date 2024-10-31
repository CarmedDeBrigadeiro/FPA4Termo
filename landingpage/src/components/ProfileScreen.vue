<template>
    <div class="container-profile">
        <div class="container-user-info">
            <div class="image-section">
                <p class="profilePic">PROFILE PICTURE</p>
                <img src="profile-placeholder.png" alt="Profile Picture" class="profile-img" />
                <div class="form-group">
                    <section class="row">
                        <label for="profilePic" class="choosePhoto">
                            <img src="../assets/icons/add.svg" alt=""> Browse
                        </label>
                        <input type="file" id="profilePic" style="display: none;">
                        <button class="deletePhoto">
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

                <!-- Address Data Section -->
                <p class="address-data">ADDRESS DATA</p>
                <div class="row">
                    <div class="form-group">
                        <label for="postalCode">Postal Code (ZIP Code)</label>
                        <input type="text" id="postalCode" v-model="profile.postalCode"
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
                    <div class="form-group-inline">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" v-model="profile.city" placeholder="Enter city" />
                        </div>
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" id="state" v-model="profile.state" placeholder="Enter state" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="additionalInfo">Additional Information</label>
                        <input type="text" id="additionalInfo" v-model="profile.additionalInfo"
                            placeholder="Apartment/Suite" />
                    </div>
                </div>

                <!-- Security Section -->
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

                <button class="cancel">Cancel</button>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
                newPassword: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        submitForm() {
            console.log(this.profile);
            alert("Profile updated!");
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
    width: fit-content;
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
    width: 156px;
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
    width: 50%;
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
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
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

.row {
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3%;
    align-self: stretch;
}

.row>div {
    flex: 1 1 45%;
    /* Permite que os itens ocupem até 45% do espaço disponível */
    min-width: 200px;
    /* Define um mínimo para que não fiquem muito pequenos */
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
    /* 120% */
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
    /* 120% */
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

.cancel {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #9A9A9A;
}
</style>
