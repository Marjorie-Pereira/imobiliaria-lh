import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export const SearchProperty = () => {
  return (
    <div className="bg-white rounded-sm text-slate-500 flex flex-col md:flex-row  p-4 justify-between items-center w-fit md:w-full mx-auto gap-4">
      <div className="flex w-full md:w-2/3 gap-4">
        <Select>
          <SelectTrigger className=" grow text-md py-6">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="apto">Apartamento</SelectItem>
              <SelectItem value="sobrado">Sobrado</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="grow text-md py-6">
            <SelectValue placeholder="Finalidade" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="comprar">Comprar</SelectItem>
              <SelectItem value="alugar">Alugar</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          placeholder="Localização"
          className="w-fit py-6 placeholder:text-lg"
        />
      </div>

      <Button className="w-full grow md:w-fit py-6 bg-blue-800  hover:bg-blue-600">
        <Search size={32} />
        BUSCAR
      </Button>
    </div>
  );
};
