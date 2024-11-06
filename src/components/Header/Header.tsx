"use client";

import Image from "next/image";
import Link from "next/link";

import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { appLinks } from "@/shared/constants/appLinks";

export const Header = () => {
  return (
    <header className="w-full h-full sticky top-0 z-50 bg-zinc-800 px-4 py-2 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-row justify-between items-center w-full">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <ul className="w-max hidden flex-row gap-2 lg:gap-4 lg:flex">
            {appLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="flex flex-row gap-1 items-center transition-colors duration-300 ease-out font-bold text-sm text-zinc-200/80"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
