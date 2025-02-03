import { Button } from "@/components/ui/button";
import { ArrowRight, Gauge, Calendar, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center rounded-full px-4 py-1 bg-blue-500/10 border border-blue-500/20 backdrop-blur">
                <span className="text-blue-200 text-sm">
                  AI-Powered Auto Service Platform
                </span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Auto Shop with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                {" "}
                AI Power
              </span>
            </h1>

            <p className="text-xl text-blue-100 max-w-xl">
              Boost your service capacity by 40% with our AI-driven scheduling
              and management system. Join the future of auto repair.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-100 hover:bg-blue-800/50"
              >
                Book a Demo
              </Button>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border-2 border-blue-900"
                    />
                  ))}
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <p className="text-blue-100 text-sm">
                "Increased our service capacity by 40% within the first month.
                The AI scheduling is a game-changer!"
              </p>
              <p className="text-blue-300 text-sm mt-2">
                - Mike Johnson, AutoTech Pro
              </p>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 rounded-full filter blur-[80px] opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-[80px] opacity-30"></div>

            <div className="relative grid gap-6">
              {/* Feature Cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Calendar className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Smart Scheduling
                    </h3>
                    <p className="text-blue-100">
                      AI optimizes your service bay utilization and staff
                      allocation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Gauge className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Predictive Analytics
                    </h3>
                    <p className="text-blue-100">
                      Forecast service demands and optimize inventory management
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transform hover:scale-[1.02] transition-transform">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      24/7 Availability
                    </h3>
                    <p className="text-blue-100">
                      AI assistant handles appointments and inquiries around the
                      clock
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
