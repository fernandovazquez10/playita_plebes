import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-navy">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-dark-navy rounded">
          <Image
            src="/logo_small.png"
            alt="Playita Plebes logo"
            width={48}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <ul className="flex items-center gap-6 font-body text-sm text-brand-cream">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-dark-navy rounded"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="transition-colors hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-dark-navy rounded"
            >
              Menú
            </Link>
          </li>
          <li>
            <Link
              href="/nosotros"
              className="transition-colors hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-dark-navy rounded"
            >
              Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
