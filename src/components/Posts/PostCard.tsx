import Image from "next/image";
import Link from "next/link";

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

export default async function PostCard({ post }: { post: Post }) {
  const data = await fetch(`http://3.141.194.138:3000/users/${post.authorId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const author = await data.json();
  return (
    <Link
      href={`/posts/${post.id}`}
      className="rounded-lg shadow-lg overflow-hidden w-[390px]"
    >
      <div className="relative h-52">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 max-h-52"
        />
      </div>
      <div className="p-6 space-y-4">
        <span
          key={post.tags[0]}
          className="inline-block bg-[#7D9746] rounded-sm px-3 py-1 text-sm font-normal text-white"
        >
          {post.tags[0]}
        </span>
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="mt-4 text-gray-600">{post.description}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-1 text-zinc-500">
            por
            <span className="font-semibold">{author.name}</span>
          </div>
          <div className="text-sm font-light text-zinc-500">8 min</div>
        </div>
      </div>
    </Link>
  );
}
