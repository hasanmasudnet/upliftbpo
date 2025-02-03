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
    bgColor: "from-blue-500/10 to-blue-600/10",
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
    bgColor: "from-purple-500/10 to-purple-600/10",
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
    bgColor: "from-emerald-500/10 to-emerald-600/10",
  },
];

export default function ServiceSectors() {
  return (
    <div className="py-24 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
            Our Core Sectors
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                <div className="relative overflow-hidden rounded-2xl h-full bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-gray-700">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sector.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative p-8 space-y-6">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${sector.color} transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <sector.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {sector.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      {sector.benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.color}`}
                          />
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${sector.color} text-white opacity-90 hover:opacity-100 transition-opacity duration-300`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
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
