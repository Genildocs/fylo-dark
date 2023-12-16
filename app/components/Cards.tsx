import React from "react";
import Image from "next/image";
const cards = [
  {
    icon: "/assets/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: "/assets/icon-security.svg",
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: "/assets/icon-collaboration.svg",
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: "/assets/icon-any-file.svg",
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

export default function Cards() {
  return (
    <section className="grid grid-cols-auto-fit gap-20 justify-center">
      {cards.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-white">
          <Image src={item.icon} width={80} height={80} alt="icon" />
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}
