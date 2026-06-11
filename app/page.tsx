import { Button } from "@/components/ui/button";
import { Building, House, Mail, MapPin, Phone } from "lucide-react";
import { SearchProperty } from "./components/searchProperty";
import PropertyCard from "./components/propertyCard";
import Link from "next/link";
import ServiceCard from "./components/serviceCard";
import { properties } from "@/lib/placeholder-data";

export default function Home() {
  return (
    <main className="pt-20">
      {/* hero */}
      <section
        className="h-screen max-w-screen flex items-center text-white bg-center bg-cover bg-blend-overlay bg-black/50"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map(
            ({
              title,
              bathrooms,
              bedrooms,
              id,
              location,
              area,
              image,
              price,
              type,
            }) => (
              <PropertyCard
                title={title}
                bathrooms={bathrooms}
                bedrooms={bedrooms}
                key={id}
                location={location}
                area={area}
                image={image}
                price={price}
                type={type}
                className=" mx-auto w-full lg:my-2"
              />
            ),
          )}
        </div>
        <div className="pt-10">
          <Button
            variant={"outline"}
            className="py-4 px-6 border-blue-500 text-blue-500"
          >
            <Link href={"/imoveis"}>VER TODOS OS IMÓVEIS</Link>
          </Button>
        </div>
      </section>
      {/* serviços */}
      <section className="mx-auto py-18 px-8 text-center bg-slate-100 min-h-fit">
        <h2 className="text-3xl font-semibold mb-0">Nossos Serviços</h2>
        <p className="text-xl mt-4 mb-10 text-slate-600">
          Soluções completas para suas necessidades imobiliárias
        </p>
        <div className="flex justify-center gap-8 flex-wrap">
          <ServiceCard
            Icon={House}
            title="Compra e Venda"
            description="Encontre o imóvel perfeito ou venda o seu com nossa expertise"
          />
          <ServiceCard
            Icon={Building}
            title="Locação"
            description="Casas e apartamentos para alugar nas melhores regiões"
          />
          <ServiceCard
            Icon={MapPin}
            title="Consultoria"
            description="Orientação especializada em investimentos imobiliários"
          />
        </div>
      </section>
      {/* call to action */}
      <section className="bg-blue-500 text-white text-center p-10 pb-20 min-h-fit h-full">
        <h2 className="text-3xl font-semibold">Pronto para Encontrar Seu Próximo Imóvel?</h2>
        <p className="text-xl my-6 ">
          Entre em contato com nossos especialistas e realize o seu sonho
        </p>
        <div >
          <Button className="bg-blue-700 hover:bg-blue-800 p-5 shadow-md mx-2">
            <Phone /> 
            <p>(51) 3621-1690</p>
          </Button>
           <Button className="bg-blue-700 hover:bg-blue-800 p-5 shadow-md mx-2">
            <Mail />
            <p>ENVIAR MENSAGEM</p>
          </Button>
        </div>
      </section>
    </main>
  );
}
