import { components } from "@/api/schema";
import { useForm } from "react-hook-form";

export type TodoInputValue = components["schemas"]["CreateTodoDto"];

type Props = {
  onSubmit: (data: TodoInputValue) => void;
};
export const CreateTodo = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<TodoInputValue>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "grid", gap: "4px" }}
    >
      <div style={{ display: "flex", gap: "4px" }}>
        <label htmlFor="title">タイトル</label>
        <input type="text" {...register("title", { required: true })} />
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <label htmlFor="description">説明</label>
        <input type="text" {...register("description")} />
      </div>
      <div style={{ width: "200px" }}>
        <button type="submit">作成</button>
      </div>
    </form>
  );
};
