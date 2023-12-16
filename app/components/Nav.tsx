"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { raleway } from "../fonts";
import { motion } from "framer-motion";

const listMenu: Array<string> = ["Features", "Team", "Sign In"];

export default function Nav() {
  return (
    <nav className="flex justify-between pl-5 pr-6">
      <Image src={"assets/logo.svg"} width={80} height={24} alt="logo" />
      <div>
        <ul className="flex gap-6 text-white">
          {listMenu.map((item, index) => (
            <Link href="#" key={index}>
              <motion.li
                className={`${raleway.className} text-xs font-normal`}
                initial={{ textDecoration: "none" }}
                whileHover={{ textDecoration: "underline" }}
              >
                {item}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
