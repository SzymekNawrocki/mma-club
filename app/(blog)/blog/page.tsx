import Link from 'next/link';
import { PageTitle } from '@/components/PageTitle';

interface BlogPost {
  title: string;
  slug: string;
}

async function getBlogPosts() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query BlogPosts {
        blogs {
          title
          slug
        }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.blogs;
}

export default async function Blog() {
  const posts: BlogPost[] = await getBlogPosts();

  return (
    <div className="m-12 py-8">
      <PageTitle>Blog</PageTitle>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`/blog/${post.slug}`} className="underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}