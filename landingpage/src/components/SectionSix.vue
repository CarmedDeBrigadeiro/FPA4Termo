<template>
    <div class="testimonial-section">
        <h2 class="testimonial"> TESTIMONIALS</h2>
        <p class="voices">Voices of Satisfaction: Discover What Our Clients Have to Say</p>

        <div class="row">
            <div class="col">
                <div class="testimonial-box">
                    <div class="star">
                    <img src="../assets/icons/star.png" alt="">
                </div>
                <p class="text">
                I absolutely love this coffee maker! I use it every morning. Cold coffee is my favorite and this little machine makes great cold coffee. It is strong and tasty. I regular coffee cup or a larger stainless steel cup will work.
                </p>
                <div class="imagem">
                    <img src="../assets/images/foto2.png">
                </div>
                <div class="name">Marlina Jole</div>
                <div class="name2">CEO, Coffin</div>
                </div>
            </div>
            

            <div class="col">
                <div class="testimonial-box">
                    <div class="star">
                    <img src="../assets/icons/star.png" alt="">
                </div>
                <p class="text">
                I love the slim design of this Keurig. It works well except for the cold coffee. It states it does both hot and cold but I haven't found that to be accurate. The hot is perfect but it doesn't produce the cold coffee.
                </p>
                <div class="imagem">
                    <img src="../assets/images/foto1.png">
                </div>
                <div class="name">Jhonatan Albert</div>
                <div class="name2">CEO, Samsung</div>
                </div>
            </div>
            <div class="col">
                <div class="testimonial-box">
                    <div class="star">
                    <img src="../assets/icons/star.png" alt="">
                </div>
                <p class="text">
                Nothing wrong with the maker but seller had it "On sale"truns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99. And is currently on sale for 64.99
                </p>
                <div class="imagem">
                    <img src="../assets/images/foto3.png">
                </div>
                <div class="name">Stevano Albert</div>
                <div class="name2">CEO, Mayura</div>
                </div>
            </div>
            
        <div class="arrow-navigation">
        <button class="arrow-left" @click="prevSlide"> 
            <img class="setas" src="../assets/icons/Icon (1).png" alt="Previous">
        </button>
        <button class="arrow-right"  @click="nextSlide">
            <img  src="../assets/icons/Icon (2).png" alt="Next">
        </button>
        </div>
        
        </div>
    </div>


</template>

<script>

export default {
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
    },
  },
};


</script>

<style>

.testimonial-section{
    background: #f3f5f9;
    border-radius: 30px;
    position: relative;
    max-width: 87.5rem; 
    min-height: 734px;
    margin: 0 auto;  
}

.testimonial{
    color: #000;
    text-align: center;
    /* subtitle 1 */
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 122.222% */
    letter-spacing: -1.44px;
        
}

.voices{
    color: var(--Base-60, #767A85);
    text-align: center;
    /* Body 2 */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.18px;
}

.star{
    text-align: center;
}

.testimonials{
    text-align: center !important;
    position: relative;
    width: 50px;
    height: 50px;
    background-color: var(--neutral-10);
    border-radius: 50px;
    overflow: hidden;
    border: 2px ;

}

.imagem{
    text-align: center;
    position: relative;
    height: 50px;
    background-color: var(--neutral-10);
    overflow: hidden;
    border: 20px;
}


.text{
    color: var(--Base-100, #1F2026);
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;

}

.name{
    color: #0A102F;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
}

.name2{
    color: var(--Neutral-60, #878787);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
}

.row{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.col{
    flex: 33.33%;
    max-width: 33.33%;
    box-sizing: border-box;
    padding: 15px;

}

.testimonial-box{
    background-color:#ffff;
    padding: 30px;
    border-radius: 5%;
}

.testimonial-box .imagem{
    width: 50px;
    height: 50px;
    text-align: center !important;
    border-radius: 50%;
    margin-left: 135px;
}



.arrow-navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    padding: 8px 8px 120px 8px;
}

.arrow-left {
    display: flex;
padding: 16px;
align-items: flex-start;
gap: 8px;
border-radius: 100px;
border: 1px solid var(--White-white-700, #B5B5B5);

}

.arrow-right{
    border: none;
    display: flex;
padding: 16px;
align-items: flex-start;
gap: 8px;
border-radius: 100px;
background: var(--Black-black-500, #000);
}

.arrow .setas{
    width: 24px;
    height: 20px;
}

</style>