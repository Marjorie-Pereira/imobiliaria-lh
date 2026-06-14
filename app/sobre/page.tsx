import {
  Award,
  Badge,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CardWithIcon from "../components/cardWithIcon";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const stats = [
    { value: "20+", label: "Anos de Experiência" },
    { value: "5.000+", label: "Imóveis Vendidos" },
    { value: "98%", label: "Clientes Satisfeitos" },
  ];

  const team = [
    {
      name: "Luiz Henrique",
      role: "CEO & Fundador",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      bio: "Mais de 25 anos no mercado imobiliário, especialista em alto padrão.",
    },

  ];

  const values = [
    {
      icon: <Shield className="w-7 h-7 text-blue-600" />,
      title: "Confiança",
      description:
        "Transparência em todas as etapas, do primeiro contato ao fechamento do contrato.",
    },
    {
      icon: <Award className="w-7 h-7 text-blue-600" />,
      title: "Excelência",
      description:
        "Padrão de qualidade elevado em cada imóvel e em cada atendimento.",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-blue-600" />,
      title: "Resultados",
      description:
        "Foco em entregar o melhor negócio para compradores e vendedores.",
    },
    {
      icon: <Users className="w-7 h-7 text-blue-600" />,
      title: "Relacionamento",
      description:
        "Construímos vínculos duradouros com nossos clientes e parceiros.",
    },
  ];

  const timeline = [
    {
      year: "2004",
      event:
        "Fundação da ImóvelPrime em São Paulo com foco em imóveis residenciais.",
    },
    {
      year: "2008",
      event:
        "Expansão para o mercado comercial e abertura do segundo escritório.",
    },
    {
      year: "2012",
      event: "Chegamos a 1.000 imóveis vendidos e abrimos em Rio de Janeiro.",
    },
    {
      year: "2016",
      event:
        "Lançamento da plataforma digital e expansão nacional para 6 estados.",
    },
    {
      year: "2020",
      event:
        "Adoção de tour virtual 3D e consultoria 100% digital durante a pandemia.",
    },
    {
      year: "2024",
      event:
        "20 anos de mercado, 12 escritórios e mais de 5.000 imóveis negociados.",
    },
  ];
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-120 flex items-center justify-center overflow-hidden">
        {/* <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600"
          alt="Escritório ImóvelPrime"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <Image
          src={"/office.webp"}
          alt="escritório imobiliária"
          fill={true}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-blue-300 uppercase tracking-widest text-sm mb-3">
            Quem somos
          </p>
          <h1 className="text-5xl md:text-6xl text-white mb-5">
            Sobre a Luiz Henrique Imóveis
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Há mais de 20 anos conectando pessoas aos imóveis dos seus sonhos
            com ética, excelência e resultado.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl text-white mb-1">{s.value}</div>
              <div className="text-blue-100 text-sm uppercase tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">
            Nossa missão
          </p>
          <h2 className="text-4xl text-gray-900 mb-6">
            Realizamos sonhos com expertise e dedicação
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A ImóvelPrime nasceu do desejo de transformar o mercado imobiliário
            brasileiro, oferecendo um serviço personalizado, ágil e
            transparente. Acreditamos que cada cliente merece atenção única e a
            melhor orientação possível.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Nossa equipe atua em todo o litoral norte gaúcho, com profundo
            conhecimento regional e foco em superar expectativas — seja na
            compra, venda ou locação.
          </p>
          <ul className="space-y-3">
            {[
              "Avaliação gratuita do imóvel",
              "Assessoria jurídica completa",
              "Financiamento facilitado",
              "Suporte pós-venda",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700"
            alt="Equipe em reunião"
            className="rounded-2xl shadow-2xl w-full object-cover h-105"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 flex items-center gap-4">
            <div className="bg-blue-50 rounded-full p-3">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-gray-900">Nota 4.9/5</div>
              <div className="text-gray-500 text-sm">+3.200 avaliações</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">
              Nossos valores
            </p>
            <h2 className="text-4xl text-gray-900">
              O que nos guia todos os dias
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <CardWithIcon
                Icon={v.icon}
                description={v.description}
                title={v.title}
                key={v.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">
            Nossa história
          </p>
          <h2 className="text-4xl text-gray-900">Uma jornada de 20 anos</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                    <span className="text-blue-600 text-sm uppercase tracking-widest">
                      {item.year}
                    </span>
                    <p className="text-gray-700 mt-1 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-blue-600 rounded-full shrink-0 items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-600 uppercase tracking-widest text-sm mb-3">
              Nosso Fundador
            </p>
            <h2 className="text-4xl text-gray-900">
              Liderança que faz a diferença
            </h2>
          </div>
          <div className="mx-auto">
            {team.map((member) => (
              <Card className="relative mx-auto w-full max-w-sm pt-0" key={member.role}>
               
                <Image
                  src="/luiz.png"
                  alt="Member Image"
                  className="relative z-10  w-full object-cover "
                  width={500}
                  height={500}
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-blue-600">
                   {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                    <p >
                        {member.bio}
                    </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl text-white mb-5">
            Pronto para encontrar seu imóvel ideal?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Nossa equipe está pronta para ajudá-lo em cada etapa da sua jornada
            imobiliária.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Ver Imóveis
            </Link>
            <Link
              href="/contato"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Falar com Consultor
            </Link>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-blue-100">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(51) 3621-1690</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>atendimento@luizhenriqueimoveis.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Capão da Canoa, RS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
