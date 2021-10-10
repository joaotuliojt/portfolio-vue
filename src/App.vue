<template>
  <div class="loading" v-if="loading">
    <atom-spinner :animation-duration="1000" :size="180" :color="'#8257e6'" />
    <p>Carregando...</p>
  </div>
  <header-component></header-component>
  <main>
    <home></home>
    <about> </about>
    <skills> </skills>
    <portfolio></portfolio>
    <contato> </contato>
    <footer-component> </footer-component>
  </main>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Contato from "./components/Contato.vue";
import FooterComponent from "./components/Footer.vue";
import { AtomSpinner } from "epic-spinners";
export default {
  components: {
    HeaderComponent,
    Home,
    About,
    Skills,
    Portfolio,
    Contato,
    FooterComponent,
    AtomSpinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    const sections = document.querySelectorAll("main section");
    //this.setMargin();
    window.addEventListener("scroll", () => {
      this.activateMenuAtCurrentSection(sections);
    });
    this.aosInit();
    this.setFalseLoading();
  },
  methods: {
    setMargin() {
      let home = document.querySelector("section#home");
      let headerHeight = document.querySelector("header").clientHeight;
      home.style += `margin-top: ${headerHeight}`;
    },
    aosInit() {
      let script = document.createElement("script");
      script.innerHTML = `AOS.init();`;
      document.head.appendChild(script);
    },
    setFalseLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    activateMenuAtCurrentSection(sections) {
      const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
      const header = document.querySelector("header");
      //console.log(sections);
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            .classList.add("is-active");

          if (section.getAttribute("id") != "home") {
            header.classList.add("fixed");
          } else {
            header.classList.remove("fixed");
          }
        } else {
          document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            .classList.remove("is-active");
        }
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
html {
  font-size: 62.5%;
  --purple: #8257e6;
  --black: #170f11;
  --white: #fbfbff;
  --blue: #20a4f3;
  --green: #26c485;
  scroll-behavior: smooth;
}
body::-webkit-scrollbar {
  width: 0.5rem;
}
body::-webkit-scrollbar-track {
  background: var(--black);
}
body::-webkit-scrollbar-thumb {
  background: var(--green);
  border-radius: 0.6rem;
}
.loading {
  background: var(--white);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  width: 100%;
  height: 100%;
  transition: 0.25s;
  flex-direction: column;
}
#app {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
}
.btn {
  color: var(--white);
  background: var(--green);
  text-transform: uppercase;
  font-weight: 600;
}
section {
  min-height: 100vh;
  padding: 2rem 3rem;
  padding-bottom: 8rem;
}
.title-section {
  text-align: center;
  font-size: 3.6rem;
  margin-top: 4rem;
  margin-bottom: 8rem;
}
.title-section h1 {
  display: inline-block;
  border-bottom: 2px solid var(--purple);
}
@media (max-width: 650px) {
  .title-section h1 {
    font-size: 4rem;
  }
  .title-section {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
}
</style>
