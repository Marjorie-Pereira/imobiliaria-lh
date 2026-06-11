import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
export const Header = () => {
  return (
    <header className="py-2 px-10 flex items-center justify-between fixed top-0 right-0 left-0 z-10 h-20 bg-white/90 backdrop-blur-md">
     <Link href={'/'}>
     <Image src="/lhimoveis.png" alt="Logo" width={150} height={50} />
     </Link>
      
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-normal">
              Comprar
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="text-lg">Casas</NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Apartamentos
              </NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Terrenos
              </NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Sobrados
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-normal">
              Alugar
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="text-lg">Casas</NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Apartamentos
              </NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Terrenos
              </NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Sobrados
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md font-normal">
              Anunciar
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="text-lg">Casas</NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Apartamentos
              </NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Terrenos
              </NavigationMenuLink>
              <NavigationMenuLink className="text-lg">
                Sobrados
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle() + " text-md font-normal"}
            >
              <Link href="/docs">Sobre Nós</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle() + " text-md font-normal"}
            >
              <Link href="/contato">Contato</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Heart className="stroke-red-600 hover:fill-red-600 cursor-pointer"  />
        <Button variant="outline">ENTRAR / CADASTRAR</Button>
      </div>
    </header>
  );
};
