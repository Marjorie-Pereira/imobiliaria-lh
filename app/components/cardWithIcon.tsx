import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type CardWithIconProps = {
  Icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};
export default function CardWithIcon({
  Icon,
  title,
  description,
  className,
}: CardWithIconProps) {
  return (
    <Card
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow px-2 ${className}`}
      size="sm"
    >
      <CardHeader className="pt-2">
        <div className="bg-blue-50 rounded-xl p-3 w-fit mb-5">{Icon}</div>
        <CardTitle>
          <h3 className="text-lg text-gray-900">{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
