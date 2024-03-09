"use client";

import Cookies from "js-cookie";
import { signInWithGoogle } from "../../firebase/firebaseInit";
import { AiOutlineUser } from "react-icons/ai";
export default function LoginBox() {
  const handleLogin = async () => {
    const result = (await signInWithGoogle()).user;
    const token = await result.getIdToken();
    Cookies.set("token", token);
    window.location.reload();
  };

  return (
    <div className="cursor-pointer">
      <AiOutlineUser
        onClick={handleLogin}
        className="w-[60px] h-[60px] rounded-[1/2]"
      />
      로그인하세요
    </div>
  );
}
