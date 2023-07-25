import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex items-center justify-between px-10 bg-blue-900 ">
      <div className="text-xl text-white">Header</div>
      <div className="flex items-center justify-between text-gray-400">
        <div className="p-5">
          <Link href="/">Home</Link>
        </div>
        <div className="p-5">
          <Link href="/products">Products</Link>
        </div>
        <div className="p-5">
          <Link href="/users">Users</Link>
        </div>
        <div className="p-5">
          <Link href="/notes">Notes</Link>
        </div>
      </div>
    </div>
  );
}
