import client from "@/api/client";

export const getUser = async () => {
  const { data } = await client.GET("/users");
  return data;
};
