export async function load({ params }) {
    const post = await import(`/src/blog/${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

    return {
        Content: content,
        title,
        date
    };
}