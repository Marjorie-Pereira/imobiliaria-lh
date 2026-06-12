import { Card } from "@/components/ui/card";
import ServiceCard from "../components/serviceCard";
import { Clock, LucideIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import ContactCard from "../components/contactCard";
import { title } from "process";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const contactInfo = [
    {
      title: "Telefone",
      info: ["(11) 9999-9999", "(11) 3333-3333"],
      description: "Ligue para falar com nossos consultores",
      Icon: Phone,
    },
    {
      title: "Email",
      info: ["atendimento@luizhenriqueimoveis.com.br"],
      description: "Envie sua mensagem por email",
      Icon: Mail,
    },
    {
      title: "Endereço",
      info: ["Rua das Flores, 123 - Centro, São Paulo - SP"],
      description: "Visite nosso escritório para atendimento presencial",
      Icon: MapPin,
    },
    {
      title: "Horário de Atendimento",
      info: ["Segunda a Sexta: 9h às 18h", "Sábado: 10h às 14h"],
      description: "Estamos disponíveis para atender você nos horários acima",
      Icon: Clock,
    },
  ];
  return (
    <>
      <section className="relative h-100 flex items-center justify-center bg-linear-to-r from-blue-600 to-blue-800">
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl mb-6">Entre em Contato</h1>
          <p className="text-xl md:text-2xl">
            Estamos prontos para ajudar você a encontrar o imóvel ideal
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <ContactCard
              Icon={info.Icon}
              title={info.title}
              description={info.description}
              info={info.info}
              key={index}
              className="mx-auto lg:m-0"
            />
          ))}
        </div>
      </section>
      
    </>
  );
}
