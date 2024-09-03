"use client"

import { SessionProvider } from "next-auth/react"
import {getServerSession} from "next-auth";

export const AuthProvider = ({ children }) => {
    const session = {};

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}