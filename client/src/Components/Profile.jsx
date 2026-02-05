import { useState } from 'react';
import { Sprout, Phone, Mail, MapPin, Edit3, LogOut, Camera } from 'lucide-react';

export default function Profile({ onLogout, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400');
  const [formData, setFormData] = useState({
    name: 'Rajesh Kumar',
    mobileNumber: '+91 98765 43210',
    email: 'rajesh.farmer@example.com',
    location: 'Punjab, India',
    farmSize: '45 acres',
    crops: 'Wheat, Rice, Corn',
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 relative overflow-hidden h-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 right-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute -bottom-10 left-32 w-40 h-40 bg-white rounded-full"></div>
        </div>
        <div className="absolute left-8 top-4 flex items-center gap-3 z-10">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">AgriConnect</h1>
        </div>
        <button
          onClick={onLogout}
          className="absolute right-8 top-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white hover:bg-white/30 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="relative group">
                  <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-green-200 hover:border-green-400 transition-all">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-2 right-2 bg-gradient-to-r from-emerald-600 to-green-600 p-3 rounded-full text-white cursor-pointer hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg">
                      <Camera className="w-5 h-5" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{formData.name}</h2>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-green-600 font-semibold text-lg">
                    <Phone className="w-5 h-5" />
                    {formData.mobileNumber}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                {!isEditing ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                        Email Address
                      </label>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <Mail className="w-5 h-5 text-green-600" />
                        <span className="text-gray-800 font-medium">{formData.email}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                        Farm Location
                      </label>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-gray-800 font-medium">{formData.location}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                        Farm Size
                      </label>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <span className="text-gray-800 font-medium">{formData.farmSize}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                        Primary Crops
                      </label>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <span className="text-gray-800 font-medium">{formData.crops}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditing(true)}
                      className="w-full flex items-center justify-center gap-2 mt-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                    >
                      <Edit3 className="w-5 h-5" />
                      Edit Profile
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Farm Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Farm Size
                      </label>
                      <input
                        type="text"
                        name="farmSize"
                        value={formData.farmSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Crops
                      </label>
                      <input
                        type="text"
                        name="crops"
                        value={formData.crops}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={handleSave}
                        className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-green-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="flex-1 bg-gray-300 text-gray-800 py-4 rounded-2xl font-semibold hover:bg-gray-400 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600/10 to-green-600/10 px-8 py-6 border-t border-green-200">
            <p className="text-center text-green-700 font-semibold italic">
              "Success in agriculture comes from hard work, smart decisions, and staying connected with your community."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
