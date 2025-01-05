import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export const CreateUser = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
