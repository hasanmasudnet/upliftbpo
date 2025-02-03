import { Users, HeadphonesIcon, Clock, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Users,
    title: "Expert Service Team",
    description:
      "Our certified technicians provide personalized attention to every vehicle",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Live agents during business hours, with instant digital assistance anytime",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1200",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Fast service scheduling and real-time updates on your vehicle",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "Direct line to our service team with digital updates for convenience",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export default function CustomerService() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem]">
          <div
            className="absolute inset-0 bg-gradient-conic from-blue-500/30 via-purple-500/30 to-emerald-500/30 animate-spin-slow"
            style={{ clipPath: "circle(50% at center)" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text">
            Personal Service First
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert technicians and dedicated service advisors, supported by
            modern technology for the best customer experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-gray-700 h-full">
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center relative">
                  {/* Icon - Now positioned relative to content */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1">
                  <div
                    className={`h-full bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg group"
          >
            Meet Our Team
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
