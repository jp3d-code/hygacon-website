import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import { LinkBtm } from "@/shared/components/ui/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { routes } from "@/shared/config/routes";
import socialNetworks from "@/shared/data/social-networks";

const navItems = [
  routes.organizacion,
  routes.servicios,
  routes.clientes,
  routes.atencion,
];

function HeaderDesktop() {
  return (
    <nav className="hidden items-center gap-8 font-medium text-sm md:flex">
      <div className="flex items-center gap-4">
        {navItems.map((route) => (
          <LinkBtm
            variant="underline"
            key={route.path}
            href={route.path}
            className="text-xs uppercase"
          >
            {route.name}
          </LinkBtm>
        ))}
      </div>
      <div className="flex gap-1">
        {socialNetworks.map((network) => (
          <Link
            key={network.name}
            href={network.href}
            target="_blank"
            className="text-gray-500 transition-colors duration-300 hover:text-gray-400"
          >
            <network.icon size={18} />
          </Link>
        ))}
      </div>
      <LinkBtm
        variant="default"
        size={"lg"}
        href={routes.contacto.path}
        className="text-sm uppercase"
      >
        {routes.contacto.name}
      </LinkBtm>
    </nav>
  );
}

function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Abrir menu"
            className={"md:hidden"}
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="right" className="w-72 py-10">
        <Link
          href={routes.path}
          className="flex w-full items-center justify-center p-6 font-condensed font-semibold text-xl uppercase"
        >
          HYGACON
        </Link>
        <nav className="flex h-full flex-col items-center gap-3 p-4 font-medium">
          {navItems.map((route) => (
            <LinkBtm
              variant="underline"
              key={route.path}
              href={route.path}
              className="text-xs uppercase"
            >
              {route.name}
            </LinkBtm>
          ))}
          <div className="pt-2">
            <LinkBtm
              variant="default"
              size={"lg"}
              href={routes.contacto.path}
              className="text-sm uppercase"
            >
              {routes.contacto.name}
            </LinkBtm>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-zinc-500/20 border-b bg-background px-4 py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href={routes.path}
          className="font-bold font-condensed text-3xl uppercase"
        >
          HYGACON
        </Link>
        <HeaderDesktop />
        <HeaderMobile />
      </div>
    </header>
  );
}
