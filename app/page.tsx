import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import { SearchProperty } from "./components/searchProperty";
import PropertyCard from "./components/propertyCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <section
        className="h-screen flex items-center text-white bg-center bg-cover bg-blend-overlay bg-black/50"
        style={{ backgroundImage: `url(capaodacanoa.jpeg)` }}
      >
        <div className="text-center mx-auto">
          {/* <Image
          src="/capaodacanoa.jpeg"
          alt="praia de capao da canoa"
          fill={true}
          
        /> */}
          <h1 className="text-5xl font-semibold">
            Encontre o Imóvel dos Seus Sonhos
          </h1>
          <p className="text-2xl my-8">
            As melhores oportunidades do mercado imobiliário
          </p>
          <SearchProperty />
        </div>
      </section>
      {/* popular */}
      <section className="text-center py-18 px-8">
        <h2 className="text-3xl font-semibold">Imóveis em Destaque</h2>
        <p className="text-xl my-6 text-slate-600">
          Selecionamos as melhores oportunidades para você
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCard bathrooms={3} bedrooms={3} image="/casademo.jpeg" location="Capão da Canoa, RS" title="Casa linda" price={500000} type="venda" area={200}  />
          <PropertyCard bathrooms={3} bedrooms={3} image="/casademo.jpeg" location="Capão da Canoa, RS" title="Casa linda" price={500000} type="aluguel" area={200}  />
          <PropertyCard bathrooms={3} bedrooms={3} image="/casademo.jpeg" location="Capão da Canoa, RS" title="Casa linda" price={500000} type="venda" area={200}  />
          <PropertyCard bathrooms={3} bedrooms={3} image="/casademo.jpeg" location="Capão da Canoa, RS" title="Casa linda" price={500000} type="venda" area={200}  />
        </div>
        <div className="pt-10">
          <Button
            variant={"outline"}
            className="py-4 px-6 border-blue-500 text-blue-500"
          >
            <Link href={'/imoveis'}>VER TODOS OS IMÓVEIS</Link>
            
          </Button>
        </div>
      </section>
    </main>
  );
}
