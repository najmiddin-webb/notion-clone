import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="mt-24 flex justify-between items-center">
      <div className="">
        <Logo />
      </div>
      <div>
        <Button size={"sm"} variant={"ghost"}>
          Privacy Policy
        </Button>
        <Button size={"sm"} variant={"ghost"}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
}
