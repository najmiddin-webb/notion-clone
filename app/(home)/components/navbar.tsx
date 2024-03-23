"use client";

import React from "react";
import Logo from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import useScrolled from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        " z-50 backdrop-blur-md  transition-all duration-150 fixed top-0 left-0 flex items-center w-full justify-between",
        scrolled && "border-b-2 shadow-md py-1"
      )}
    >
      <Logo />
      <div className="flex gap-3 items-center">
        <Button size={"sm"} variant={"ghost"}>
          Log in
        </Button>
        <Button size={"sm"}>Get Notion Free</Button>
        <ModeToggle />
      </div>
    </div>
  );
}
