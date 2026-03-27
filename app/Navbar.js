"use client";

import Link from "next/link";
import { useUserAuth } from "./contexts/AuthContext";

export default function Navbar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b">
      <Link href="/" className="font-bold text-xl">
        Web Dev 2
      </Link>

      <div className="flex items-center gap-4">
        {user && (
          <span className="text-sm">
            {user.displayName} ({user.email})
          </span>
        )}

        {!user && (
          <button
            onClick={handleLogin}
            className="px-4 py-1 bg-black text-white rounded"
          >
            Login with GitHub
          </button>
        )}

        {user && (
          <button
            onClick={handleLogout}
            className="px-4 py-1 bg-green-600 text-white rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}