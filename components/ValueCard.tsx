import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all text-center">
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>

      {/* Content */}
      <h5 className="text-gray-900 mb-3">{title}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
}
