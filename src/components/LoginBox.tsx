import Cookies from "js-cookies";
import { signInWithGoogle } from "../firebase/firebaseInit";

export default function LoginBox() {
  const handleLogin = async () => {
    const result = (await signInWithGoogle()).user;
    const token = await result.getIdToken();
    Cookies.setItem("token", token);
    window.location.reload();
  };

  return (
    <>
      <div
        onClick={handleLogin}
        className="w-60px h-60px rounded-1/2 i-healthicons-ui-user-profile-outline"
      ></div>
      로그인하세요
    </>
  );
}
