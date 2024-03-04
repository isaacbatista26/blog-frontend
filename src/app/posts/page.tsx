import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PostCard from "@/components/Posts/PostCard";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Posts",
  description: "Vector Tracking System",
};
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

const tags = [
  {
    id: "1",
    icon: <ArrowUpRight />,
    name: "Sistemas Embarcados",
  },
  {
    id: "2",
    icon: <ArrowUpRight />,
    name: "DevOps",
  },
  {
    id: "3",
    icon: <ArrowUpRight />,
    name: "Inteligencia Artificial",
  },
  {
    id: "4",
    icon: <ArrowUpRight />,
    name: "Papers",
  },
  {
    id: "5",
    icon: <ArrowUpRight />,
    name: "Projetos",
  },
  {
    id: "6",
    icon: <ArrowUpRight />,
    name: "Atualizações",
  },
];

const imageStyle = {
  borderRadius: "30px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  width: "100%",
  maxHeight: "600px",
  objectFit: "cover",
  zIndex: 0,
};

export default async function Page() {
  const data = await fetch("http://3.141.194.138:3000/posts/");
  const posts: Post[] = await data.json();
  const orderedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
  return (
    <div className="w-screen flex flex-col items-center">
      <div>
        <h1 className="text-5xl text-zinc-800 font-black">
          Artigos e Atualizações
        </h1>
      </div>
      <div>Search</div>
      <div className="flex flex-row">
        {tags.map((tag) => (
          <button
            key={tag.id}
            className="flex flex-row gap-2 items-center bg-neutral-200 font-light text-md text-zinc-800 px-4 py-2 rounded-lg m-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            {tag.icon}
            {tag.name}
          </button>
        ))}
      </div>
      <div className="container flex flex-col items-center relative">
        {/*
         <div className="relative h-[600px]">
          <Image
            src={orderedPosts[0].image}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
        </div>
        */}
        <Image
          src={orderedPosts[0].image}
          alt="Picture of the author"
          width={1000}
          height={500}
          style={imageStyle}
        />
        <div className="flex flex-row justify-between p-10 rounded-3xl shadow-xl w-3/4 mx-auto z-10 -top-20 relative bg-white">
          <div className="space-y-4 w-1/2">
            <h1 className="text-3xl font-black text-zinc-400">
              Última publicação
            </h1>
            <h2 className="text-2xl font-normal text-zinc-800">
              {orderedPosts[0].title}
            </h2>
            <p className="text-md font-light">
              {orderedPosts[0].description.slice(0, 200)}...
            </p>
            <p className="text-sm font-light text-zinc-500">8 min.</p>
          </div>
          <div className="flex flex-col items-end justify-between w-1/2">
            <div className="flex flex-row">
              {orderedPosts[0].tags.map((tag) => (
                <button
                  key={tag}
                  className="flex flex-row gap-2 items-center border font-light text-md text-zinc-800 px-4 py-2 rounded-lg m-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                >
                  {tag}
                </button>
              ))}
            </div>
            <ArrowUpRight color="#CCCCCC" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {orderedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}