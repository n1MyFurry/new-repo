"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Home() {

 const session = useSession();

  console.log(session);
  

  return (
    <main className="flex items-center justify-center w-full h-full">
      <div className="w-72 h-72 bg-black/10 rounded-lg">
        {session?.data ? (
          <Link href="/api/auth/signout">
            Sign Out
          </Link>
        ): (
          <Link href="/api/auth/signin">
            Sign In
          </Link>
        )}
        <div>
          {session?.data?.user?.email}
        </div>
        <br />
        <Link href="/profile">
          Profile
        </Link>
      </div>
    </main>
  )
}
