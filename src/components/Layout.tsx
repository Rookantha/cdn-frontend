"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/utils/auth";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuth = isAuthenticated();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <Link href="/" className="text-lg font-bold">My IAM System</Link>
        <div>
          {isAuth ? (
            <>
              <Link href="/dashboard" className="mr-4">Dashboard</Link>
              <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="mr-4">Login</Link>
              <Link href="/register" className="bg-blue-500 px-4 py-2 rounded">Register</Link>
            </>
          )}
        </div>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
