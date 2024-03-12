import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Page() {
  const session = await auth();
  if (!session) {
    return redirect("/auth/login");
  }
  return (
    <div>
      <h1>New Post</h1>
    </div>
  );
}
