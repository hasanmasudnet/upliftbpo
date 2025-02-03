import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Gauge, Brain, Car } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Assistant",
    description: "24/7 intelligent support for your business operations",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Boost efficiency and optimize resource allocation",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "Data-driven insights for better decision making",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

const FloatingCar = () => {
  const generateRandomPath = () => {
    const numPoints = 8;
    const points = [];
    let prevY = 30; // Start higher up

    for (let i = 0; i < numPoints; i++) {
      // Add some randomness to x positions while maintaining general left-to-right movement
      const xProgress = i / (numPoints - 1);
      const xVariation = Math.random() * 20 - 10; // ±10% variation
      const x = `${Math.max(0, Math.min(100, xProgress * 100 + xVariation))}vw`;

      // Generate y position with smooth transitions, keeping it in the upper portion
      const yVariation = Math.random() * 20 - 10; // ±10vh variation
      const y = `${Math.max(15, Math.min(45, prevY + yVariation))}vh`; // Constrain to upper area
      prevY = parseFloat(y);

      points.push({ x, y });
    }
    return points;
  };

  return (
    <motion.div
      className="absolute z-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        x: generateRandomPath().map((p) => p.x),
        y: generateRandomPath().map((p) => p.y),
        rotate: [-8, 0, 8, 0, -8],
      }}
      transition={{
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
        x: {
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative">
        {/* Enhanced glow effect */}
        <motion.div
          className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Car icon with enhanced trail effect */}
        <div className="relative">
          <motion.div
            className="absolute -left-16 top-1/2 -translate-y-1/2 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.1))",
            }}
            animate={{
              width: ["3rem", "5rem", "3rem"],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              y: [-1, 1, -1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Car className="w-12 h-12 text-white relative z-10 -scale-x-100" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] opacity-30">
          <div
            className="absolute inset-0 bg-gradient-conic from-blue-500 via-purple-500 to-emerald-500 animate-spin-slow"
            style={{ clipPath: "circle(50% at center)" }}
          />
        </div>
        <div className="absolute inset-0 bg-gray-950/90 backdrop-blur-3xl" />
      </div>

      {/* Add the floating car */}
      <FloatingCar />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-medium">
                AI-Powered Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 text-transparent bg-clip-text"
            >
              Transform Your Business with
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text">
                Intelligent Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
            >
              Harness the power of AI to streamline operations, boost
              efficiency, and deliver exceptional customer experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/20 text-blue-400 hover:bg-blue-500/10 text-lg"
              >
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-gray-900/50 p-8 hover:bg-gray-900/80 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
          >
            {[
              { value: "40%", label: "Efficiency Increase" },
              { value: "24/7", label: "AI Availability" },
              { value: "90%", label: "Cost Reduction" },
              { value: "1M+", label: "Tasks Automated" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
