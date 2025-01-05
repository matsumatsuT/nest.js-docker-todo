"use client";

import { components } from "@/api/schema";
import { CreateUser, FormValues } from "./CreateUser";

type Props = {
  user: components["schemas"]["UserEntity"][];
};

export const UserPage = ({ user }: Props) => {
  // const { data, refetch } = $api.useQuery("get", "/users");

  // const { mutate } = $api.useMutation("delete", "/users/{id}", {
  //   onSuccess: () => {},
  // });
  // const { mutate: createUser } = $api.useMutation("post", "/users", {
  //   onSuccess: () => {},
  // });

  const onDelete = (id: number) => {
    // mutate({ params: { path: { id: id.toString() } } });
    console.log("id", id);
  };

  const onCreate = (data: FormValues) => {
    // createUser({ body: data });
    console.log("data", data);
  };

  return (
    <div>
      <p style={{ fontSize: "14px", fontWeight: "bold" }}>一覧</p>
      {user.map((user) => (
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
