"use client";

import React from "react";
import { navLinks } from "../constants";
import { INavProps } from "@/app/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <ul className="bottom-links">
        {navLinks().map((link: INavProps) => {
          const isActive = pathname === link.route;

          return (
            <li
              key={link.label}
              className={`bottom-link ${isActive && "bg-orange-300"}`}
            >
              <Link href={link.route}>
                <Image src={link.imgURL} alt={link.label} width={25} height={25} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Bottombar;
