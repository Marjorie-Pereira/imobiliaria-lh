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
    <div className="bg-white rounded-sm text-slate-500 flex p-4 gap-4">
      <Select>
        <SelectTrigger className="flex grow text-md py-6">
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
        <SelectTrigger className="flex grow text-md py-6">
          <SelectValue placeholder="Finalidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="comprar">Comprar</SelectItem>
            <SelectItem value="alugar">Alugar</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input placeholder="Localização" className="w-fit py-6 placeholder:text-lg" />
      <Button className=" flex grow py-6 bg-blue-800 hover:bg-blue-600">
        <Search size={32}  />
        BUSCAR
      </Button>
      
    </div>
  );
};
