import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Heroes() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-3xl md:text-7xl mb-4 font-bold">
        Write Plan Share,with AI at your side
      </h1>
      <p className="font-semibold text-[16px] md:text-2xl">
        Notion is the connected workspace where better, faster work happens
      </p>
      <Button className="mt-5" size={"sm"}>
        Get Notion Free <ArrowRight className="w-4 h-4 ml-2 text-3xl" />
      </Button>
      <div className="flex justify-center items-center">
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={"/home-light.svg"}
            className="dark:hidden object-cover absolute"
            alt="Logo"
            fill
          />
          <Image
            src={"/home-dark.svg"}
            className="hidden dark:block object-cover absolute"
            alt="Logo"
            fill
          />
        </div>
      </div>
    </div>
  );
}
