import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import ContactCard from "../components/contactCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const contactInfo = [
    {
      title: "Telefone",
      info: ["(51) 3621-1690", "(51) 9 8109-3047"],
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
      info: ["Av. Paraguassu, 3945, Capão Novo, Capão da Canoa/RS"],
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl mb-4 text-gray-900">
                Envie sua Mensagem
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário abaixo e nossa equipe entrará em contato
                com você
              </p>
            </div>

            <form className="space-y-6">
              <Field>
                <FieldLabel className="block text-sm mb-2 text-gray-700">
                  Nome
                </FieldLabel>
                <Input
                  name="name"
                  required
                  placeholder="Nome Completo"
                  className="py-6"
                />
              </Field>

              <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel className="block text-sm mb-2 text-gray-700">
                    Email
                  </FieldLabel>
                  <Input
                    name="email"
                    placeholder="Email"
                    required
                    type="email"
                    className="py-6"
                  />
                </Field>
                <Field>
                  <FieldLabel className="block text-sm mb-2 text-gray-700">
                    Telefone
                  </FieldLabel>
                  <Input
                    name="phone"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$
"
                    type="tel"
                    required
                    placeholder="Telefone"
                    className="py-6"
                  />
                </Field>
              </FieldGroup>

              <div>
                <Field>
                  <FieldLabel className="block text-sm mb-2 text-gray-700">
                    Assunto
                  </FieldLabel>
                  <Select required={true}>
                    <SelectTrigger className="w-full px-4 py-6 border  border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <SelectValue placeholder="Selecione um Assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="compra">Comprar Imóvel</SelectItem>
                        <SelectItem value="venda">Vender Imóvel</SelectItem>
                        <SelectItem value="locacao">Locação</SelectItem>
                        <SelectItem value="avaliacao">
                          Avaliação de Imóvel
                        </SelectItem>
                        <SelectItem value="consultoria">Consultoria</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <div>
                <FieldLabel className="block text-sm mb-2 text-gray-700">
                  Mensagem
                </FieldLabel>
                <Textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-50"
                  placeholder="Descreva como podemos ajudá-lo..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-5 flex items-center justify-center gap-2"
              >
                <Send className="w-6! h-6!" />
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl mb-4 text-gray-900">Localização</h2>
              <p className="text-xl text-gray-600">
                Visite nosso escritório ou agende uma reunião online
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-100 mb-8 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.2070936955956!2d-49.97976602445978!3d-29.684774975106706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9522816f8d767375%3A0x67a20bffe91a1aad!2sLuiz%20Henrique%20Im%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1781304162560!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Additional Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg text-gray-900">Atendimento Rápido</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ligue agora e fale diretamente com um consultor especializado
                </p>
                <Link
                  href="tel:+555136211690"
                  className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
                >
                  (51) 3621-1690
                  <Phone className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg text-gray-900">WhatsApp</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Converse conosco pelo WhatsApp para atendimento instantâneo
                </p>
                <Link
                  href="https://wa.me/5551981093047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 inline-flex items-center gap-2"
                >
                  Iniciar conversa
                  <MessageSquare className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-md ">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">
                  Como faço para agendar uma visita?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base">
                  Você pode agendar uma visita através do formulário acima,
                  WhatsApp, telefone ou diretamente no anúncio do imóvel de seu
                  interesse.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md ">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">
                  Vocês cobram taxa de avaliação?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base">
                  Não! A avaliação do seu imóvel é totalmente gratuita e sem
                  compromisso. Entre em contato para agendar.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md ">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">
                  Quanto tempo leva para vender um imóvel?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base">
                  O tempo varia conforme o tipo de imóvel, localização e valor.
                  Nossa equipe trabalha para vender seu imóvel no menor tempo
                  possível.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md ">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">
                  Aceitam imóvel como parte do pagamento?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base">
                  Sim! Trabalhamos com permuta de imóveis. Entre em contato para
                  avaliarmos as possibilidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
