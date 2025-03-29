"use client";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_CONTENT, GET_ALL_CONTENT } from "@/lib/graphql";

const CreateContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [createContent] = useMutation(CREATE_CONTENT, {
    refetchQueries: [{ query: GET_ALL_CONTENT }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createContent({ variables: { input: { title, description } } });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">Create Content</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full mt-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateContent;
