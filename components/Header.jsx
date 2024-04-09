"use client";

import Link from "next/link";
import { navigation } from "@/constants";
import { SearchIcon, ShoppingCartIcon, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex items-center justify-between ">
        <Link href="/" className="text-2xl font-bold">
          Furtop.
        </Link>

        <div className="hidden md:flex items-center gap-x-[40px]">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="hover:text-accentColor transition-all duration-300"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-x-[10px]">
          <Button variant="link" size="icon">
            <SearchIcon className="h-5 w-5 icon-hover" />
          </Button>
          <Button variant="link" size="icon">
            <ShoppingCartIcon className="h-5 w-5 icon-hover" />
          </Button>
          <Button variant="link" size="icon">
            <UserRound className="h-5 w-5 icon-hover" />
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="link" size="icon">
            <ShoppingCartIcon className="h-5 w-5 icon-hover" />
          </Button>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
