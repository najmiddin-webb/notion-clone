import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React, { useState } from "react";
import Item from "./item";

interface DocumentListProps {
  documentID?: Id<"documents">;
  level?: number;
}

export default function DocumentsList({
  documentID,
  level = 0,
}: DocumentListProps) {
  const [expended, setExpended] = useState<Record<string, boolean>>({});

  const onExpended = (documentID: string) => {
    setExpended((prev) => ({
      ...prev,
      [documentID]: !prev[documentID],
    }));
  };

  const documents = useQuery(api.documents.getDocuments, {
    parentDocument: documentID,
  });

  return (
    <div className="">
      {documents?.map((document) => (
        <div key={document._id}>
          <Item
            label={document.title}
            level={level}
            id={document._id}
            expended={expended[document._id]}
            onExpended={() => onExpended(document._id)}
          />
          {expended[document._id] && (
            <DocumentsList documentID={document._id} level={level + 1} />
          )}
        </div>
      ))}
    </div>
  );
}
