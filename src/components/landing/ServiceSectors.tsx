import { HeadphonesIcon, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200",
    color: "from-blue-500 to-blue-600",
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
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    color: "from-purple-500 to-purple-600",
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
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function ServiceSectors() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Our Core Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence across three key business areas with
            AI-powered solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="group h-full">
                <div className="relative overflow-hidden rounded-2xl h-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Image Section */}
                  <div className="relative h-48">
                    <div className="absolute inset-0">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
                    </div>
                    <div className="relative p-6 flex flex-col h-full justify-end">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${sector.color} w-12 h-12 flex items-center justify-center mb-4`}
                      >
                        <sector.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {sector.title}
                      </h3>
                      <p className="text-gray-200">{sector.description}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {sector.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 group-hover:translate-x-1 transition-transform"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.color}`}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      className={`w-full mt-6 bg-gradient-to-r ${sector.color} text-white hover:opacity-90 transition-opacity`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
