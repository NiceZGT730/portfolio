export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[rgba(42,42,58,0.9)] shadow-[0_0_5px_var(--color-primary)] z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[var(--color-primary)] neon-glow">
          CyberStack
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
