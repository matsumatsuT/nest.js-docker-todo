"use client";

import { $api } from "@/api/client";
import { CreateTodo, TodoInputValue } from "./CreateTodo";

const Todo = () => {
  const { data } = $api.useQuery("get", "/todo");
  const { mutate } = $api.useMutation("post", "/todo");

  // TODO: ユーザーIDを取得して設定する
  const onSubmit = (data: TodoInputValue) => {
    mutate({
      body: {
        ...data,
        userId: 1,
      },
    });
  };
  return (
    <>
      <h1>TODO一覧</h1>
      <div style={{ display: "grid", gap: 5 }}>
        {data?.map((todo) => (
          <div key={todo.id} style={{ display: "flex", gap: 5 }}>
            <div>
              <p style={{ margin: 0, fontSize: 16 }}>{todo.title}</p>
              <p style={{ margin: 0, fontSize: 12 }}>{todo.description}</p>
            </div>
            <input type="checkbox" />
          </div>
        ))}
      </div>
      <h1>TODO作成</h1>
      <CreateTodo onSubmit={onSubmit} />
    </>
  );
};

export default Todo;
