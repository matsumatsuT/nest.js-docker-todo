"use client";

import { components } from "@/api/schema";
import { useForm } from "react-hook-form";
import { $api } from "@/api/client";
import { useRouter } from "next/navigation";
import { setCookie } from "../(actions)/cookie";

type FormValues = components["schemas"]["SignInDto"];

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const { mutateAsync } = $api.useMutation("post", "/auth/login");

  // ログイン処理
  const onSubmit = async (data: FormValues) => {
    try {
      const { access_token } = await mutateAsync({ body: data });
      setCookie(access_token);

      router.push("/list");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          id="email"
          {...register("email")}
          placeholder="email"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="password"
        />
      </div>
      <button>ログイン</button>
    </form>
  );
};
