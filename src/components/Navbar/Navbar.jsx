import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { GiSplitCross } from "react-icons/gi";
import Link from "../Link/Link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="p-4 bg-purple-700 text-white">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <GiSplitCross /> : <GiHamburgerMenu />}
      </div>
      <ul
        className={`md:flex justify-between bg-purple-700 items-center absolute md:static duration-1000
      ${open ? "top-14" : "-top-40"}
      `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
