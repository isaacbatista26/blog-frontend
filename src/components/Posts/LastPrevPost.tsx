import Link from "next/link";
import Image from "next/image";
export default async function LastPrevPost({ postId }: { postId: string }) {
  const data = await fetch(
    `http://3.141.194.138:3000/posts/prevnext/${postId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  const post = await data.json();
  return (
    <section className="container flex justify-between">
      <Link href={`/posts/${post.prevPost ? post.prevPost?.id : postId}`}>
        <div className="flex items-center gap-2 h-48 py-6">
          <div className="w-48 h-48 relative overflow-hidden rounded-2xl">
            <Image
              src={
                post.prevPost ? post.prevPost.image : "/posts/missing_image.png"
              }
              className="object-cover"
              fill
              alt={post.prevPost ? post.prevPost.title : "Sem Post Anterior"}
            />
          </div>
          <div className="h-full space-y-4 my-auto max-w-52">
            <span className="text-left text-base font-semibold text-zinc-500">
              post anterior
            </span>
            <h3 className="text-left text-lg font-normal text-zinc-700">
              {post.prevPost ? post.prevPost.title : "Sem post anterior"}
            </h3>
          </div>
        </div>
      </Link>
      <Link href={`/posts/${post.nextPost ? post.nextPost?.id : postId}`}>
        <div className="flex items-center gap-2 h-48 py-6">
          <div className="h-full text-right space-y-4 my-auto max-w-52">
            <span className="text-right text-base font-semibold text-zinc-500">
              post seguinte
            </span>
            <h3 className="text-right text-lg font-normal text-zinc-700">
              {post.nextPost ? post.nextPost.title : "Sem post seguinte"}
            </h3>
          </div>
          <div className="w-48 h-48 relative overflow-hidden rounded-2xl">
            <Image
              src={
                post.nextPost ? post.nextPost.image : "/posts/missing_image.png"
              }
              className="object-cover"
              fill
              alt={post.nextPost ? post.nextPost.title : "Sem Post Seguinte"}
            />
          </div>
        </div>
      </Link>
    </section>
  );
}
