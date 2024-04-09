"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { navigation } from "@/constants";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" size="icon">
          <MenuIcon className="h-5 w-5 icon-hover" />
        </Button>
      </SheetTrigger>

      <SheetContent className="pt-8">
        {/*<SheetHeader>*/}
        {/*  <SheetTitle>Edit profile</SheetTitle>*/}
        {/*  <SheetDescription>*/}
        {/*    Make changes to your profile here. Click save when you're done.*/}
        {/*  </SheetDescription>*/}
        {/*</SheetHeader>*/}

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input placeholder="Search" className="col-span-4" />
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col gap-y-[20px]">
          {navigation.map((item, index) => (
            <Link key={index} href={item.url} className="">
              {item.title}
            </Link>
          ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            {/*<Button type="submit">Save changes</Button>*/}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
