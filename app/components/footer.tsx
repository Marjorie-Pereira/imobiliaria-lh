import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-10 ">
      <div className="flex gap-6 mb-10">
        <div className="w-1/4">
          <h1 className="text-lg font-semibold mb-6">Luiz Henrique Imóveis</h1>
          <p className="text-slate-300">
            Sua parceira de confiança no mercado imobiliário há mais de 20 anos.
          </p>
        </div>
        <div className="w-1/4">
          <h1 className="text-lg font-semibold mb-6">Links Rápidos</h1>
          <nav>
            <ul className="flex flex-col gap-2 text-slate-300">
              <li className=" hover:text-white">
                <Link href={"/comprar"}>Comprar</Link>
              </li>
              <li className=" hover:text-white">
                <Link href={"/alugar"}>Alugar</Link>
              </li>
              <li className=" hover:text-white">
                <Link href={"/vender"}>Vender</Link>
              </li>
              <li className=" hover:text-white">
                <Link href={"/sobre"}>Sobre</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-1/4">
          <h1 className="text-lg font-semibold mb-6">Contato</h1>
          <div className="text-slate-300">
            <p>(51) 3621-1690</p>
            <p>(51) 98109-3047 - WhatsApp</p>
            <p>atendimento@luizhenriqueimoveis.com.br</p>
            <p>@luizhenriqueimob</p>
          </div>
        </div>
        <div className="w-1/4">
          <h1 className="text-lg font-semibold mb-6">Horário de Atendimento</h1>
          <div className="text-slate-300">
            <p>Segunda a Sábado: 9h às 18h</p>
            <p>Av. Paraguassu, 3945, Capão Novo, Capão da Canoa, RS</p>
          </div>
        </div>
      </div>
      <hr className=" border-t border-slate-600 mb-10" />
      <p className="text-center">© 2026 Luiz Henrique Imóveis. Todos os direitos reservados. CRECI 16.478</p>
    </footer>
  );
};
