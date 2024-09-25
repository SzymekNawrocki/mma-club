import Link from "next/link";
import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";

async function getBlogPost(slug: string) {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query BlogPost($slug: String!) {
        blogPost(where: {slug: $slug}) {
          title
          slug  
          text
          image {
            url
          }
        }
      }`,
      variables: { slug },
    }),
  });

  const json = await response.json();
  return json.data.blogPost;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blogPost = await getBlogPost(params.slug);

  return (
    <div className="flex flex-col items-center m-12 p-8  rounded-lg max-w-4xl mx-auto ">
   <PageTitle>{blogPost.title}</PageTitle> 
      <div className="mb-8">
        {blogPost.image && (
          <Image
            src={blogPost.image.url}
            alt="Post Image"
            width={300} 
            height={450} 
            className="rounded-lg shadow-md"
          />
        )}
      </div>
      <div
        className="text-lg mb-8 prose max-w-full"
        dangerouslySetInnerHTML={{ __html: blogPost.text }}
      />
      <Button>
        <Link href="/blog">
          Wróć do Bloga
        </Link>
      </Button>
    </div>
  );
}