import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SessionVerification from '../Controller/SessionVerification';
import { Sprout, Phone, Mail, MapPin, Edit3, LogOut, Camera } from 'lucide-react';

export default function Profile({ onLogout, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [menuBar,setMenuBar] = useState(false);
  const [profileImage, setProfileImage] = useState('data:image/jpeg;base64,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');
  const [name,setName] = useState("Loading");
  const [location,setLocation] = useState("Loading");
  const [email,setEmail] = useState("Loading");
  const [file,setFile] = useState(null);
  let isProfileModified= false;
  const [modifiedName,setModifiedName] = useState("");
    const [modifiedLocation,setModifiedLocation] = useState("");
 
  

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

     const profileViewer = async ()=>{
      const request = await fetch("http://localhost:5000/api/ProfileViewer",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        credentials:"include",
        body:JSON.stringify({request:"profileViewer"})
      });
      const serverResponse = await request.json();
      setName(serverResponse.name);
      setLocation(serverResponse.location);
      setEmail(serverResponse.email);
     const imageSrc = `data:image/${serverResponse.extension};base64,${serverResponse.profilePic}`;
     setProfileImage(imageSrc);
     }
     profileViewer();
    },[]);
   
    const profileModifier = async()=>{
      let formsData =new FormData();
       formsData.append("name",modifiedName);
    formsData.append("location",modifiedLocation);
   
    if(file){
     formsData.append("image",file);
     isProfileModified = true;
      
    }
    formsData.append("isImage",isProfileModified);
     let request = await fetch("http://localhost:5000/api/ProfileModifier",{
     method:"POST",
       credentials:"include",
     body:formsData
     });
     let serverResponse = await request.text();
      if(serverResponse == "true"){
        isProfileModified = false;
      setModifiedName("");
      setModifiedLocation("");
      setProfileImage(URL.createObjectURL(file));
      setName(modifiedName);
      setLocation(modifiedLocation);
      }
      
    };


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleChange = (e) => {
   if(e.target.name == 'name'){
    setModifiedName(e.target.value);
    
   }
   else if (e.target.name == "location"){
    setModifiedLocation(e.target.value);
   }
  };

  const handleSave = async () => {
    setIsEditing(false);
    await profileModifier();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">

    <img onClick={()=>{setMenuBar(!menuBar)}}
  src="/hamburger.png"
  class="
    h-[30px] w-[50px]
    fixed
    top-[16px] right-[12px]
    z-20  cursor-pointer
  "
/>




{menuBar && <section
      className="
        fixed top-[105px] right-[50px]
        h-[150px] w-[200px]
        border-2 border-lime-500
        rounded-[5px]
        flex flex-col items-center justify-around bg-white z-[20]
      "
    >
      <div onClick={()=>{setMenuBar(!menuBar);navigate("/Detect")}}
        className="
          h-full w-full
          border border-lime-400
          flex items-center justify-center
          cursor-pointer
          text-green-600 bg-white
          transition-all duration-500 ease-in-out
          hover:bg-green-600 hover:text-white 
        "
      >
        Detect Disease
      </div>

      <div onClick={()=>{setMenuBar(!menuBar);navigate("/History");}}
        className="
          h-full w-full
          border border-lime-400
          flex items-center justify-center
          cursor-pointer
          text-green-600 bg-white
          transition-all duration-500 ease-in-out
          hover:bg-green-600 hover:text-white
        "
      >
        History
      </div>

      <div onClick={()=>{setMenuBar(!menuBar);navigate("/Profile")}}
        className="
          h-full w-full
          border border-lime-400
          flex items-center justify-center
          cursor-pointer
          text-green-600 bg-white
          transition-all duration-500 ease-in-out
          hover:bg-green-600 hover:text-white
        "
      >
        Profile
      </div>
    </section>}







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
          className="absolute right-8 top-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white hover:bg-white/30 transition-all mt-[40px] mr-[-25px]"
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
                 
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
                        <span className="text-gray-800 font-medium">{email}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                        Farm Location
                      </label>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="text-gray-800 font-medium">{location}</span>
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
                        value={modifiedName}
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
                        value={email}
                        readOnly
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
                        value={modifiedLocation}
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