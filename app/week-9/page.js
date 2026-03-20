"use client";

import Link from "next/link";
import { useUserAuth } from "@/app/contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Week 9 – Firebase Auth</h1>

      {/* If user is NOT logged in */}
      {!user && (
        <div className="space-y-6">
          <Link
            href="/week-9/shopping-list"
            className="text-2xl font-semibold text-blue-800 hover:underline block"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={gitHubSignIn}
            className="px-6 py-2 bg-black text-white rounded"
          >
            Login with GitHub
          </button>
        </div>
      )}

      {/* If user IS logged in */}
      {user && (
        <div className="space-y-6">
          <p className="text-lg">
            Welcome, {user.displayName} ({user.email})
          </p>

          <Link
            href="/week-9/shopping-list"
            className="text-2xl font-semibold text-blue-800 hover:underline block"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={firebaseSignOut}
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}