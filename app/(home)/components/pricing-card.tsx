"use client";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PricingShop {
  title: string;
  subtitle: string;
  options: string;
  price: string;
}

export default function PricingCard({
  title,
  subtitle,
  options,
  price,
}: PricingShop) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div>
      <div className="flex mt-10 flex-col p-6 mx-auto max-w-lg h-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3">{subtitle}</p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-bold">
            {price !== "Free" && "$"}
            {price}
          </span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        {!isAuthenticated && isLoading && (
          <SignInButton>
            <Button size={"sm"}>Get Notion Free</Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <SignInButton>
            <Button size={"sm"}>
              <Link href={"/documents"}>Get Started</Link>
            </Button>
          </SignInButton>
        )}

        <ul role="list" className="space-y-4 text-left mt-8">
          {options.split(", ").map((option, index) => (
            <li
              key={index}
              className="text-gray-500 dark:text-gray-400 flex gap-2 items-center"
            >
              <Check className="dark:text-green-600 text-2xl w-4 h-4" />
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
