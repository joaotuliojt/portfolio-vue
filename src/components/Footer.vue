<template>
  <footer>
    <p>&copy; {{ data }} Todos direitos reservados</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      data: 0,
    };
  },
  mounted() {
    const date = new Date().getFullYear();
    this.data = date;
  },
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  color: var(--white);
  padding: 2rem 0;
  background: var(--purple);
}
</style>
