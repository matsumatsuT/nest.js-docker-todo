"use client";

import createFetchClient from "openapi-fetch";
import { paths } from "../api/schema";
import createClient from "openapi-react-query";

export const useFetchClient = () => {
  const fetchClient = createFetchClient<paths>({
    baseUrl: "http://localhost:3308/",
  });

  const $api = createClient(fetchClient);

  return $api;
};
