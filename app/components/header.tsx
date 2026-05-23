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
    <header className="py-2 px-10 border-b-2 border-blue-950 flex items-center justify-between ">
      <Image src="/lhimoveis.png" alt="Logo" width={150} height={50} />
      <NavigationMenu>
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
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Heart className="stroke-red-600 hover:fill-red-600 cursor-pointer"  />
        <Button variant="outline">ENTRAR / CADASTRAR</Button>
      </div>
    </header>
  );
};
