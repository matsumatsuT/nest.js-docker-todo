"use client";

import { useFetchClient } from "@/hooks/useFetchClient";

const User = () => {
  const $api = useFetchClient();

  // 取得できるがdataの型情報が取得できない
  // DTOかymlでレスポンスの方を敵意義する必要があるかも
  const { data, isLoading, error } = $api.useQuery("get", "/user");

  return <div>{data}</div>;
};

export default User;
