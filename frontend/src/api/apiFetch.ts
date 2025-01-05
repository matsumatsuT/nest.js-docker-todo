import createFetchClient from "openapi-fetch";
import { paths } from "./schema";
import createClient from "openapi-react-query";

const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:3308/",
});

export const $api = createClient(fetchClient);
