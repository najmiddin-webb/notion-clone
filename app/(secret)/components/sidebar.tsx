"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, ChevronsRight, MenuIcon } from "lucide-react";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import DocumentsPage from "../documents/page";
import DocumentsList from "./documents-list";

export default function SideBar() {
  const sideBarRef = useRef<ElementRef<"div">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);

  const isMobile = useMediaQuery("(max-width: 767px)");

  console.log(isMobile);

  const [collapsed, setCollapsed] = useState(isMobile);
  const [isReseting, setIsreseting] = useState(false);
  const isResizing = useRef(false);

  const collapse = () => {
    if (sideBarRef.current && navbarRef.current) {
      setCollapsed(true);
      setIsreseting(true);
      sideBarRef.current.style.width = "0";
      navbarRef.current.style.width = "100%";
      navbarRef.current.style.left = "0";
      setTimeout(() => setIsreseting(false), 400);
    }
  };

  const reset = () => {
    if (sideBarRef.current && navbarRef.current) {
      setCollapsed(false);
      setIsreseting(true);

      sideBarRef.current.style.width = "200px";
      navbarRef.current.style.width = "calc(100% - 200px)";
      navbarRef.current.style.left = "200px";
      setTimeout(() => setIsreseting(false), 400);
    }
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizing.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizing.current) return;

    let newWidth = event.clientX;

    if (newWidth < 200) {
      newWidth = 200;
    }
    if (newWidth > 500) {
      newWidth = 500;
    }

    if (sideBarRef.current && navbarRef.current) {
      sideBarRef.current.style.width = newWidth + "px";
      navbarRef.current.style.width = "calc(100% - " + newWidth + "px)";
      navbarRef.current.style.left = newWidth + "px";
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      reset();
    }
  }, [isMobile]);

  return (
    <>
      <div
        className={cn(
          "group w-72 min-h-screen relative backdrop-blur-xl bg-secondary overflow-y-auto transition duration-300 flex flex-col",
          isReseting && "transition-all duration-500",
          isMobile && "w-0"
        )}
        ref={sideBarRef}
      >
        <div
          role="button"
          onClick={collapse}
          className="absolute  top-2 right-2 dark:hover:bg-black hover:bg-black/20 transition duration-300 rounded p-1"
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>

        <div>User profile</div>

        <DocumentsList />
        <div
          onMouseDown={handleMouseDown}
          className="absolute top-00 right-0 w-1 h-screen bg-slate-500 opacity-0 cursor-ew-resize group-hover:opacity-100 transition duration"
        ></div>
      </div>
      <div
        ref={navbarRef}
        onClick={reset}
        className={cn(
          "z-50 w-[calc(100% - 200px)]",
          isReseting && "transition-all duration-500",
          isMobile && "w-full left-0"
        )}
      >
        <nav className={cn("bg-transparent py-2")}>
          {collapsed && <ChevronsRight role="button" className="text-2xl " />}
        </nav>
        <DocumentsPage />
      </div>
    </>
  );
}
