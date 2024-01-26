"use client";

import { useUIStore } from "@/store/uiStore";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaBars, FaHouseChimney, FaUsers } from "react-icons/fa6";

function useClickOutside(ref: any, onClickOutside: Function) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default function Header() {
  const { isNavigationOpen, openNavigation, closeNavigation } = useUIStore();
  const navigationMenu = useRef<HTMLInputElement>(null);
  useClickOutside(navigationMenu, () => {
    closeNavigation();
  });

  return (
    <div>
      <button
        onClick={openNavigation}
        aria-controls="navigation-menu"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FaBars className="w-6 h-6" />
      </button>

      <aside
        ref={navigationMenu}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isNavigationOpen ? "" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                onClick={closeNavigation}
              >
                <FaHouseChimney className="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" />
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                onClick={closeNavigation}
              >
                <FaUsers className=" w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">About us</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
