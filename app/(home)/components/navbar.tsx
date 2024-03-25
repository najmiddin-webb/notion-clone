"use client";

import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import useScrolled from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import {
  SignInButton,
  SignInWithMetamaskButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import Loader from "@/components/ui/loader";

export default function Navbar() {
  const scrolled = useScrolled();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        " z-50 backdrop-blur-md  transition-all duration-150 fixed top-0 left-0 flex items-center w-full justify-between",
        scrolled && "border-b-2 shadow-md py-1"
      )}
    >
      <Logo />
      <div className="flex gap-3 items-center">
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button size={"sm"} variant={"ghost"}>
                Log in
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button size={"sm"}>Get Notion Free</Button>
            </SignUpButton>
          </>
        )}{" "}
        {isLoading && <Loader />}
        {isAuthenticated && !isLoading && (
          <div className="flex gap-4 items-center">
            <Link href={"/documents"}>
              <Button size={"sm"} variant={"outline"}>
                Enter Notion
              </Button>
            </Link>
            <UserButton />
          </div>
        )}
        <ModeToggle />
      </div>
    </div>
  );
}
