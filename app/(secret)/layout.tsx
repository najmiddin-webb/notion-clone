"use client";

import { ChildProps } from "@/types";
import React from "react";
import { SideBar } from "./components";
import Loader from "@/components/ui/loader";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const secretLayout = ({ children }: ChildProps) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex-1 h-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default secretLayout;
