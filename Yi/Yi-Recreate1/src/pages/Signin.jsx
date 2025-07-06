import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Eye, EyeOff, ArrowRight, Users, Shield } from "lucide-react";

// Infused Button Component
const Button = ({ children, className = "", variant = "solid", ...props }) => {
  const baseStyle = variant === "outline"
    ? "border text-green-600 border-green-600 hover:bg-green-50"
    : "bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white";
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-full font-semibold text-lg shadow ${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
};

// Infused Input Component
const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/30 ${className}`}
  />
);

// Infused Card Component
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-xl bg-white shadow-md ${className}`} {...props}>
    {children}
  </div>
);

// Infused CardContent Component
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Infused Checkbox Component
const Checkbox = ({ id, className = "", ...props }) => (
  <input
    type="checkbox"
    id={id}
    className={`w-4 h-4 border-gray-300 rounded ${className}`}
    {...props}
  />
);

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-44 pb-12">
        <Card className="w-full max-w-md bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-white font-bold text-3xl">Yi</div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg"></div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-white rounded-full shadow-md"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-3">MEMBERSHIP</h2>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">USER LOGIN</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mx-auto"></div>
              </div>
              <div className="space-y-6">
                <div className="relative group">
                  <Users className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  <Input type="text" placeholder="Username" className="pl-12 h-14 bg-gray-50/50 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl text-gray-800 placeholder:text-gray-500" />
                </div>
                <div className="relative group">
                  <Shield className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="pl-12 pr-12 h-14 bg-gray-50/50 border-gray-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl text-gray-800 placeholder:text-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              {/* Remember Me - Optional */}
              {/* <div className="flex items-center space-x-3">
                <Checkbox id="remember" className="border-gray-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
                <label htmlFor="remember" className="text-gray-600 text-sm cursor-pointer">Remember Me</label>
              </div> */}
              <Button className="w-full h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold">
                LOG IN
              </Button>
              <div className="text-center">
                <a href="#" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                  Lost your password?
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
