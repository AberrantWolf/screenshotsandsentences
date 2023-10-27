<script>
    import Header from "$lib/components/Header.svelte";
    import "$lib/styles/style.scss";
</script>

<Header />

<main>
    <slot />
</main>

<footer>...I am the footer...</footer>
