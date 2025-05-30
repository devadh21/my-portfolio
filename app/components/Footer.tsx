"use client";
import Link from "next/link";
import Image from "next/image";

import { socialMediaIcons, menuLinks } from "../data";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className=" dark:bg-bg-color bg-bg-color-light flex flex-col justify-center items-center ">
      {/* menu of links */}
      <div>
        <ul className="dark:text-color-text flex flex-col sm:flex-row sm:gap-3 pt-2 uppercase text-sm">
          {menuLinks.map((link, index) => (
            <Link
              href={`${link.path}`}
              className={`hover:text-primary border-b-2 border-primary ${
                link.path === pathName ? "text-primary" : ""
              } ${link.id >= 7 ? "hidden" : ""} `}
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
      {/* menu of social media */}
      <div className="flex gap-3 p-4">
        {socialMediaIcons.map((socialMediaIcon) => (
          <div key={socialMediaIcon.id} className="style-social-media-icon">
            {socialMediaIcon.icon}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <p className="dark:text-color-text">
          &copy; 2023 - All Rights Reserved.
        </p>
        <p className="dark:text-color-text mx-2">created by dev-adh </p>
        <Image
          src="/img/logo.png"
          alt="logo"
          width={30}
          height={30}
          priority={true}
          className="object-fill rounded-lg "
        />
      </div>
      <div></div>
    </footer>
  );
}
