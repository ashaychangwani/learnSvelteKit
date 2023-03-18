<script>
    import '../../../styles/global.css'
    import Title from "$lib/title.svelte";
</script>

<header>
    <nav>
        <Title title = "Ninja Gaming Guidessss"/>
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
        </div>
    </nav>
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
        text-align: center;
        background: rgba(0,0,0,0.1);
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }

</style>