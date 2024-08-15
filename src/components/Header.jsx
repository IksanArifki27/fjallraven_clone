import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const [active, setActive] = useState(true);

  const handleToggle = () => {
    if (active) {
      setActive("is-active");
    } else if (!active) {
      setActive("");
    }
  };
  const redirect = () => {
    router.push("/");
  };
  return (
    <nav className="flex items-center justify-between shadow-md ">
      <div className="logo cursor-pointer md:ml-5 mx-40" onClick={redirect}>
        <img src="logo.png" alt="nike" width="100" />
      </div>
      <div className="nav-menu mr-8 ">
        <ul className="font-semibold md:flex hidden">
          <Link className="gap-4 ml-4 hover:text-red-600" href="/">
            Home
          </Link>

          <Link className="gap-4 ml-4 hover:text-red-600" href="/about">
            About
          </Link>
          <Link className="gap-4 ml-4 hover:text-red-600" href="/product">
            Product
          </Link>
        </ul>
        <div>
          <button
            onClick={handleToggle}
            class={`hamburger hamburger--elastic ${active} `}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
