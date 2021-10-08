<template>
  <section id="contato">
    <div class="title-section">
      <h1>Contato</h1>
    </div>
    <div class="container">
      <div class="card">
        <img src="../assets/mail-icon.svg" alt="Ícone de email" />
        <a href="mailto:joaotuliosoares@hotmail.com"
          >joaotuliosoares@hotmail.com</a
        >
      </div>
      <div class="card">
        <img src="../assets/phone-icon.svg" alt="Ícone de email" />
        <a href="tel:+5531981213843">(31) 98121-3843</a>
      </div>
    </div>
    <div class="title-section">
      <h4>Entre em Contato</h4>
    </div>
    <div class="contact-form">
      <form id="form" action="https://formspree.io/f/mvodydyd" method="POST">
        <input
          type="email"
          placeholder="Email"
          id="mail-input"
          name="_replyto"
          required
        />
        <textarea
          placeholder="Deixe sua mensagem"
          name="message"
          required
        ></textarea>
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: var(--black);
  color: var(--white);
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  box-shadow: 0 0 18px rgb(69 39 160 / 10%);
  padding: 2rem 1rem;
}
.card img {
  width: 5rem;
}
.card a {
  color: var(--green);
  font-weight: 500;
  transition: 0.25s;
}
.card a:hover {
  color: var(--blue);
}
.contact-form {
  width: 50%;
  margin: 0 auto;
}
#form {
  display: grid;
  grid-template-areas: "email" "message" "button";
  gap: 2rem;
  place-items: center;
}
#form input,
textarea {
  min-width: 100%;
  padding: 1rem 2rem;
  background: none;
  border: none;
  box-shadow: 0 0 18px rgb(69 39 160 / 10%);
  outline: none;
  color: var(--white);
}
textarea {
  resize: none;
  min-height: 20rem;
}
#form .btn {
  padding: 1.2rem 4rem;
  font-size: 1.8rem;
  border: none;
  background: var(--purple);
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.25s;
}
#form .btn:hover {
  background: var(--blue);
}

@media (max-width: 700px) {
  .container {
    display: block;
  }
  .card {
    flex-direction: column;
    padding: 4rem;
  }
  .contact-form {
    width: 100%;
  }
}
</style>
