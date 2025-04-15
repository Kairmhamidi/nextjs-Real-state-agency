
"use client"
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const {user,isSignedIn}=useUser()

  const pathname=usePathname();
    useEffect(()=>{
    console.log(pathname)
  },[])
  return (
    <div className="flex md:px-10 px-3 justify-between items-center py-5 shadow-sm fixed top-0 w-full z-100">
      <div className="left flex justify-between items-center gap-30">
        <Image src={"/logo.svg"} width={200} height={200} alt="logo" />
        <ul className="hidden md:flex gap-5 font-medium text-sm items-center-safe ">
          <Link href={"/"}>
            <li
              className={`cursor-pointer hover:text-blue-500 transition-colors duration-200 ${
                pathname == "/" ? "text-blue-600" : ""
              }`}
            >
              For Sale
            </li>
          </Link>
          <Link href={"/forrent"}>
            <li
              className={`cursor-pointer hover:text-blue-500 transition-colors duration-200 ${
                pathname === "/forrent" ? "text-blue-600" : ""
              }`}
            >
              For Rent
            </li>
          </Link>
          <Link href={"/agent"}>
            <li
              className={`cursor-pointer hover:text-blue-500 transition-colors duration-200 ${
                pathname === "/agent" ? "text-blue-600" : ""
              }`}
            >
              Agent finder{" "}
            </li>
          </Link>
        </ul>
      </div>
      <div className="right flex gap-4">
        <Link href={'/add-new-listing'}>
          <Button variant={"mycolor"}>
            <PlusIcon size={40} /> Post Your Ad
          </Button>
        </Link>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button variant={"secondary"} className={"cursor-pointer"}>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
