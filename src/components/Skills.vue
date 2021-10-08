<template>
  <section id="habilidades">
    <div class="title-section">
      <h1>Habilidades</h1>
    </div>
    <div class="container">
      <div class="card">
        <div class="card__header bg-html">
          <img src="../assets/html-icon.svg" alt="Html icon" />
          <h3>HTML</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-css">
          <img src="../assets/css-icon.svg" alt="Css icon" />
          <h3>CSS</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-js">
          <img src="../assets/javascript-icon.svg" alt="Javascript icon" />
          <h3>JavaScript</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-vue">
          <img src="../assets/vue-icon.svg" alt="Vue icon" />
          <h3>Vue.Js</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-angular">
          <img src="../assets/angular-icon.svg" alt="Angular icon" />
          <h3>Angular</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-bootstrap">
          <img src="../assets/bootstrap-icon.svg" alt="Bootstrap icon" />
          <h3>Bootstrap</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-node">
          <img src="../assets/node-icon.svg" alt="Node icon" />
          <h3>Node.Js</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-svelte">
          <img src="../assets/svelte-icon.svg" alt="Svelte icon" />
          <h3>Svelte</h3>
        </div>
      </div>
      <div class="card">
        <div class="card__header bg-typescript">
          <img src="../assets/typescript-icon.svg" alt="Typescript icon" />
          <h3>Typescript</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.title-section {
  color: var(--white);
}
section {
  background: var(--black);
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  place-items: center;
}
.card {
  text-align: center;
  border-radius: 1rem;
  width: 26rem;
  border-radius: 0.6rem;
}
.card img {
  width: 8rem;
  margin-bottom: 1rem;
}
.card__header {
  padding: 2rem 0rem;
  text-align: center;
  color: grey;
  background: #333333;
  transition: 0.25s;
}
.card:hover .card__header {
  color: var(--white);
  /* background: rgb(130, 87, 230); */
  cursor: pointer;
}

.card:hover .bg-html {
  background: #96290b;
}

.card:hover .bg-css {
  background: #0b2796;
}

.card:hover .bg-js {
  background: #ab9703;
}
.card:hover .bg-vue {
  background: #1b6b47;
}
.card:hover .bg-angular {
  background: #961216;
}
.card:hover .bg-bootstrap {
  background: #804fc9;
}
.card:hover .bg-node {
  background: #2e522a;
}
.card:hover .bg-svelte {
  background: #b33a12;
}
.card:hover .bg-typescript {
  background: #12457a;
}

@media (max-width: 850px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    width: 20rem;
  }
}
</style>
