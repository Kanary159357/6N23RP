import Cookies from "js-cookies";
import { signInWithGoogle, signout } from "../firebase/firebaseInit";
import { users } from "../store/user";
import React from "react";
import { useStore } from "@nanostores/react";

export default function UserProfile({ user }) {
  const profile = useStore(users);

  const handleLogin = async () => {
    const result = (await signInWithGoogle()).user;
    const token = await result.getIdToken();
    Cookies.setItem("token", token);
    users.set({
      displayName: result.displayName,
      uid: result.uid,
      photoUrl: result.photoURL,
    });
  };

  React.useEffect(() => {
    users.set(user);
  }, []);

  const handleLogout = async () => {
    await signout();
    Cookies.removeItem("token");
    users.set(undefined);
  };

  return (
    <>
      {profile ? (
        <div>
          <div>{user.displayName}</div>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <>
          <div
            onClick={handleLogin}
            className="w-60px h-60px rounded-1/2 i-healthicons-ui-user-profile-outline"
          ></div>
          로그인하세요
        </>
      )}
    </>
  );
}
