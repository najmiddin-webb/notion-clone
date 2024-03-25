import Loader from "@/components/ui/loader";
import { ChildProps } from "@/types";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import { SideBar } from "./components";

const DocumentLayout = ({ children }: ChildProps) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="flex gap-2">
      <div className="flex">
        <SideBar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default DocumentLayout;
