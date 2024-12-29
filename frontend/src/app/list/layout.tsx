"use client";
import { useState } from "react";

export default function RootLayout({
  user,
  todo,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  todo: React.ReactNode;
}>) {
  const [tabs, setTabs] = useState<"user" | "todo">("user");

  const onTabChange = (tab: "user" | "todo") => {
    setTabs(tab);
  };

  return (
    <div>
      <button onClick={() => onTabChange("user")}>user</button>
      <button onClick={() => onTabChange("todo")}>todo</button>
      {tabs === "user" && user}
      {tabs === "todo" && todo}
    </div>
  );
}
