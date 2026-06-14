"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginRegisterPage() {
  const [tab, setTab] = useState<"login" | "cadastro">("login");
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src={"/lhimoveis.png"}
              alt="logo empresa"
              width={200}
              height={100}
              className="w-auto h-28 object-contain"
            />
          </Link>
          <p className="text-gray-500 mt-2 text-sm">
            {tab === "login" ? "Entre na sua conta" : "Crie sua conta gratuita"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
            {(["login", "cadastro"] as const).map((t) => (
              <Button
                key={t}
                variant={"secondary"}
                onClick={() => {
                  setTab(t);
                }}
                className={`hover:bg-white flex-1 py-2.5 rounded-lg text-sm transition-all ${tab === t ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
              >
                {t === "login" ? "Entrar" : "Criar conta"}
              </Button>
            ))}
          </div>

          {/* Login */}
          {tab === "login" && (
            <form className="space-y-5">
              <div>
                <Field>
                  <FieldLabel className="block text-sm text-gray-700 mb-1">
                    E-mail
                  </FieldLabel>
                  <Input
                    required
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </Field>
              </div>
              <div>
                <Field>
                  <div className="flex justify-between mb-1">
                    <FieldLabel className="text-sm text-gray-700">
                      Senha
                    </FieldLabel>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Esqueci minha senha
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      required
                      placeholder="••••••••"
                      className="w-full border border-gray-200 rounded-xl px-4 py-6 pr-12 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      type="button"
                      size={"icon"}
                      variant={"ghost"}
                      className="absolute right-4 top-2 text-gray-400 hover:text-gray-600"
                    >
                      <EyeOff className="w-4 h-4" />
                    </Button>
                  </div>
                </Field>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white text-base py-6 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Entrar
              </Button>
              <div className="relative flex items-center gap-3 text-sm text-gray-400">
                <div className="flex-1 h-px bg-gray-200" />
                ou continue com
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <Button
                type="button"
                variant={"outline"}
                className="w-full border border-gray-200 rounded-xl py-6 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors text-gray-700 text-sm"
              >
                <svg className="w-5! h-5!" viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.5 26.9 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.6 4.9C9.8 39.8 16.4 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.2 5.2C41.2 35.5 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"
                  />
                </svg>
                Continuar com Google
              </Button>
            </form>
          )}

          {/* Signup */}
          {tab === "cadastro" && (
            <form className="space-y-5">
              <Field>
                <FieldLabel className="block text-sm text-gray-700 mb-1">
                  Nome completo
                </FieldLabel>
                <Input
                  required
                  type="text"
                  placeholder="Seu nome"
                  className="w-full border border-gray-200 rounded-xl px-4 py-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </Field>
              <Field>
                <FieldLabel className="block text-sm text-gray-700 mb-1">
                  E-mail
                </FieldLabel>
                <Input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </Field>
              <Field>
                <FieldLabel className="block text-sm text-gray-700 mb-1">
                  Telefone
                </FieldLabel>
                <Input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-6 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </Field>
              <Field>
                <FieldLabel className="block text-sm text-gray-700 mb-1">
                  Senha
                </FieldLabel>
                <div className="relative">
                  <Input
                    required
                    placeholder="••••••••"
                    className="w-full border border-gray-200 rounded-xl px-4 py-6 pr-12 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    type="button"
                    size={"icon"}
                    variant={"ghost"}
                    className="absolute right-4 top-2 text-gray-400 hover:text-gray-600"
                  >
                    <EyeOff className="w-4 h-4" />
                  </Button>
                </div>
              </Field>
              <Field>
                <FieldLabel className="block text-sm text-gray-700 mb-1">
                  Confirmar senha
                </FieldLabel>
                <div className="relative">
                   <Input
                      required
                      placeholder="••••••••"
                      className="w-full border border-gray-200 rounded-xl px-4 py-6 pr-12 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      type="button"
                      size={"icon"}
                      variant={"ghost"}
                      className="absolute right-4 top-2 text-gray-400 hover:text-gray-600"
                    >
                      <EyeOff className="w-4 h-4" />
                    </Button>
                </div>
              </Field>
              <Field>
                <FieldLabel className="flex items-start gap-3 cursor-pointer">
                  <Input
                    required
                    type="checkbox"
                    className="mt-1 accent-blue-600 w-6"
                  />
                  <span className="text-sm text-gray-500">
                    Concordo com os{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Termos de Uso
                    </a>{" "}
                    e a{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Política de Privacidade
                    </a>
                    .
                  </span>
                </FieldLabel>
              </Field>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-6 text-base rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Criar conta
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
