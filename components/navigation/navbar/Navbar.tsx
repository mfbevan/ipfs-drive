import Link from "next/link";

import { ThemeButton } from "./ThemeButton";

import { StatefulConnectButton } from "@/components";
import { navigationItems } from "@/lib";

export const Navbar = () => (
  <div className="navbar bg-neutral gap-2 px-2 rounded-b-3xl drop-shadow-lg">
    <div className="flex-none text-neutral-content pl-2 font-bold ">
      💾 ipfs://drive
    </div>
    <div className="flex-1">
      {navigationItems.map((item, index) => (
        <Link key={index} href={item.href} className="btn btn-ghost">
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
