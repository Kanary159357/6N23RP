import Cookies from "js-cookies";
import { signout } from "../firebase/firebaseInit";

export default function LoginBox({ user }) {
  const handleLogout = async () => {
    await signout();
    Cookies.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <div>{user.displayName}</div>
      <button onClick={handleLogout}>๋ก๊ทธ์์</button>
    </div>
  );
}
