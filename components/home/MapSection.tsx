export default function MapSection() {
  return (
    <section className="bg-brand-cream px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-display text-3xl text-dark-navy md:text-4xl">
          Ubícanos
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <div className="w-full overflow-hidden rounded-lg md:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1179347435636!2d-99.19723252416377!3d19.450481440108316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2030025d3e4d3%3A0x5255190a6a4d5799!2sPlayita%20Plebes%20Mariscos!5e0!3m2!1ses!2smx!4v1782454572284!5m2!1ses!2smx"
              title="Mapa de ubicación de Playita Plebes"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-video w-full"
            />
          </div>

          <address
            className="not-italic font-body text-dark-navy md:w-1/3"
            aria-label="Dirección de Playita Plebes"
          >
            <p className="mb-2 font-display text-xl font-semibold">
              Playita Plebes
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              C. Lago Erne 49, Pensil
              <br />
              Miguel Hidalgo, 11489
              <br />
              Ciudad de México, CDMX
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              Martes a Domingo
              <br />
              9:00 AM – 6:00 PM
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
