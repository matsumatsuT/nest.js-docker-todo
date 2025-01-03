"use client";

import { useFetchClient } from "@/hooks/useFetchClient";

const User = () => {
  const $api = useFetchClient();

  const { data, isLoading, error } = $api.useQuery("get", "/user");

  if (!data) return null;

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default User;
