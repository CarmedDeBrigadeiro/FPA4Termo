<template>
  <div class="promo-container">
    <div class="promo-content">
      <div class="promo-text">
        <h1>Save 20% or more on Headset</h1>
        <p>Enjoy for a limited time</p>
      </div>
      <div class="timer">
        <div class="time-section">
          <span id="hours">12</span>
          <p>HOURS</p>
        </div>
        <div class="time-section">
          <span id="minutes">25</span>
          <p>MINUTES</p>
        </div>
        <div class="time-section">
          <span id="seconds">45</span>
          <p>SECONDS</p>
        </div>
      </div>
      <button class="shop-now">
        SHOP NOW
        <div class="button_icon">
          <img src="../assets/icons/Vector.png" alt="Seta" />
        </div>
      </button>
      <p class="details">Ends 18/08. Restrictions apply. See details</p>
    </div>
    <div class="promo-image">
      <svg class="background-svg" xmlns="http://www.w3.org/2000/svg" width="701" height="309" viewBox="0 0 701 309" fill="none">
        <g style="mix-blend-mode:multiply" filter="url(#filter0_f_1249_751)">
          <path d="M646.905 100L100 125.524L128.064 280L753 239.852L646.905 100Z" fill="#709CB2" fill-opacity="0.66"/>
        </g>
        <defs>
          <filter id="filter0_f_1249_751" x="0" y="0" width="853" height="380" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_1249_751"/>
          </filter>
        </defs>
      </svg>
      <img src="../assets/images/blueHeadset.png" alt="Headset" />
    </div>
  </div>
</template> 

<style scoped>
body {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.promo-container {
  position: relative;
  font-family: Inter;
  width: 1320px;
  height: 645px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  border-radius: 30px;
  border: 1px solid #000;
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #FFF;
}

.promo-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 50%;
  gap: 20px;
}

.promo-text h1, .promo-text p, .timer, .details, .shop-now {
  margin-left: 80px;
}

.promo-text h1 {
  color: #FFF;
  font-size: 80px;
  font-weight: 600;
  line-height: 80px;
  letter-spacing: -3.2px;
  margin-top: 53px;
}

.promo-text p, .details {
  font-weight: 400;
  font-size: 1.5em;
  color: #FFF;
}

.timer {
  display: flex;
  gap: 68.51px;
  align-items: center;
}

.time-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-section span {
  font-size: 127.257px;
}

.time-section p {
  font-size: 24px;
  color: #FFF;
  margin-top: -15px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.shop-now {
  width: 179px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFF;
  color: #000;
  border: 2px solid #E2E2E2;
  padding: 8px 22px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
}

.shop-now:hover {
  background-color: #548CAD;
  color: #000;
}

.button_icon {
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  transition: background-color 0.3s;
}

.button_icon img {
  width: 15px;
  height: 15px;
}

.shop-now:hover .button_icon {
  background-color: #FFF;
}

.promo-image {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 65px;
}

.promo-image img {
  width: 490px;
  height: 509px;
  position: relative;
  z-index: 2;
}

.background-svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-42.5%, -1);
  z-index: 1;
  width: 701px;
  height: 309px;
  pointer-events: none;
}

.numbers {
  position: absolute;
  animation: scroll 1s infinite linear;
}

.numbers div {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}


@keyframes scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-160px); }
}

@media screen and (max-width: 1024px) {
  .promo-container {
    flex-direction: column;
    text-align: center;
    height: auto;
  }

  .promo-content {
    max-width: 80%;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
  }

  .promo-text h1 {
    font-size: 48px;
    line-height: 52px;
    margin-left: 0;
  }

  .promo-text p, .details, .timer {
    margin-left: 0;
  }

  .timer {
    gap: 40px;
  }

  .time-section span {
    font-size: 80px;
  }

  .promo-image img {
    width: 400px;
    height: auto;
  }

  .background-svg {
    width: 100%; 
    max-width: 450px;
  }

  .shop-now {
    max-width: 150px;
    height: 45px;
    font-size: 12px;
    align-items: center;
    margin-left: 0;
  }

  .details {
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .promo-container {
    padding: 30px;
  }

  .promo-text h1 {
    font-size: 36px;
    line-height: 40px;
  }

  .timer {
    gap: 20px;
  }

  .time-section span {
    font-size: 70px;
  }

  .promo-image img {
    width: 50%;
  }

  .background-svg {
    max-width: 350px;
  }

  .shop-now {
    max-width: 140px;
    height: 40px;
    font-size: 11px;
  }

  .details {
    font-size: 10px;
  }
}

@media screen and (max-width: 480px) {
  .promo-container {
    padding: 20px;
  }

  .promo-text h1 {
    font-size: 28px;
  }

  .promo-text p {
    font-size: 1.2em;
  }

  .time-section span {
    font-size: 55px;
  }

  .promo-image img {
    width: 40%;
  }

  .background-svg {
    max-width: 280px;
  }

  .shop-now {
    max-width: 120px;
    height: 35px;
    font-size: 10px;
  }

  .details {
    font-size: 9px;
  }
}

@media screen and (max-width: 375px) {
  .promo-container {
    padding: 15px;
  }

  .promo-text h1 {
    font-size: 24px;
  }

  .timer {
    gap: 10px;
  }

  .time-section span {
    font-size: 45px;
  }

  .promo-image img {
    width: 35%;
  }

  .background-svg {
    max-width: 220px;
  }

  .shop-now {
    max-width: 100px;
    height: 30px;
    font-size: 8px;
  }

  .details {
    font-size: 8px;
  }
}
</style>