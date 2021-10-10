<template>
  <section id="portfolio">
    <div class="title-section">
      <h1>Portfólio</h1>
    </div>
    <div class="container">
      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img
            src="https://github.com/joaotuliojt/fc-squad43/raw/main/github/tela_inicial.png"
            alt=""
          />
        </div>
        <div class="description">
          <h3>Hackathon: FCallendar</h3>
          <p>
            O FCallendar é uma aplicação WEB criada para ajudar no gerenciamento
            na volta dos profissionais para o escritório na pandemia do COVID-19
            para evitar aglomeramento e superlotação.
          </p>
          <a
            href="https://github.com/joaotuliojt/fc-squad43"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Veja Mais</a
          >
        </div>
      </div>

      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img
            src="https://camo.githubusercontent.com/c47a38088a558e3f8246bce9f759b498f1f336eb39ce230c2fb9a776347b52fc/68747470733a2f2f696d6775722e636f6d2f69704c484646622e676966"
            alt=""
          />
        </div>
        <div class="description">
          <h3>Music Library Page</h3>
          <p>
            Um dashboard de um sistema de músicas semelhante ao Spotify, onde é
            possível visualizar playlists, tracks e artistas. DevChallenge by
            Emmanuel Messias
          </p>
          <a
            href="https://joaotuliojt.github.io/dv-musica-library-page/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Veja Mais</a
          >
        </div>
      </div>

      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img
            src="https://github.com/joaotuliojt/sunnyside-agency/raw/main/design/desktop-preview.jpg"
            alt=""
          />
        </div>
        <div class="description">
          <h3>Frontend Mentor - Sunnyside agency landing page</h3>
          <p>
            Uma landing page proposta pela Frontend Mentor. O projeto se trata
            de uma landing page bonita e colorida.
          </p>
          <a
            href="https://joaotuliojt.github.io/sunnyside-agency/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Veja Mais</a
          >
        </div>
      </div>
    </div>
    <div class="title-section">
      <h2>Projetos de estudo</h2>
    </div>
    <div class="container">
      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img src="../assets/Relógio.gif" alt="" />
        </div>
        <div class="description">
          <h3>Relógio Digital</h3>
          <p>
            Um relógio digital feito com HTML, CSS e JavaScript com intuito de
            aprofundar mais sobre o objeto Date do JS e estilizações e animações
            com CSS.
          </p>
          <a
            href="https://joaotuliojt.github.io/relogio-digital-js/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Veja Mais</a
          >
        </div>
      </div>
      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img src="../assets/Cronometro.gif" alt="" />
        </div>
        <div class="description">
          <h3>Cronômetro</h3>
          <p>
            Um cronômetro feito com HTML, CSS e JavaScript com intuito de
            aprofundar mais sobre o objeto Date do Js e estilzações com CSS.
          </p>
          <a
            href="https://joaotuliojt.github.io/timer-Js/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Veja Mais</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  display: block;
  padding: 1rem 3rem;
  transition: 0.25s;
  margin-top: 1.4rem;
}
.btn:hover {
  background: var(--purple);
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
}
.project {
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 0.8rem;
}
.project:hover .project__image img {
  transform: scale(1.05);
}
.project:hover {
  box-shadow: 0 0 10px 0px rgb(0 0 0 / 60%);
}
.project__image {
  overflow: hidden;
  height: 20rem;
}
.project__image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.25s;
}
.description {
  text-align: center;
  padding: 2rem 2rem;
}
</style>
