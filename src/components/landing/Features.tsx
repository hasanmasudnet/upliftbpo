import {
  Wrench,
  Bot,
  Brain,
  Gauge,
  Shield,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "AI Diagnostic System",
    description:
      "Advanced AI algorithms analyze vehicle data for precise problem identification",
    benefits: [
      "90% faster diagnostics",
      "Reduced misdiagnosis",
      "Cost-effective solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=800",
  },
  {
    icon: Bot,
    title: "Virtual Service Advisor",
    description:
      "24/7 AI assistant for service recommendations and instant quotes",
    benefits: ["Always available", "Consistent advice", "Personalized service"],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800",
  },
  {
    icon: Gauge,
    title: "Predictive Maintenance",
    description:
      "AI forecasts vehicle issues before they become major problems",
    benefits: [
      "Prevent breakdowns",
      "Reduce repair costs",
      "Extend vehicle life",
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
  },
  {
    icon: Shield,
    title: "Smart Quality Control",
    description: "AI-powered inspection system for consistent repair quality",
    benefits: [
      "100% inspection coverage",
      "Real-time quality checks",
      "Automated reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1507977295472-7d7735e4d5b4?q=80&w=800",
  },
  {
    icon: MessageSquare,
    title: "Automated Communication",
    description: "Real-time updates and smart appointment management",
    benefits: ["Instant notifications", "Smart scheduling", "Reduced no-shows"],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  },
  {
    icon: Wrench,
    title: "Smart Repair Planning",
    description: "AI optimizes repair schedules and inventory management",
    benefits: [
      "Efficient workflows",
      "Optimized parts stock",
      "Faster turnaround",
    ],
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800",
  },
];

export default function Features() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Auto Service</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the future of vehicle maintenance with our intelligent
            solutions
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 p-3"
                >
                  <div className="group h-full">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg h-full bg-white border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                      <div className="relative h-48">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <feature.icon className="w-5 h-5 text-blue-400" />
                            <h3 className="font-semibold text-lg">
                              {feature.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-200">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="space-y-3">
                          {feature.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-700"
                            >
                              <ChevronRight className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          className="w-full mt-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
