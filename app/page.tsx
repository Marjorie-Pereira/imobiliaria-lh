import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen flex items-center text-white bg-center bg-cover bg-blend-overlay bg-black/50" style={{backgroundImage: `url(capaodacanoa.jpeg)` }}>
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
        <div className="h-5 bg-slate-300">
          <p>buscar...</p>
        </div>
      </div>
    </section>
  );
}
