import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  tags: string[];
  authorProps: {
    name: string;
    image: string;
  };
}

export default async function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="flex flex-col justify-between rounded-lg shadow-2xl overflow-hidden w-[390px] h-fill "
    >
      <div>
        <div className="relative h-52">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="z-0 max-h-52 object-cover object-center"
          />
        </div>

        <div className="p-6 w-full h-fit space-y-4">
          <span
            key={post.tags[0]}
            className="inline-block bg-[#7D9746] rounded-sm px-3 py-1 text-sm font-normal text-white"
          >
            {post.tags[0]}
          </span>
          <h2 className="text-2xl font-bold text-left whitespace-normal">
            {post.title}
          </h2>
          <p className="mt-4 text-gray-600 line-clamp-3 whitespace-normal">
            {post.description}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between gap-4 h-fill">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center gap-2 text-zinc-600 ">
            <Avatar className="shadow-lg">
              <AvatarImage
                width={28}
                src={post.authorProps.image}
                alt={post.authorProps.name}
              />
              <AvatarFallback>VTS</AvatarFallback>
            </Avatar>
            por
            <span className="font-semibold">{post.authorProps.name}</span>
          </div>
          <div className="text-sm font-light text-zinc-500">8 min</div>
        </div>
      </div>
    </Link>
  );
}
