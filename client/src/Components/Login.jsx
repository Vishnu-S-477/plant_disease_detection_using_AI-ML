import { useState } from 'react';
import { Sprout, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
 


 
 function Login({ onToggleMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleSubmit = async (e)=>{
   e.preventDefault();

   if(email.length == 0){
    alert("Please Enter The Email Id");
    return;
   }
   if(password.length == 0){
    alert("Please Enter The Password");
    return;
   }


    const response =await fetch("http://localhost:5000/api/Login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email:email,password:password})
    });
 
    const serverResponse = await response.text();
    
    if(serverResponse == "valid_user"){
      navigate("/Detect");
    }
    else if(serverResponse == "wrong_password"){
     alert("Incorrect Password");
    }
    else{
      alert("Email Not Exist")
    }
    
   
  }
  const signUpRoute = ()=>{
    navigate("/Signup");
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 via-green-600 to-lime-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-32 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
              <Sprout className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold">AgriConnect</h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Cultivating<br />Tomorrow's<br />Harvest Today
          </h2>

          <p className="text-xl text-white/90 mb-8">
            "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways."
          </p>

          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Smart Farm Management</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Market Price Insights</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Connect with Experts</span>
            </div>
          </div>
        </div>
      </div>

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
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Continue your journey to sustainable farming</p>
            </div>

            <form onSubmit={HandleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="farmer@example.com"
                    
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    placeholder="Enter your password"
                   
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3.5 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={signUpRoute}
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6 italic">
            "To forget how to dig the earth and tend the soil is to forget ourselves."
          </p>
        </div>
      </div>
    </div>
  );

 
}

export default Login;

