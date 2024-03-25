"use client";

import { ChildProps } from "@/types";
import React from "react";
import { SideBar } from "./components";

const secretLayout = ({ children }: ChildProps) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default secretLayout;
