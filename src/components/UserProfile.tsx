"use client";

import { useEffect, useState } from "react";
import { getAccessToken } from "@/utils/auth";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = getAccessToken();
        if (!token) return;
        
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/user/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) return <p>Loading user profile...</p>;

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-500">Role: {user.role}</p>
    </div>
  );
};

export default UserProfile;
