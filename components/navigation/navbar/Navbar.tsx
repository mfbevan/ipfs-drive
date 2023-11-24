import Link from "next/link";

import { ThemeButton } from "./ThemeButton";

import { StatefulConnectButton } from "@/components";
import { navigationItems } from "@/lib";

export const Navbar = () => (
  <div className="navbar bg-base-200 gap-2 px-2 rounded-b-xl drop-shadow-lg">
    {/* <div className="flex-none text-base-content pl-2 font-bold ">
      💾 ipfs://drive
    </div> */}
    <div className="flex-1 gap-2">
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="btn btn-ghost text-base-content"
        >
          {item.label}
        </Link>
      ))}
    </div>
    <div>
      <ThemeButton />
    </div>
    <div>
      <StatefulConnectButton />
    </div>
  </div>
);
