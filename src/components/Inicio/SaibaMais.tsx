import { Circle } from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import PostCard from "@/components/Posts/PostCard";

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

export default async function SaibaMais() {
  const data = await fetch("http://3.141.194.138:3000/posts/card", {
    cache: "no-store",
  });
  const posts: Post[] = await data.json();
  return (
    <section className="w-screen space-y-14 my-10">
      <div className="flex gap-2 items-center mx-auto text-center border-b-2 w-fit py-1 px-4 text-3xl font-black text-zinc-700 border-zinc-700">
        <Circle width={15} />
        <h1>Saiba mais sobre o projeto</h1>
        <Circle width={15} />
      </div>
      <div className="w-full pb-10">
        <ScrollArea className="w-full whitespace-nowrap">
          <ScrollBar orientation="horizontal" />
          <div className="w-full flex gap-6 h-fit my-20">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
