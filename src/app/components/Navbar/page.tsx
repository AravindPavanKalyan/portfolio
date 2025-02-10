"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex w-full h-16 justify-center items-center gap-6">
        {["Home", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-bold text-white cursor-pointer hover:text-gray-700"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 h-16">
        <h2 className="text-white font-bold">My Portfolio</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden fixed gap-2 top-14 right-4 w-20 flex flex-col items-center">
          {/* Menu Items */}
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="w-16 h-16 flex items-center justify-center bg-gray-500/90 font-bold rounded-full cursor-pointer hover:bg-cyan-600 hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Page;
  