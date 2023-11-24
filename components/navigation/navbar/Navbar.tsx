import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

import { ThemeButton } from "./ThemeButton";

import { NavigationItems } from "@/lib";

export const Navbar = () => (
  <div className="navbar bg-neutral gap-2 px-2 ">
    <div className="flex-none text-neutral-content pl-2 font-bold">
      💾 ipfs://drive
    </div>
    <div className="flex-1">
      {NavigationItems.map((item, index) => (
        <Link key={index} href={item.href} className="btn text-xl">
          {item.label}
        </Link>
      ))}
    </div>
    <div>
      <ThemeButton />
    </div>
    <div>
      <ConnectWallet style={{ height: "50px", fontSize: "16px" }} />
    </div>
  </div>
);
