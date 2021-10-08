<template>
  <header id="header">
    <a href="#home" id="logo"> J.T</a>
    <nav class="navigation" @click="close">
      <a class="is-active" href="#home">Home</a>
      <a href="#sobre">Sobre mim</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#portfolio">Portfólio</a>
      <a href="#contato">Contato</a>
    </nav>

    <div @click="toggleMenu" class="menu-hamburguer"></div>
  </header>
</template>

<script>
export default {
  mounted() {
    const links = document.querySelectorAll(".navigation a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => {
          link.removeAttribute("class");
        });
        setTimeout(() => {
          link.setAttribute("class", "is-active");
        }, 500);
      });
    });
  },
  methods: {
    toggleMenu(e) {
      e.target.classList.toggle("active");
      document.querySelector(".navigation").classList.toggle("active");
    },
    close() {
      document.querySelector(".navigation").classList.toggle("active");
      document.querySelector(".menu-hamburguer").classList.toggle("active");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 5rem;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--purple);
  transition: 0.25s;
  z-index: 1000;
}
header.stick {
  position: fixed;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
header a {
  color: var(--white);
}
#logo {
  font-size: 3rem;
  letter-spacing: 0.1rem;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.navigation a {
  padding: 0.6rem;
  font-weight: 600;
  position: relative;
}
.navigation a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  border-radius: 1.6rem;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: var(--blue);
  transition: 0.25s;
}
.navigation a.is-active::after {
  width: 100%;
}
.navigation a:hover::after {
  width: 100%;
}
.menu-hamburguer {
  width: 2rem;
  height: 0.2rem;
  background: var(--white);
  position: relative;
  cursor: pointer;
  display: none;
}
.menu-hamburguer::after,
.menu-hamburguer::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 0.2rem;
  background: var(--white);
  cursor: pointer;
  transition: 0.6s;
}
.menu-hamburguer::after {
  bottom: -0.5rem;
}
.menu-hamburguer::before {
  top: -0.5rem;
}
@media (max-width: 700px) {
  header {
    padding: 1.2rem 3rem;
  }
  header.stick {
    padding: 0.2rem 3rem;
  }
  .menu-hamburguer {
    z-index: 1000;
  }
  .menu-hamburguer {
    display: block;
  }
  .menu-hamburguer.active {
    background: none;
  }
  .menu-hamburguer.active::before {
    transform: rotate(405deg);
    top: 0;
  }
  .menu-hamburguer.active::after {
    transform: rotate(-405deg);
    bottom: 0;
  }
  .navigation {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: var(--purple);
    transition: 0.25s;
    z-index: 1000;
    font-size: 2.4rem;
  }
  .navigation.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
