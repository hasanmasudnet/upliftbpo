import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Optimize Your Auto Service?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Transform your auto repair business with AI-powered customer service
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Get Started Now
        </Button>
      </div>
    </div>
  );
}
