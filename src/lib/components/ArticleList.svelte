<script lang="ts">
    import ArticleBlock from "./ArticleBlock.svelte";
    export let articles: Array<any>;
</script>

<div class="grid-container">
    {#each articles as article}
        <ArticleBlock {article} />
    {/each}
</div>
