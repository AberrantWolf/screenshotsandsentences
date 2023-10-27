export async function load({ params }) {
    const post = await import(`../../../blog/${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

    return {
        Content: content,
        title,
        date
    };
}