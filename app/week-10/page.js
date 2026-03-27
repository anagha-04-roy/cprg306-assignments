"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    }
  }, [user, router]);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Week 10 – Cloud Firestore</h1>
      <p>Login using the navbar to access your Week 10 shopping list.</p>
    </main>
  );
}