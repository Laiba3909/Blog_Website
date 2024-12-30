
interface Ibar {
  image: string;
  name: string;
  link: string;
  style?:string;
}

import Link from "next/link";
import Image from "next/image";

export default function Bar(prop: Ibar) {
  return (
    <div className="relative">
      <Image 
        src={prop.image} 
        alt="" 
        width={1200} 
        height={100} 
        className="w-full h-72 object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-70"></div>
      <div className="absolute inset-0 flex justify-center items-center px-4 md:px-8">
        <h1 className="text-[#7dd163] text-2xl md:text-3xl text-center">
          <Link className={prop.style}  href={'/'}>Home</Link> &gt; <Link className={prop.style}  href={prop.link}>{prop.name}</Link> &gt;
        </h1>
      </div>
    </div>
  );
}
