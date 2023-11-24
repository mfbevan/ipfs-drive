import { NavigationItems } from "@/lib";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        {NavigationItems.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className="btn btn-ghost text-xl"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <ConnectWallet style={{ height: "50px" }} />
    </div>
  );
};
