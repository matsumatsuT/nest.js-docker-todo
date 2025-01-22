"use server";

import { cookies } from "next/headers";

export async function setCookie(access_token: string) {
  const cookieStore = await cookies();

  cookieStore.set("access_token", access_token);
}
