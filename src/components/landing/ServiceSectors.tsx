import { HeadphonesIcon, TrendingUp, Settings, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: HeadphonesIcon,
    title: "Sales Appointment Setting",
    description: "Comprehensive inbound and outbound call management for sales",
    benefits: [
      "Handle test drive & consultation inquiries",
      "CRM data management & updates",
      "Pre-screen leads (financing, interests)",
      "Automated appointment reminders",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: TrendingUp,
    title: "Customer Service Excellence",
    description: "Multi-channel customer support and inquiry management",
    benefits: [
      "Dealership hours & inventory info",
      "Live chat & email support",
      "Complaint resolution & escalation",
      "Post-purchase follow-up calls",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: Settings,
    title: "Service Coordination",
    description: "Complete service department support and coordination",
    benefits: [
      "Service appointment scheduling",
      "Maintenance reminder notifications",
      "Parts availability updates",
      "Pickup & drop-off coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200",
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
            Professional Offshore Teams
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Combining skilled offshore agents with advanced technology for
            superior auto service support and customer experience
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
