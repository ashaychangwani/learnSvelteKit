<script>
    import { page } from '$app/stores';
</script>
  
<div class="error">
    <h2>Ooops</h2>
    <p>{$page.error.message}</p>
    <a href="/guides" class="href">View all Guides</a>
</div>

<style>
    .error {
        text-align: center;
        margin-bottom: 60px;
    }
</style>