import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "199",
    description: "Perfect for small auto repair shops",
    features: [
      "AI Appointment Scheduling",
      "Basic Customer Communication",
      "Digital Inspection Reports",
      "Up to 3 Service Bays",
      "Email Support",
      "Basic Analytics",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "399",
    description: "Ideal for growing service centers",
    features: [
      "Everything in Starter",
      "Advanced AI Diagnostics",
      "Predictive Maintenance",
      "Up to 8 Service Bays",
      "24/7 Priority Support",
      "Advanced Analytics Dashboard",
      "Inventory Management",
      "Customer Mobile App",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "899",
    description: "For large auto service networks",
    features: [
      "Everything in Professional",
      "Custom AI Model Training",
      "Unlimited Service Bays",
      "Multi-location Support",
      "API Access",
      "Dedicated Account Manager",
      "Custom Integration",
      "White-label Options",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Plans & Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the perfect plan to transform your auto service business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-blue-500 shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom plan?</p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
}
