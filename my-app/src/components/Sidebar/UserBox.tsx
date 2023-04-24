"use client";

import { signout } from "@/firebase/firebaseInit";
import Cookies from "js-cookie";

export default function LoginBox({
  user,
}: {
  user: {
    displayName: any;
    uid: string;
    photoUrl: string | undefined;
  };
}) {
  const handleLogout = async () => {
    await signout();
    Cookies.remove("token");
    window.location.reload();
  };

  return (
    <div>
      <div>{user.displayName}</div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
}
