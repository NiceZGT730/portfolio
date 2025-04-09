'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State สำหรับเปิด/ปิดเมนู

  return (
    <nav className="fixed top-0 w-full bg-[rgba(42,42,58,0.9)] shadow-[0_0_5px_var(--color-primary)] z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[var(--color-primary)] neon-glow">
          <Link href="/">PortFolio</Link>
        </h1>
        {/* Hamburger Button (แสดงเฉพาะหน้าจอเล็ก) */}
        <button
          className="md:hidden text-[var(--color-text)] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
        {/* Menu */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-[rgba(42,42,58,0.9)] md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          <li>
            <Link
              href="/"
              className={`block py-2 md:py-0 text-[var(--color-text)] hover:text-[var(--color-primary)] transition ${
                pathname === '/' ? 'text-[var(--color-primary)]' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className={`block py-2 md:py-0 text-[var(--color-text)] hover:text-[var(--color-primary)] transition ${
                pathname === '/#projects' ? 'text-[var(--color-primary)]' : ''
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 md:py-0 text-[var(--color-text)] hover:text-[var(--color-primary)] transition ${
                pathname === '/about' ? 'text-[var(--color-primary)]' : ''
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block py-2 md:py-0 text-[var(--color-text)] hover:text-[var(--color-primary)] transition ${
                pathname === '/contact' ? 'text-[var(--color-primary)]' : ''
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}