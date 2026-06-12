import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  Icon: LucideIcon;
  title: string
  description: string;
  className?: string
};
export default function ServiceCard({ Icon, title, description, className }: ServiceCardProps) {
  return (
    <Card size="sm" className={`min-w-60 max-w-80 flex flex-col items-center ${className}`}>
      <CardContent className="py-6">
        <div className="bg-blue-100 rounded-full flex justify-center items-center w-fit p-4 mx-auto mb-6">
          <Icon className="text-blue-500" size={32} />
        </div>
        <h3 className="text-2xl font-semibold mb-6">{title}
        </h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
}
