interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  createdAt: string;
  tags: string[];
  authorId: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetch(`http://3.141.194.138:3000/posts/${params.slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post: Post = await data.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.content}</p>
    </div>
  );
}
