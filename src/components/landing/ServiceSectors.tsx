import { HeadphonesIcon, TrendingUp, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const sectors = [
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "24/7 AI-powered support with human touch when needed",
    benefits: [
      "Instant response to queries",
      "Multi-language support",
      "Seamless ticket escalation",
      "Customer satisfaction tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales",
    description: "Intelligent sales automation and lead management",
    benefits: [
      "Smart lead qualification",
      "Automated follow-ups",
      "Sales performance analytics",
      "Personalized recommendations",
    ],
  },
  {
    icon: Settings,
    title: "Services",
    description: "Comprehensive service management and optimization",
    benefits: [
      "Automated scheduling",
      "Service quality monitoring",
      "Resource optimization",
      "Real-time tracking",
    ],
  },
];

export default function ServiceSectors() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Sectors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering excellence across three key business areas with
            AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  <sector.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{sector.title}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {sector.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
