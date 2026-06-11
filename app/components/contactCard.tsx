import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type ContactCardProps = {
  Icon: LucideIcon;
  title: string;
  info: string[];
  description: string;
  className?: string;
};
export default function ContactCard({
  Icon,
  title,
  info,
  description,
  className,
}: ContactCardProps) {
  return (
    <Card
      size="sm"
      className={` p-4 max-w-80 shadow-2xl ${className}`}
    >
      <CardContent className="py-6"> 
        <div className="bg-blue-100 rounded-full w-fit p-4 mb-6">
          <Icon className="text-blue-500" size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {info.map((i) => (
          <p className="wrap-break-word text-slate-600 text-lg" key={info.indexOf(i)}>{i}</p>
        ))}

        <p className="text-slate-600 mt-2 wrap-break-word">{description}</p>
      </CardContent>
    </Card>
  );
}
