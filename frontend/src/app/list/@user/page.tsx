import { getUser } from "@/app/(actions)/get-user";
import { UserPage } from "./UserPage";

const User = async () => {
  const data = await getUser();

  if (!data) return null;

  return <UserPage user={data} />;
};

export default User;
