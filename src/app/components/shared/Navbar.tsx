"use client";

import Link from "next/link";
import React from "react";
import { navLinks, phoneNumber, publicPhoneNumber } from "../constants";
import { INavProps } from "@/app/types";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className="navbar">
      <Link href="/">
        <h1 className="h3-bold mr-10">Дагон</h1>
      </Link>
      <ul className="nav-links">
        {navLinks().map((link: INavProps) => {
          const isActive = pathname === link.route;

          return (
            <li key={link.label} className="nav-link">
              <Link href={link.route}>
                <h4 className={`body-medium ${isActive && "text-orange-300"}`}>
                  {link.label}
                </h4>
              </Link>
            </li>
          );
        })}
      </ul>
      <a href={`tel:${phoneNumber}`} className="body-bold ml-auto hidden sm:flex">{publicPhoneNumber}</a>
    </section>
  );
};

export default Navbar;
