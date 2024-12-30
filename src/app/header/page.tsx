'use client';

import Image from 'next/image';
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import 'animate.css';
export default function Header() {
  const [data, setData] = useState<{
    imageUrl?: string;
    colorpick?: string;
    navigationLinks?: { label: string; linkname: string }[]; 
  } | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const query = await client.fetch(`*[_type == "header"][0]{
        "imageUrl": image.asset->url,
        colorpick,
        navigationLinks[] {
          label,
          linkname
        }
      }`);
      setData(query);
    };
    fetchData();
  }, []);

  const colorDefault = data?.colorpick || "#ffffff";
  const imageUrl = data?.imageUrl || null;

  return (
    <header
      style={{ color: colorDefault }}
      className="fixed top-0 w-full z-50 shadow-md animate__animated animate__fadeInDown"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          {imageUrl && (
            <Image
              className="object-contain mt-7 -ml-7"
              src={imageUrl}
              alt="Logo"
              width={200}
              height={20}
            />
          )}
        </div>

        <nav className="hidden md:flex space-x-8">
          {data?.navigationLinks?.map((link, index) => (
            <Link
              key={index}
              href={link.linkname ? `/${link.linkname}` : '/'}
              className="text-white hover:text-[#7dd163] transition font-medium relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7dd163] transition-all duration-300 group-hover:w-full group-hover:scale-x-100 scale-x-0"></span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "x" : "≡"}
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft'}  bg-black shadow-lg`}>
      {isMenuOpen && (
      
          <nav className="flex flex-col space-y-4 p-4">
            {data?.navigationLinks?.map((link, index) => (
              <Link
                key={index}
                href={link.linkname ? `/${link.linkname}` : '/'}
                className="text-white  hover:text-yellow-400 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
      
      )}
        </div>
    </header>
  );
}
