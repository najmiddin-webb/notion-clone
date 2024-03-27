"use client";

import { Loader2 } from "lucide-react";
import React from "react";

export default function Loader() {
  return (
    <div>
      <Loader2 className="text-muted-foreground animate-spin" />
    </div>
  );
}
