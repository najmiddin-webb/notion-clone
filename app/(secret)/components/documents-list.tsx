import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React, { useState } from "react";
import Item from "./item";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface DocumentListProps {
  documentId?: Id<"documents">;
  level?: number;
}

export default function DocumentsList({
  documentId,
  level = 0,
}: DocumentListProps) {
  const [expended, setExpended] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const onExpended = (documentId: string) => {
    setExpended((prev) => ({
      ...prev,
      [documentId]: !prev[documentId],
    }));
  };
  const documents = useQuery(api.document.getDocuments, {
    parentDocument: documentId,
  });

  const onRedirect = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <>
        <Item.Skeleton level={level} />

        {level === 0 && (
          <>
            <Item.Skeleton level={level} />
            <Item.Skeleton level={level} />
          </>
        )}
      </>
    );
  }

  return (
    <div>
      <p
        className={cn(
          "hidden text-sm font-medium text-muted-foreground/80",
          expended && "last:block"
        )}
        style={{ paddingLeft: level ? `${level * 12 + 25}px` : undefined }}
      >
        No documents
      </p>

      {documents?.map((document) => (
        <div key={document._id}>
          <Item
            label={document.title}
            level={level}
            id={document._id}
            expended={expended[document._id]}
            onExpended={() => onExpended(document._id)}
            onClick={() => onRedirect(document._id)}
          />
          {expended[document._id] && (
            <DocumentsList documentId={document._id} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
}
