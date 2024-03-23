import Image from "next/image";
import React from "react";

export default function Clients() {
  return (
    <div className="flex justify-center py-4 text-center">
      <div className="">
        <h2 className="text-4xl font-semibold mt-7">
          Million run on Notion every day
        </h2>
        <p className="text-xl font-semibold mt-2">
          Powering the world&lsquo;best teams , from next-generation startups to
          established enterprises
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client}
              width={50}
              height={50}
              alt="Clients"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const clients = [
  "/clients/1.svg",
  "/clients/2.svg",
  "/clients/3.svg",
  "/clients/4.svg",
  "/clients/5.svg",
  "/clients/6.svg",
  "/clients/7.svg",
  "/clients/8.svg",
  "/clients/9.svg",
  "/clients/10.svg",
  "/clients/11.svg",
  "/clients/12.svg",
  "/clients/13.svg",
  "/clients/14.svg",
];
