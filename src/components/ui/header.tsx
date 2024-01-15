"use client";

import { Button } from "./button";
import { Card, CardContent } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import {
  HouseSimple,
  IdentificationCard,
  List,
  Phone,
  ProjectorScreen,
} from "@phosphor-icons/react";
import MenuHeader from "./menu-header";

const Header = () => {
  return (
    <Card className="flex items-center justify-between md:justify-center gap-1 bg-white/90 shadow-none border-0 p-[1.875rem] fixed w-full">
      <Link href="/">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/122230401?s=96&v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
      <div className="hidden md:flex">
        <MenuHeader />
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <List />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader className="items-center text-xl font-bold">
              Menu
            </SheetHeader>

            <div className="mt-4 flex flex-col gap-3">
              <Button
                variant="outline"
                className=" w-full justify-center gap-2 font-bold"
              >
                <HouseSimple />
                Home
              </Button>
              <Button
                variant="outline"
                className=" w-full justify-center gap-2 font-bold"
              >
                <IdentificationCard />
                About
              </Button>

              <SheetClose asChild>
                <Link href={"/"}>
                  <Button
                    variant="outline"
                    className=" w-full justify-center gap-2 font-bold"
                  >
                    <ProjectorScreen />
                    Projects
                  </Button>
                  <Button
                    variant="outline"
                    className=" w-full justify-center gap-2 font-bold"
                  >
                    <Phone />
                    Contacts
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
