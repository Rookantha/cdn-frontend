"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_CONTENT } from "@/lib/graphql";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_ALL_CONTENT);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading content</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <ul className="mt-4">
        {data?.getAllContent.map((content: any) => (
          <li key={content.id} className="border p-4 m-2 w-80">
            <h3 className="text-lg font-semibold">{content.title}</h3>
            <p>{content.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
