<script>
    import '../../../styles/global.css'
    import Title from "$lib/title.svelte";
</script>

<header>
    <Title title = "Ninja Gaming Guidessss"/>
    <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/guides">Guides</a>
    </div>
</header>

<main>
    <!-- page content -->
    <slot></slot>
</main>

<footer>
    <p>Copyright 2022 Ninja Gaming Guides</p>
</footer>


<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    .links {
        margin-left: auto;
    }
    footer {
        text-align: center;
    }

</style>