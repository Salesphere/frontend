"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaRocket } from "react-icons/fa6";
import { GoShieldLock } from "react-icons/go";
import { TbDroplets } from "react-icons/tb";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiSolidDonateHeart } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <nav
      className={`hidden lg:flex flex-col justify-between fixed   max-w-[300px] left-0 top-0 h-screen  bg-slate-900 border-r-[0.5px] border-slate-700 z-[2000000]
            ${isExpanded ? "w-[300px]" : "w-[80px]"}`}
      style={{ transition: "width 300ms ease-in-out" }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col">
        <Link
          href="/"
          className={` group pl-5 flex h-[80px] border-b-[0.5px] border-slate-700 items-center text-white font-bold text-[16px]
                           `}
        >
          <div className={` transition ease duration-150 relative ] `}>
            <figcaption
              href="/"
              className=" font-extrabold bg-slate-700 rounded-md size-10  flex items-center justify-center "
            >
              S
            </figcaption>
          </div>
          <span
            className={`ml-3 whitespace-nowrap  ${
              isExpanded ? "block" : "hidden"
            } transition ease-in-out duration-150`}
          >
            SALESPHERE
          </span>
        </Link>

        <ul className=" pt-6 flex flex-col gap-6 mt-10 w-[240px]">
          {pages.map((page) => (
            <li key={page.path} className="relative">
              <Link
                href={page.path}
                className={` group pl-5 flex items-center text-white font-bold text-[16px]
                            ${pathname === page.path ? "" : ""}`}
              >
                <div
                  className={`${
                    pathname === page.path ? "" : ""
                  }  transition ease duration-150 relative `}
                >
                  <h5 className=" size-10 transition-colors ease-linear duration-150 hover:bg-slate-700 rounded-md text-[24px] grid place-content-center relative group ">
                    {page.icon}
                  </h5>
                </div>
                <span
                  className={`ml-3 whitespace-nowrap  ${
                    isExpanded ? "block" : "hidden"
                  } transition ease-in-out duration-150`}
                >
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;

export const pages = [
  {
    name: "Create Token",
    icon: <FiPlusCircle />,
    path: "create-token",
  },
  {
    name: "Airdrop Token",
    icon: <TbDroplets />,
    path: "airdrop-token",
  },
  {
    name: "Crowdfundings",
    icon: <BiSolidDonateHeart />,
    path: "crowdfundings",
  },
  {
    name: "Create Sale",
    icon: <AiOutlineDollarCircle />,
    path: "create-sale",
  },
  {
    name: "Join Public sale",
    icon: <FaRocket />,
    path: "/public-sale",
  },
  {
    name: "Join Private Sale",
    icon: <GoShieldLock />,
    path: "/private-sale",
  },
];
