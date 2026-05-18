import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import services from "@/shared/data/services";
import socialNetworks from "@/shared/data/social-networks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center border-primary border-t-3 bg-[#112239] pt-16 pb-8 text-white">
      <Container
        animation={false}
        className="mb-12 grid grid-cols-1 items-start gap-12 px-4 md:grid-cols-2 lg:grid-cols-4"
      >
        <div className="flex flex-col gap-4">
          <Link
            href={routes.path}
            className="font-semibold text-4xl text-secondary-foreground uppercase"
          >
            HYGACON
          </Link>
          <p className="text-slate-300 text-sm leading-relaxed">
            Empresa de ingeniería y construcción con foco en saneamiento,
            infraestructura y servicios generales.
          </p>
          <div className="flex gap-4">
            {socialNetworks.map((socialNetwork) => (
              <Link
                key={socialNetwork.name}
                href={socialNetwork.href}
                target="_blank"
                className="flex items-center justify-center rounded-full bg-slate-800 p-3 transition-colors duration-300 hover:bg-primary"
              >
                <socialNetwork.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-bold text-primary text-xs uppercase tracking-widest">
            Navegación
          </h4>
          <ul className="space-y-3 pl-4">
            {[
              routes.organizacion,
              routes.servicios,
              routes.atencion,
              routes.contacto,
            ].map((route) => (
              <li key={route.name} className="group flex items-center gap-2">
                <div className="transform-[width] h-0.5 w-0 rounded-full bg-primary duration-300 group-hover:w-3"></div>
                <Link
                  href={route.path}
                  className="text-sm text-white/70 transition-colors group-hover:text-white"
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-bold text-primary text-xs uppercase tracking-widest">
            Servicios
          </h4>
          <ul className="space-y-3 pl-4">
            {services.map((service) => (
              <li key={service.name} className="group flex items-center gap-2">
                <div className="transform-[width] h-0.5 w-0 rounded-full bg-primary duration-300 group-hover:w-3"></div>
                <Link
                  href={routes.servicios.path}
                  className="text-sm text-white/70 transition-colors group-hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-bold text-primary text-xs uppercase tracking-widest">
            Contacto
          </h4>
          <div className="space-y-6">
            <div className="flex gap-3">
              <MapPin className="shrink-0 text-primary" size={20} />
              <div className="text-slate-300 text-sm">
                <p className="mb-1 font-bold text-slate-100 text-xs uppercase">
                  Oficina Principal
                </p>
                <p>Av. Libertad 2058, Distrito de Cocachacra, Arequipa.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="shrink-0 text-primary" size={20} />
              <p className="text-slate-300 text-sm">974628766</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="shrink-0 text-primary" size={20} />
              <p className="text-slate-300 text-sm">hygaconperu@gmail.com</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full border-white/20 border-t pt-8"></div>
      <Container
        animation={false}
        className="flex flex-col items-center justify-between gap-4 md:flex-row"
      >
        <p className="text-center text-slate-400 text-xs md:text-left">
          © {currentYear} Consorcio HYGACON. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-slate-400 text-xs">
          <Link href="#" className="transition-colors hover:text-white">
            Política de privacidad
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            Terminos de uso
          </Link>
        </div>
      </Container>
    </footer>
  );
}
