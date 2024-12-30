import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 glossy text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-sm">
              Welcome to my blog! Here, I share insights, tutorials, and thoughts on web development, programming, and technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">About</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white">Facebook</Link>
              <Link href="https://twitter.com" className="hover:text-white">Twitter</Link>
              <Link href="https://linkedin.com" className="hover:text-white">LinkedIn</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Webify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
