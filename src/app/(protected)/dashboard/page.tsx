import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
export default async function Page() {
  const session = await auth();
  const data = await fetch(
    `http://3.141.194.138:3000/posts/author/${session?.user.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const posts = await data.json();
  return (
    <main className="container py-10 space-y-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-black text-zinc-800">Dashboard</h1>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
        >
          <Button>Sair</Button>
        </form>
      </div>
      <div className="flex gap-4">
        <Button>
          <Link href="/posts/new">Novo Post</Link>
        </Button>
        <Button>
          <Link href="/settings">Editar Cadastro</Link>
        </Button>
      </div>
      <section className="space-y-4">
        <h2 className="text-xl font-black text-zinc-800">Minhas Publicações</h2>
        <ul className="border p-6 rounded-xl space-y-4">
          <li className="flex justify-between">
            <span className="text-md font-semibold pb-2 text-zinc-500">
              Título
            </span>
            <div className="flex gap-4">
              <span className="text-base font-semibold text-zinc-500">
                ver/editar
              </span>
            </div>
          </li>
          {posts.map((post: any) => (
            <li key={post.id} className="flex justify-between border-b-2">
              <span className="text-md font-semibold pb-2 text-zinc-600">
                {post.title}
              </span>
              <div className="flex gap-4">
                <Link href={`/posts/${post.id}`}>
                  <Eye color="#3f3f46" />
                </Link>
                <Link href={`/posts/${post.id}/edit`}>
                  <Pencil color="#3f3f46" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
