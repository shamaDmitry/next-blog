"use client";

import { useActivePath } from "@/hooks/useActivePath";
import classNames from "classnames";
import Link from "next/link";

const links = [
  {
    title: "part 1",
    href: "/",
  },
  {
    title: "part 2",
    href: "/part2",
  },
]

const Header = () => {
  const checkActivePath = useActivePath();

  return (
    <header className="px-4 py-6 font-serif text-2xl font-bold text-center">
      <Link href="/">BLOG</Link>

      <nav className={classNames("flex justify-center p-2 font-semibold lowercase gap-x-4")}>

        {
          links.map(link => (
            <Link
              key={link.title}
              href={link.href}
              className={classNames({
                "underline": checkActivePath(link.href)
              })}
            >
              {link.title}
            </Link>
          ))
        }
      </nav>
    </header>
  );
}

export default Header;
