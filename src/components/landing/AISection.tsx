import { Bot, Wrench, Clock, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "24/7 Appointment Scheduling",
    description:
      "AI assistant handles appointment bookings and modifications any time",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200",
  },
  {
    icon: Wrench,
    title: "Smart Service Recommendations",
    description:
      "AI analyzes vehicle history to suggest preventive maintenance",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200",
  },
  {
    icon: Clock,
    title: "Real-time Status Updates",
    description: "Automated progress updates and completion notifications",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1200",
  },
];

const capabilities = [
  "Instant response to customer inquiries",
  "Smart capacity management and scheduling",
  "Automated service reminders",
  "Predictive maintenance alerts",
  "Digital vehicle inspection reports",
  "Customer feedback analysis",
];

export default function AISection() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Auto Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience seamless auto service with our intelligent AI system
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[16/9] relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <feature.icon className="w-5 h-5 text-blue-400" />
                        {feature.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right side - Capabilities */}
          <div className="lg:sticky lg:top-24">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">
                  AI Capabilities
                </h3>
              </div>
              <div className="grid gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Bot className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
