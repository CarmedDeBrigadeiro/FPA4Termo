<template>
    <div class="container">
        <div class="content">
            <div class="mainTitle">
                <img src="../assets/images/logo_gabini.png" alt="Footer Logo">
            </div>
            <div class="menuGrid">
                <div class="left-side">
                    <div class="menuColumn">
                        <h2>Menu</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Product</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div class="resourcesColumn">
                        <h2>Resources</h2>
                        <ul>
                            <li>Forum</li>
                            <li>Support</li>
                            <li>Partners</li>
                            <li>Events</li>
                        </ul>
                    </div>
                    <div class="myAcountColumn">
                        <h2>My Acount</h2>
                        <ul>
                            <li>My Orders</li>
                            <li>Faq</li>
                            <li>Sales conditions</li>
                            <li>Contact</li>
                            <li>Legal Mentions</li>
                        </ul>
                    </div>     
                </div>
                <div class="right-side">
                    <aside class="emailInput">
                        <h2>Subscribe to newsletter</h2>
                        <p>Sign up for exclusive offers, original<br>stories, events and more</p>
                        <div class="inputWrapper">
                            <input type="email" placeholder="Email Address">
                            <img src="..\assets\icons\enterButton.png" alt="Submit Button" class="submitIcon" required>
                        </div>
                    </aside>
                </div>

            </div>
           
            <section class="footer">
                <div class="rectangleBar">
                    <ul>
                        <li>
                            <p>© 2024 Gabini Headset Store. - All Rights Reserved</p>
                        </li>
                        <li>PRODUCTS</li>
                        <li>PRIVACY POLICY</li>
                        <li>CUSTOMER SERVICES</li>
                        <li class="socialMedia"><img src="..\assets\icons\socialmedia.png" alt=""></li>
                    </ul>
                </div>
                <div class="secondLogo">
                    <img src="../assets/images/Logo_gabini_cinza.png" alt="Second Footer Logo">
                </div>
            </section>
        </div>
    </div>
</template>

<script></script>

<style scoped>

/* Estilos principais do container */
.container {
    border-radius: 30px;
    background-color: black;
    width: 100%;
    max-width: 87.5rem; 
    min-height: 734px;
    height: auto;
    margin: 0 auto;
    position: relative;
}

.content {
    padding: 50px;
}

/* Logo principal */
.mainTitle {
    position: absolute;
    width: 204px;
    height: 39px;
    left: 80px;
    top: 80px;
}
/* Grid de menus */
.menuGrid {
    display: flex;
    color: white;
    font-family: 'Inter', sans-serif;
    justify-content: space-between; 
    margin-left: 10px;
}

.left-side {
    display: inline-flex;
    align-items: flex-start;
    gap: 56px;
}

.left-side h2 {
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 20px;
    align-items: flex-start;
}

.left-side ul {
    padding: 0;
    margin: 0;
}
.left-side ul li  {
    list-style-type: none;
    color: #B0B0B0;
    font-size: 14px;
    margin-bottom: 12px;
    
}

.menuColumn, .resourcesColumn, .myAcountColumn {
    flex: 1; 
    min-width: 150px; 
    margin-right: 40px
}

/* Input do newsletter */

.right-side p {
    color: #878787;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    text-align: justify;
}
.emailInput {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}

.inputWrapper {
    position: relative;
    max-width: 100%; 
    width: 399px;
}

.emailInput input[type="email"] {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    background: #4B4B4B;
    color: white;
    padding: 0 60px 0 30px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.emailInput input[type="email"]::placeholder {
    color: #E0E0E0;
}

.submitIcon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    cursor: pointer;
}

/* Segunda logo no footer */
.secondLogo {
    margin-top: 30px;
    bottom: 0;
    left: 0;
    max-width: 100%;
    width: 1233px;
}

.footer {
    position: relative;
}

/* Barra inferior do footer */
.rectangleBar {
    background-color: black;
    color: #B0B0B0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    text-align: center;
    width: 100%;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
}

.rectangleBar ul {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%; 
    gap: 30px;
}


.rectangleBar ul li {
    text-align: center;
    
}   



.rectangleBar ul li:first-child {
    margin-right: auto;
}

.rectangleBar ul li:last-child {
    margin-left: auto;
}

.rectangleBar ul li:nth-child(2),
.rectangleBar ul li:nth-child(3),
.rectangleBar ul li:nth-child(4) {
    text-decoration: underline;
    font-weight: bold;
}

.socialMedia {
    margin-left: auto; 
    display: inline-flex;
    gap: 10px;
}


@media (max-width: 768px) {
    .menuGrid {
        flex-direction: column;
        align-items: center;
    }

    .footerItemsGrid {
        flex-direction: column;
        gap: 30px;
    }

    .rectangleBar ul {
        flex-direction: column;
        gap: 15px;
    }
}


</style>
