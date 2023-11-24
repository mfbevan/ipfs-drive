import { NavigationItems } from "@/lib";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import { ThemeButton } from "./ThemeButton";

export const Navbar = () => {
  return (
    <div className="navbar bg-neutral gap-2 px-2 ">
      <div className="flex-none text-neutral-content text-xl">
        💾 ipfs://drive
      </div>
      <div className="flex-1">
        {NavigationItems.map((item, index) => {
          return (
            <Link key={index} href={item.href} className="btn text-xl">
              {item.label}
            </Link>
          );
        })}
      </div>
      <div>
        <ThemeButton />
      </div>
      <div>
        <ConnectWallet style={{ height: "50px" }} />
      </div>
    </div>
  );
};
