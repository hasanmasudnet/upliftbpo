import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">UpliftBPO</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Features
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
