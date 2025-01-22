import createFetchClient, { Middleware } from "openapi-fetch";
import { paths } from "./schema";
import createClient from "openapi-react-query";

import Cookies from "js-cookie";

const middleware: Middleware = {
  onRequest: async ({ request }) => {
    const access_token = Cookies.get("access_token");
    if (access_token) {
      request.headers.set("Authorization", `Bearer ${access_token}`);
    }
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
