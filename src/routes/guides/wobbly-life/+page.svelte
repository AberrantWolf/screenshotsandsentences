<script>
    import ArticleList from "$lib/components/ArticleList.svelte";

    const article_root = "/guides/wobbly-life/";
    let articles = [
        article_root + "all_presents.md",
        article_root + "jungle-temple.md",
    ];
</script>

All wobbly life guides here...

<ArticleList {articles} />
