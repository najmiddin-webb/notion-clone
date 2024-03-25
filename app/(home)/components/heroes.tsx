"use client";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Heroes() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-3xl md:text-7xl mb-4 font-bold">
        Write Plan Share,with AI at your side
      </h1>
      <p className="font-semibold text-[16px] md:text-2xl">
        Notion is the connected workspace where better, faster work happens
      </p>
      <div className="flex justify-center my-4">
        {!isAuthenticated && !isLoading && (
          <>
            <SignUpButton mode="modal">
              <Button size={"sm"}>
                Get Notion Free <ArrowRight className="w-4 h-4 ml-2 text-3xl" />
              </Button>
            </SignUpButton>
          </>
        )}{" "}
        {isLoading && <Loader />}
        {isAuthenticated && !isLoading && (
          <div className="flex gap-4 items-center">
            <Link href={"/documents"}>
              <Button className="mt-5" size={"sm"}>
                Enter Notion <ArrowRight className="w-4 h-4 ml-2 text-3xl" />
              </Button>
            </Link>
          </div>
        )}
      </div>
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
