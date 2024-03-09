import Link from "next/link";
import { cookies } from "next/headers";
import { V7CharNames } from "../../constants/characterName";
import { verifyAdmin } from "@/firebase/fireabaseAdminInit";
import UserBox from "./UserBox";
import LoginBox from "./LoginBox";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

async function Sidebar() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  let user;
  if (token && token !== "") {
    const result = await verifyAdmin(token);

    user = {
      displayName: result.name,
      uid: result.uid,
      photoUrl: result.picture,
    };
  }

  return (
    <div className="fixed top-0 left-0 overflow-y-auto h-full w-[200px]">
      <div className="h-[60px] flex justify-center items-center">
        <a href="/">6N23RP.COM</a>
      </div>
      <div className="flex items-center flex-col">
        {user ? <UserBox user={user} /> : <LoginBox />}
      </div>
      <ul>
        {V7CharNames.map((value) => (
          <li key={value}>
            <Link
              className="py-[10px] px-[10px] hover:text-red_3 inline-block w-full"
              href={`/v7/${value}`}
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-full justify-start"
                )}
              >
                {value}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
