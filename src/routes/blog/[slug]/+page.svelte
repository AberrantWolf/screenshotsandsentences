<script>
    import Toc from "svelte-toc";

    export let data;
    const { title, date, Content } = data;
</script>

<svelte:head>
    <title>Blog = {title}</title>
    <meta property="og:title" content={title} />
</svelte:head>

<Toc>--pageBody="article"</Toc>

<article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <Content />
</article>
