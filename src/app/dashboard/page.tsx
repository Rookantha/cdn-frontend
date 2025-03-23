"use client";

import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setIsAuth(true);
    }
  }, []);

  if (!isAuth) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <button onClick={logout} className="bg-red-500 text-white p-2 mt-4">Logout</button>
    </div>
  );
};

export default Dashboard;
