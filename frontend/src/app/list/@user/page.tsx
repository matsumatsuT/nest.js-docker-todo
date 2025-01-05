"use client";

import { useFetchClient } from "@/hooks/useFetchClient";
import { CreateUser } from "./CreateUser";

const User = () => {
  const $api = useFetchClient();

  const { data, refetch } = $api.useQuery("get", "/user");
  const { mutate } = $api.useMutation("delete", "/user/{id}", {
    onSuccess: () => {
      refetch();
    },
  });

  const onDelete = (id: number) => {
    mutate({ params: { path: { id: id.toString() } } });
  };

  if (!data) return null;

  return (
    <div>
      <p style={{ fontSize: "14px", fontWeight: "bold" }}>一覧</p>
      {data.map((user) => (
        <div key={user.id} style={{ display: "flex", gap: "10px" }}>
          <div>{user.id}</div>
          <div>{user.email}</div>
          <button onClick={() => onDelete(user.id)}>削除</button>
        </div>
      ))}

      <div>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>新規作成</p>
        <CreateUser />
      </div>
    </div>
  );
};

export default User;
