"use client";
import Link from "next/link";
import Image from "next/image";
import Preferences from "../preferences";

export default function Header() {
  return (
    <header className="py-2 max-md:py-4 max-md:mt-6 max-md:mb-8 max-md:border-b border-slate-500">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex-center gap-2 max-md:flex-col me-auto">
          <div className="relative w-12 aspect-square">
            <Image src="/imgs/logo.png" alt="logo image" fill sizes="100%" />
          </div>
          <h1>الجمعية الشرعية</h1>
        </Link>
        <Preferences />
      </div>
    </header>
  );
};
