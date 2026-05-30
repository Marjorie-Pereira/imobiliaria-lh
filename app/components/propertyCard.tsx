import Image from "next/image";
import { MapPin } from "lucide-react";
import { Bed } from "lucide-react";
import { Bath } from "lucide-react";
import { Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";


type PropertyCardProps = {
  className?: string | undefined;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area?: number;
  image: string;
  price: number;
  type: "venda" | "aluguel";
};

export default function PropertyCard({
  className,
  title,
  location,
  bedrooms,
  bathrooms,
  area = 0,
  image,
  price,
  type,
}: PropertyCardProps) {
    const formatted = price.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
  const badgeColor = type == 'venda' ? 'bg-blue-500' : 'bg-green-500'
  return (
    <div className={`max-w-100 text-start min-w-[30%] h-110 rounded-md  shadow-xl   ${className}`}>
     
      <div className="relative w-full h-1/2 overflow-hidden rounded-t-md ">
        <Image
          alt="property cover"
          src={image}
          fill={true}
          objectFit="cover"
          className="w-full h-full"
        />
         <Badge className={`${badgeColor} absolute top-4 left-4`} >{type.toUpperCase()}</Badge>
         <Button variant={'secondary'} className="absolute rounded-full right-4 top-4 p-2 w-10 h-10"><Heart className="w-10 h-10 size-6!"/></Button>
      </div>
      {/* bottom */}
      <div className="m-6 text-start border-b border-slate-300 pb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-slate-500 mt-2 flex items-center gap-1">
          <MapPin size={16} /> {location}
        </p>
        <div className="flex gap-6 mt-2 text-slate-500 ">
          <p className="flex gap-2 items-center">
            <Bed size={16} /> {bedrooms}
          </p>
          <p className="flex gap-2 items-center">
            <Bath size={16} /> {bathrooms}
          </p>
          <p className="flex gap-2 items-center">
            <Square size={16} /> {area}m²
          </p>
        </div>
      </div>
      <div className="m-6 flex justify-between">
        <h2 className="text-blue-500 text-2xl">{formatted}</h2>
        <Button variant={"ghost"} className="text-blue-500">VER MAIS <ChevronRight /> </Button>
      </div>
    </div>
  );
}
