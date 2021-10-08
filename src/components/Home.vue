<template>
  <section id="home">
    <vue-particles
      color="#fbfbff"
      linesColor="#26c485"
      :particleOpacity="0.2"
      :hoverEffect="true"
      :particlesNumber="80"
      shapeType="triangle"
    ></vue-particles>
    <div class="home__title">
      <h1>Olá, eu sou o João</h1>
    </div>
    <div class="home__message">
      <h2>
        <span class="pre-message">Apaixonado por: </span>
        <span id="type-writter" class="typed"></span>
      </h2>
    </div>
    <div class="home__call">
      <a href="#sobre" style="z-index: 100;" title="Veja mais sobre mim">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10rem"
          height="10rem"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.25 13.5L12 17.25M12 17.25L15.75 13.5M12 17.25L12 6.75"
            stroke="var(--purple)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    let script = document.createElement("script");
    script.innerHTML = `var typed = new Typed("#type-writter", {
      strings: ["Programação","HTML", "CSS", "JavaScript", "Vue.Js", "Jogos", "Música"],
      typeSpeed: 70,
      smartBackspace: true,
      startDelay: 1000,
      backDelay: 900,
      backSpeed: 40,
      loop: true,


    });`;
    document.head.appendChild(script);
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.home__title {
  text-align: center;
  font-size: 3.4rem;
}
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
}
.home__message {
  font-size: 2.2rem;
}
#type-writter {
  color: var(--purple);
  font-weight: 700;
}
.home__call {
  z-index: 100;
}
.pre-message {
  font-weight: 400;
}
@media (max-width: 650px) {
  .home__message {
    font-size: 2rem;
    text-align: center;
  }
  .pre-message {
    display: block;
  }
}
</style>
