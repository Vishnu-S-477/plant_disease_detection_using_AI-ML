import { Camera, Upload } from 'lucide-react';
import { useEffect, useState } from 'react';

import SessionVerification from '../Controller/SessionVerification';
import { useNavigate } from 'react-router-dom';


 function Detect() {
  const navigate = useNavigate();
    useEffect(()=>{
     const sessionVerify = async ()=>{
      const result = await SessionVerification();
       if(! result  ){
        alert(result);
      alert("Session Expired");
      navigate("/");
    }
     }
     sessionVerify();
    },[]);
  const [score, setScore] = useState(1);

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    if (score >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Definitely Yes';
    if (score >= 60) return 'Recoverable';
    if (score >= 40) return 'Consider and Spend';
    if(score < 40) return 'Definitely Not';
    return 'Poor';
  };

  const handleCamera = () => {
    console.log('Camera clicked');
  };

  const handleUpload = () => {
    console.log('Upload clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center py-12 px-4">
      <div className="flex gap-6 mb-12">
        <button
          onClick={handleCamera}
          className="group relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105"
        >
          <Camera className="w-8 h-8 text-white" />
          <span className="absolute -bottom-8 text-sm font-medium text-gray-700">Camera</span>
        </button>

        <button
          onClick={handleUpload}
          className="group relative w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-105"
        >
          <Upload className="w-8 h-8 text-white" />
          <span className="absolute -bottom-8 text-sm font-medium text-gray-700">Upload</span>
        </button>
      </div>

      <div className="mt-8 relative mb-12">
        <svg width="300" height="180" viewBox="0 0 300 180" className="drop-shadow-lg">
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
              <stop offset="25%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#eab308', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#84cc16', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          <path
            d="M 30 150 A 120 120 0 0 1 270 150"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />

          <path
            d="M 30 150 A 120 120 0 0 1 270 150"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${(score / 100) * 377} 377`}
            className="transition-all duration-1000 ease-out"
          />

          <circle
            cx={150 + 120 * Math.cos(Math.PI - (score / 100) * Math.PI)}
            cy={150 - 120 * Math.sin(Math.PI - (score / 100) * Math.PI)}
            r="12"
            fill="white"
            stroke={score >= 80 ? '#22c55e' : score >= 60 ? '#eab308' : score >= 40 ? '#f97316' : '#ef4444'}
            strokeWidth="4"
            className="drop-shadow-md transition-all duration-1000 ease-out"
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-8">
          <div className={`text-5xl font-bold ${getScoreColor(score)} transition-colors duration-300`}>
            {score}
          </div>
          <div className="text-sm text-gray-600 font-medium mt-1">{getScoreLabel(score)}</div>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-sm text-gray-500 font-medium mb-2">Disease Detected</h3>
            <p className="text-2xl font-bold text-gray-800">Diabetic Retinopathy</p>
            <p className="text-sm text-gray-600 mt-2">Stage 2 - Moderate</p>
          </div>

          <div className="hidden md:block h-16 w-px bg-gray-300"></div>

          <div className="flex-1 text-center md:text-right">
            <h3 className="text-sm text-gray-500 font-medium mb-2">Consultation Fee</h3>
            <p className="text-2xl font-bold text-gray-800">$149.00</p>
            <p className="text-sm text-green-600 mt-2">Insurance Eligible</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detect;
