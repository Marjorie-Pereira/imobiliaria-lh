import { Card } from "@/components/ui/card";
import ServiceCard from "../components/serviceCard";
import { Clock, LucideIcon, Mail, MapPin, Phone } from "lucide-react";
import ContactCard from "../components/contactCard";
import { title } from "process";

export default function Contact() {
    const contactInfo = [
        {
            title: "Telefone",
            info: ["(11) 9999-9999", "(11) 3333-3333"],
            description: "Ligue para falar com nossos consultores",
            Icon: Phone
        },
        {
            title: 'Email',
            info: ['atendimento@luizhenriqueimoveis.com.br'],
            description: 'Envie sua mensagem por email',
            Icon: Mail
        },
        {
            title: 'Endereço',
            info: ['Rua das Flores, 123 - Centro, São Paulo - SP'],
            description: 'Visite nosso escritório para atendimento presencial',
            Icon: MapPin
        },
        {
            title: 'Horário de Atendimento',
            info: ['Segunda a Sexta: 9h às 18h', 'Sábado: 10h às 14h'],
            description: 'Estamos disponíveis para atender você nos horários acima',
            Icon: Clock
        }
    ]
  return (
    <>
      <section className="h-screen relative ">
        <div className="h-3/5 w-full bg-blue-600 text-white flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold">Entre em Contato</h1>
          <p className="text-xl my-6 ">
            Estamos prontos para ajudar você a encontrar o imóvel ideal
          </p>
        </div>
        <div className="absolute bottom-14 left-0 right-0 flex flex-wrap gap-4 justify-center">
            {contactInfo.map((info) => (
                <ContactCard
                    key={contactInfo.indexOf(info)}
                    Icon={info.Icon as LucideIcon}
                    title={info.title}
                    info={info.info}
                    description={info.description}
                />
            ))}
           
          </div>
      </section>
    </>
  );
}
