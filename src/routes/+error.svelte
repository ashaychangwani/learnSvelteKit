<script>
  import '../styles/global.css'
  import Title from "$lib/title.svelte";
</script>

<header>
  <Title title = "Ninja Gaming Guides"/>
</header>

<main>
  <div class="error">
    <h1>404</h1>
    <p>Page not found</p>
  </div>
</main>

<footer>
  <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>


<style>
  header {
        display: flex;
        justify-content: center;
    }
  .error {
        text-align: center;
        margin-bottom: 60px;
    }
  main {
      max-width: 960px;
      margin: 20px auto;
  }

  footer {
      text-align: center;
  }

</style>
