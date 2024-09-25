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
    <div className="m-12 py-11 ">
      <PageTitle>Blog</PageTitle>

      <ul className="mb-8 text-center gap-4 ">
        {blogPosts.map((post: any) => (
          <li className="" key={post.slug}>
            <Link className='mt-4 mb-4 p-4 ' href={`/blog/${post.slug}`}>
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
