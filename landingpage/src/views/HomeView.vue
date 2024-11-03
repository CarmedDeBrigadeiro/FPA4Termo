<template>
    <div>
      <div class="container">
        <NavBar />  
      <HeroSection />
      <SectionTwo />
      <SectionTree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <FooterSection />

     </div>
    </div>
  </template>


<script>
import SectionTwo from '../components/SectionTwo.vue'
import SectionTree from '../components/SectionTree.vue'
import SectionFour from '../components/SectionFour.vue'
import HeroSection from '../components/HeroSection.vue'
import FooterSection from '../components/FooterSection.vue'
import NavBar from '../components/NavBar.vue'
import SectionSix from '../components/SectionSix.vue'
import SectionFive from '../components/SectionFive.vue'



export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    SectionTwo,
    SectionTree,
    SectionFour,
    SectionFive,
    SectionSix,
    FooterSection
  }
}
</script>

<style>
body {
  background-color: #fff;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}



</style>
  