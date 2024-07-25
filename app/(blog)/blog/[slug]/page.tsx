import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface BlogPost {
  title: string;
  body: {
    text: string;
  };
  image1: {
    url: string;
  } | null;
  image2: {
    url: string;
  } | null;
  image3: {
    url: string;
  } | null;
}

async function getBlogPost(slug: string) {
  const response = await fetch(process.env.NEXT_HYGRAPH_ENDPOINT as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query BlogPost($slug: String!) {
        blog(where: {slug: $slug}) {
          title
          body {
            text
          }
          image1 {
            url
          }
          image2 {
            url
          }
          image3 {
            url
          }
        }
      }`,
      variables: {
        slug,
      },
    }),
  });
  const json = await response.json();
  return json.data.blog;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost = await getBlogPost(params.slug);
  return (
    <div className="m-12 text-center py-8">
      <h1 className="text-5xl font-bold mb-4 mt-11">{post.title}</h1>
      <p className="text-lg mb-8">{post.body.text}</p>
      {post.image1?.url && (
        <div className="mb-8">
          <Image src={post.image1.url} alt="Image 1" width={800} height={600} />
        </div>
      )}
      {post.image2?.url && (
        <div className="mb-8">
          <Image src={post.image2.url} alt="Image 2" width={800} height={600} />
        </div>
      )}
      {post.image3?.url && (
        <div className="mb-8">
          <Image src={post.image3.url} alt="Image 3" width={800} height={600} />
        </div>
      )}
      <p>
        <Button>

        <Link href="/blog">
          Wróć do Bloga
        </Link>
        </Button>
      </p>
    </div>
  );
}