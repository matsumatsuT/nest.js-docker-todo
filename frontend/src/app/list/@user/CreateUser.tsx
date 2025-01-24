import { components } from "@/api/schema";
import { useForm } from "react-hook-form";

export type FormValues = components["schemas"]["CreateUserDto"];

type Props = {
  onSubmit: (data: FormValues) => void;
};

export const CreateUser = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmitForm = (data: FormValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      style={{ display: "grid", gap: "4px" }}
    >
      <div style={{ display: "flex", gap: "4px" }}>
        <label htmlFor="name">名前</label>
        <input type="text" {...register("name", { required: true })} />
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" {...register("email", { required: true })} />
      </div>
      <div style={{ display: "flex", gap: "4px" }}>
        <label htmlFor="password">パスワード</label>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
        />
      </div>

      <button type="submit" style={{ width: "100px" }}>
        作成
      </button>
    </form>
  );
};
