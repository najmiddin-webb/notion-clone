import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div>
      <Link href={"/"} className="flex items-center gap-2 px-10 py-4">
        <Image
          src={"/logo-light.svg"}
          className="dark:hidden"
          width={50}
          height={50}
          alt="Logo"
        />

        <Image
          src={"/logo-dark.svg"}
          className="hidden dark:block"
          width={50}
          height={50}
          alt="Logo"
        />
        <p className="text-xl font-semibold">Notion</p>
      </Link>
    </div>
  );
}
