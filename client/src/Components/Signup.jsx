import { useState } from 'react';
import { Sprout, Mail, Lock, User, Eye, EyeOff, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Signup({ onToggleMode }) {
   const navigate = useNavigate();

   const loginRoute = ()=>{
    navigate("/Login");
   }




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
            <div className="bg-gradient-to-br from-emerald-600 to-green-600 p-3 rounded-2xl">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              AgriConnect
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Our Community</h2>
              <p className="text-gray-600">Start your journey towards smarter farming</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="farmer@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 mt-1 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3.5 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={loginRoute}
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6 italic">
            "Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness."
          </p>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-lime-600 via-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 right-24 w-36 h-36 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-44 h-44 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Sprout className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold">AgriConnect</h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Empowering<br />Farmers<br />Nationwide
          </h2>

          <p className="text-xl text-white/90 mb-8">
            "Someone's sitting in the shade today because someone planted a tree a long time ago. Plant your future with us."
          </p>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-white/90">Active Farmers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-2">50+ States</h3>
              <p className="text-white/90">Coverage Nationwide</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p className="text-white/90">Expert Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
