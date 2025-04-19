// src/utils/loadMarkdownPost.ts
const posts = import.meta.glob('/src/content/*.md', { eager: true });

export function getPostBySlug(slug: string) {
  const matchedKey = Object.keys(posts).find((key) => key.includes(`${slug}.md`));

  if (!matchedKey) return null;

  const mod: any = posts[matchedKey];
  return mod.default;
}
