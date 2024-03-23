import { ChildProps } from "@/types";
import React from "react";
import { Navbar } from "./components";

export default function HomeLayout({ children }: ChildProps) {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-24">{children}</main>
    </div>
  );
}
