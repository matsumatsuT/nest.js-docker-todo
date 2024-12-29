"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/user")}>ユーザー</button>
      <button onClick={() => router.push("/todo")}>TODO</button>
    </div>
  );
}
