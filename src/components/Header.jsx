import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sidebarRef = useRef(null);

  const navItems = [
    { name: "خانه" },
    { name: "درباره ما" },
    { name: "مطالعات موردی" },
    { name: "نظرات مشتریان" },
    { name: "سوالات متداول" },
    { name: "تماس با ما" },
  ];

  const buttons = ["93749905024+",'تماس حالا'];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="2xl:w-[80%] lg:w-[90%] w-[95%] py-3 flex justify-between items-center mx-auto" dir="rtl">
      {/* Logo */}
      <div className="w-fit">
       <img src={Logo} alt="لوگو" width="60px" height="10px" />
      </div>

      {/* Desktop navigation menu */}
      <ul className="lg:flex hidden xl:space-x-reverse xl:space-x-6 space-x-reverse space-x-3">
        {navItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <div className="flex items-center">
              <span className="text-gray-800 font-medium">{item.name}</span>
              {item.dropdown && (
                <IoMdArrowDropdown color="black" className="2xl:text-lg xl:text-sm text-[15px]" />
              )}
            </div>
            {item.dropdown && (
              <ul className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded shadow-2xl z-10">
                {item.dropdown.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 whitespace-nowrap hover:bg-gray-100 text-sm text-gray-700"
                  >
                    {subItem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop action buttons */}
      <div className="button flex gap-x-2 gap-y-3 mt-3 flex-wrap">
        {buttons.map((label, index) => (
          <Button key={index} text={label} />
        ))}
      </div>

      {/* Mobile menu icon */}
      <div className="lg:hidden">
        <FiMenu color="black" size={25} onClick={() => setIsOpen(true)} />
      </div>

      {/* Mobile sidebar menu */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full sm:w-[50%] w-full bg-white shadow-2xl transition-transform duration-300 z-50 py-5 px-5 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        dir="rtl"
      >
        {/* Sidebar header */}
        <div className="border-b flex justify-between items-center mb-4 pb-2">
          <img src={Logo} alt="لوگو" className="w-28" />
          <button
            onClick={() => {
              setIsOpen(false);
              setActiveDropdown(null);
            }}
          >
            <IoMdClose className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* Mobile nav items */}
        <ul className="overflow-y-auto h-[calc(100vh-100px)]">
          {navItems.map((item, index) => (
            <li key={index} className="mb-2 text-black">
              <div
                className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  item.dropdown
                    ? setActiveDropdown(
                        activeDropdown === index ? null : index
                      )
                    : setIsOpen(false)
                }
              >
                <span className="font-medium">{item.name}</span>
                {item.dropdown &&
                  (activeDropdown === index ? (
                    <IoMdArrowDropup />
                  ) : (
                    <IoMdArrowDropdown />
                  ))}
              </div>

              {/* Dropdown submenu in mobile */}
              {item.dropdown && activeDropdown === index && (
                <ul className="mr-4 pr-2 border-r-2 border-gray-200">
                  {item.dropdown.map((service, subIndex) => (
                    <li
                      key={subIndex}
                      className="p-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
