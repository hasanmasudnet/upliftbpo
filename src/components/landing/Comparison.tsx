import { motion } from "framer-motion";
import {
  Timer,
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    title: "Service Time",
    icon: Timer,
    traditional: { value: "3-4 hours", color: "text-red-500" },
    ai: { value: "1-2 hours", color: "text-green-500" },
    improvement: "60% faster",
  },
  {
    title: "Customer Handling",
    icon: Users,
    traditional: { value: "50/day", color: "text-red-500" },
    ai: { value: "200/day", color: "text-green-500" },
    improvement: "4x capacity",
  },
  {
    title: "Efficiency Rate",
    icon: TrendingUp,
    traditional: { value: "65%", color: "text-red-500" },
    ai: { value: "95%", color: "text-green-500" },
    improvement: "30% more efficient",
  },
];

const features = [
  "24/7 Availability",
  "Real-time Updates",
  "Predictive Maintenance",
  "Instant Quote Generation",
];

export default function Comparison() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">AI vs Traditional Service</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Experience the power of AI-driven auto service
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Service Card */}
            <Card className="p-6 bg-white/50 hover:bg-white/80 transition-colors border-red-100">
              <div className="space-y-6">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Traditional Service
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Manual processes and limited availability
                  </p>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* AI-Powered Service Card */}
            <Card className="p-6 bg-blue-50 hover:bg-blue-50/80 transition-colors border-blue-100">
              <div className="space-y-6">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">
                    AI-Powered Service
                  </h3>
                  <p className="text-blue-600/80 text-sm">
                    Smart automation and 24/7 availability
                  </p>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Metrics */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <metric.icon className="w-5 h-5 text-blue-500" />
                  <h3 className="text-sm font-medium">{metric.title}</h3>
                </div>

                <div className="flex items-end justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Traditional</p>
                    <p
                      className={`text-lg font-semibold ${metric.traditional.color}`}
                    >
                      {metric.traditional.value}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-500 mx-2" />
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">AI-Powered</p>
                    <p className={`text-lg font-semibold ${metric.ai.color}`}>
                      {metric.ai.value}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-b-lg"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
