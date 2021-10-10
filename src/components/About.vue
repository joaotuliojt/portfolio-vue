<template>
  <section id="sobre" ref="target">
    <div class="title-section">
      <h1>Sobre mim</h1>
    </div>
    <div class="container">
      <div class="profile" data-aos="fade-right"></div>
      <div class="about" data-aos="fade-left">
        <h2>Olá, me chamo João Túlio</h2>
        <p>
          Sou um jovem desenvolvedor formado em técnico em informática. Sou
          apaixonado por progamação e pelo aprendizado. Gosto de estar sempre me
          aprimorando como profissional e sempre busco novos desafios e
          experiências para me aperfeiçoar.
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/jtsoares/" target="_blank">
            <span class="social__span">
              Linkedin
            </span>
            <img src="../assets/linkedin-icon.svg" alt="Icone Linkedin" />
          </a>

          <a href="https://github.com/joaotuliojt" target="_blank">
            <span class="social__span">
              GitHub
            </span>
            <img src="../assets/github-icon.svg" alt="Icone GitHub" />
          </a>

          <a href="https://www.instagram.com/tulio_joaob/" target="_blank">
            <span class="social__span">
              Instagram
            </span>
            <img src="../assets/instagram-icon.svg" alt="Icone Instagram" />
          </a>

          <a
            href="https://discord.com/users/426120432991862784"
            target="_blank"
          >
            <span class="social__span">
              Discord
            </span>
            <img src="../assets/discord-icon.svg" alt="Icone Discord" />
          </a>
        </div>
        <a class="btn" href="/Curriculo.pdf" download="CV_JoaoTulio.pdf"
          >Baixar curriculo
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: var(--white);
  color: var(--black);
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.profile {
  background-image: url("../assets/profile.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 45rem;
}
.about {
  text-align: left;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
}
.about p {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
}
.btn {
  padding: 1.8rem;
  border-radius: 0.8rem;
  margin-top: 3rem;
  align-self: flex-start;
  transition: 0.25s;
}
.btn:hover {
  background: var(--purple);
}
.social-links {
  display: flex;
  gap: 2rem;
}
.social-links a {
  width: 3.4rem;
  height: 4rem;
  position: relative;
}
.social-links .social__span {
  opacity: 0;
  visibility: hidden;
  top: 0;
  position: absolute;
  left: 50%;
  font-weight: 600;
  transform: translateX(-50%);
  color: var(--white);
  background: var(--purple);
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  transition: 0.25s;
}
.social-links .social__span::after {
  content: "";
  border: solid var(--purple);
  border-width: 0 3px 3px 0;
  display: inline-block;
  position: absolute;
  right: 50%;
  top: -0.5rem;
  padding: 3px;
  transform: rotate(-135deg) translate(-50%);
}
.social-links a:hover .social__span {
  top: 110%;
  opacity: 1;
  visibility: visible;
}
@media (max-width: 700px) {
  .container {
    display: block;
  }
  .about {
    text-align: center;
    margin-top: 4rem;
  }
  .btn {
    align-self: center;
  }
  .social-links {
    justify-content: center;
  }
  .profile {
    background-size: cover;
  }
}
</style>
