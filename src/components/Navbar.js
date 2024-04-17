"use client";

import Link from "next/link";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();
  const router = useRouter()
  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  const scroll = (id) => {
   const element = document.getElementById(id);
    element.scrollIntoView();
  }

  return (
    <div
      ref={navbar}
      className={`${theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
        } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">

        <h2 className="text-3xl" onClick={() => router.push("/")}>
          <span className="text-rose-600">C</span>ityStead.
        </h2>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
              } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${theme === "dark" ? "text-white" : "text-black"
                } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "services", "pricing",].map((link) => (
              <li
                key={link}
                className={`capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600 cursor-pointer`}
                onClick={() => {
                  setSelectedItem(link)
                  scroll(link)
                }}
              >
                <p >{link}</p>
              </li>
            ))}
            <li
              className={`
                capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}

            >
              <Link href={`/contact`}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full">
            <Link href={"#pricing"}>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
