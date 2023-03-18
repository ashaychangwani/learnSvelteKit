<script>
    import '../../styles/global.css'
    import Title from "$lib/title.svelte";
</script>

<header>
    <Title title = "Ninja Gaming Guides"/>
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

    footer {
        text-align: center;
    }

</style>