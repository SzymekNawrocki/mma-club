import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardHeader } from "@/components/ui/card";


async function getBlogPosts() {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query BlogPosts {
        blogPosts {
          title
          slug
        }
      }`,
    }),
  });

  const json = await response.json();
  return json.data.blogPosts;
}

export default async function Home() {
  const blogPosts = await getBlogPosts();
  return (
    <div className="m-12 py-11">
      <PageTitle>Blog</PageTitle>

      <ul className="mb-8 text-center">
        {blogPosts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
                <Card>
                  <CardHeader>
                    {post.title}
                  </CardHeader>
                </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
