import createFetchClient, { Middleware } from "openapi-fetch";
import { paths } from "./schema";
import createClient from "openapi-react-query";

import Cookies from "js-cookie";

// TODO: 時間が経つとAPIが叩けなくなるのでリフレッシュトークンの処理を追加する
const middleware: Middleware = {
  onRequest: async ({ request }) => {
    const access_token = Cookies.get("access_token");
    if (access_token) {
      request.headers.set("Authorization", `Bearer ${access_token}`);
    }
  },
  onResponse: async ({ response }) => {
    // 認可エラー発生時にログイン画面へ遷移
    if (response.status === 401) {
      console.log("認証エラー発火");
      window.location.href = "/login";
    }
    return response;
  },
};

const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:3308/",
  headers: {
    "Content-Type": "application/json",
  },
});

fetchClient.use(middleware);

export const $api = createClient(fetchClient);
