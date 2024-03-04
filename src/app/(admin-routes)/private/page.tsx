import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import nextAuth, { getServerSession } from "next-auth"

export default async function PrivatePage(){
  const session = await getServerSession(nextAuthOptions)
  return (
    <div>
      <h1>private page</h1>
      <p>Olá, {session?.user.name}.</p>
    </div>
  )
}