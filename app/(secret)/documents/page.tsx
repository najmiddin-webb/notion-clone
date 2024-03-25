"use client";

import Loader from "@/components/ui/loader";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";

export default function DocumentsPage() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }
  return <div>Documents</div>;
}
