"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signOut, useSession } from "next-auth/react"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "../loading";

export default function Profile() {
    const { data: session, status } = useSession();
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loading />}>
                <div className="flex-center">
                    <div className="w-[450px] space-y-4">
                        <UserAvatar />
                        <Input type="text" placeholder="Name" value={session?.user?.name} className="text-color-text" />
                        <Input type="email" placeholder="Email" value={session?.user?.email} className="text-color-text" />
                        <Button variant="destructive" className="w-fit" onClick={() => signOut({ callbackUrl: "/auth/login" })}>Logout</Button>
                    </div>
                </div>
            </Suspense>
        </ErrorBoundary>
    )
}

export function UserAvatar() {
    const { data: session } = useSession();
    return (
        <Avatar>
            <AvatarImage src={session?.user?.image} />
            <AvatarFallback>{session?.user?.name?.slice(0, 2)}</AvatarFallback>
        </Avatar>
    )
}
