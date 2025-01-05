"use client";

import { $api } from "@/api/client";
import { CreateUser, FormValues } from "./CreateUser";

const User = () => {
  const { data, refetch } = $api.useQuery("get", "/users");
  const { mutate } = $api.useMutation("delete", "/users/delete/{id}", {
    onSuccess: () => {
      refetch();
    },
  });
  const { mutate: createUser } = $api.useMutation("post", "/users/create", {
    onSuccess: () => {
      refetch();
    },
  });

  const onDelete = (id: number) => {
    mutate({ params: { path: { id: id.toString() } } });
  };

  const onCreate = (data: FormValues) => {
    createUser({ body: data });
  };

  if (!data) return null;

  return (
    <div>
      <p style={{ fontSize: "14px", fontWeight: "bold" }}>一覧</p>
      {data.map((user) => (
        <div key={user.id} style={{ display: "flex", gap: "10px" }}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <button onClick={() => onDelete(user.id)}>削除</button>
        </div>
      ))}

      <div>
        <p style={{ fontSize: "14px", fontWeight: "bold" }}>新規作成</p>
        <CreateUser onSubmit={onCreate} />
      </div>
    </div>
  );
};

export default User;
