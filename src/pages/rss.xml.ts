import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${site.name}的文章与生活`,
    description: site.intro,
    site: context.site ?? 'https://liuyouyan.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/journal/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
