import { HeadphonesIcon, MessageSquare, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: HeadphonesIcon,
    title: "Cost Savings",
    description:
      "Reduce overhead costs significantly compared to in-house staffing",
    gradient: "from-blue-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200",
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock support improving customer experience",
    gradient: "from-purple-500 to-purple-600",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1200",
  },
  {
    icon: Clock,
    title: "Scalable Operations",
    description:
      "Easily scale during peak seasons without burdening in-house teams",
    gradient: "from-emerald-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200",
  },
  {
    icon: Shield,
    title: "Improved Efficiency",
    description:
      "Focus dealership staff on in-person interactions while we handle administrative tasks",
    gradient: "from-amber-500 to-amber-600",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200",
  },
];

export default function CustomerService() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Streamline Your Dealership Operations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Enhance efficiency and customer satisfaction with our trained
            offshore agents handling appointments, customer service, and service
            coordination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
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
                  {/* Icon - Positioned relative to content */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
