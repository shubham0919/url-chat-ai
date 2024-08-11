"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      router.push(`/${url}`);
    }else{  
      setError("Please enter a URL");
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <Input
            type="text"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter URL"
            className="mb-4"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">Submit</Button>
        </form>
      </div>
      ;
    </div>
  );
}
