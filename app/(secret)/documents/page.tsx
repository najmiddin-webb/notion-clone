"use client";

import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DocumentsPage() {
  const { user } = useUser();
  const createDocument = useMutation(api.document.createDocument);

  const onCreateDocument = () => {
    createDocument({
      title: "Document",
    });
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center space-y-4 flex-col">
        <Image
          src={"/note.svg"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover dark:hidden"
        />
        <Image
          src={"/note-dark.svg"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover hidden dark:block"
        />
        <h2>
          Welcome to <b> {user?.fullName}</b>`s documents page!
        </h2>
        <Button className="flex gap-2 items-center" onClick={onCreateDocument}>
          <Plus className="w-4 h-4" />
          Create a new blank
        </Button>
      </div>
    </>
  );
}
