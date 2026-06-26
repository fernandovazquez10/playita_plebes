import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-brand-cream py-10 px-6">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
        {/* Logo + Casa Beltrán */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Playita Plebes logo"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
          <span className="text-brand-cream font-body text-sm">
            × Casa Beltrán
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-body text-sm text-brand-cream">Síguenos en nuestras redes</p>
        <nav aria-label="Redes sociales" className="flex gap-5">
          <a
            href="https://instagram.com/@playitaplebes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-brand-cream hover:text-brand-teal transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/people/Playita-Plebes-mariscos/61581658877677/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-brand-cream hover:text-brand-teal transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@playitaplebes_oficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-brand-cream hover:text-brand-teal transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </nav>
        </div>

        {/* Made with love */}
        <p className="text-brand-cream font-body text-xs flex items-center gap-1">
          Made with love
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </p>
      </div>
    </footer>
  );
}
