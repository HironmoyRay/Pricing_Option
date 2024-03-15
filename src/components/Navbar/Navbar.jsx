import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [open,setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="p-4 bg-purple-700 text-white">
        <div className="text-2xl md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ? <RxCross1 /> : <IoMenu></IoMenu>
            }
        </div>
      <ul className={`md:flex justify-between bg-purple-700 items-center absolute md:static duration-1000
      ${open?'top-14':'-top-40'}
      `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
