import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">UpliftBPO</span>
            </div>
            <p className="text-sm">
              Transforming auto repair services with AI-powered solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Auto Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Diagnostics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  AI Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>1234 Auto Street</li>
              <li>Service City, SC 12345</li>
              <li>contact@upliftbpo.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} UpliftBPO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
