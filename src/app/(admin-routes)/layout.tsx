import { getServerSession } from "next-auth"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

interface PrivateLayoutProps {
    children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps){
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/login')
    }

    return <>{children}</>
}