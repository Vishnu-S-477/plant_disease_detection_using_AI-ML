import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SessionVerification from '../Controller/SessionVerification';
import { Calendar, TrendingUp, Trash2 } from 'lucide-react';

function History() {
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
  const initialRecords = [
    {
      id: 1,
      diseaseName: "Influenza Type A",
      recoveryPercentage: 95,
      date: "2024-01-15",
      imageUrl: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Seasonal flu with mild symptoms"
    },
    {
      id: 2,
      diseaseName: "Bronchitis",
      recoveryPercentage: 88,
      date: "2024-03-22",
      imageUrl: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Acute respiratory condition"
    },
    {
      id: 3,
      diseaseName: "Migraine",
      recoveryPercentage: 92,
      date: "2024-05-10",
      imageUrl: "https://images.pexels.com/photos/3758117/pexels-photo-3758117.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Chronic headache condition"
    },
    {
      id: 4,
      diseaseName: "Gastroenteritis",
      recoveryPercentage: 100,
      date: "2024-07-08",
      imageUrl: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stomach infection fully recovered"
    },
    {
      id: 5,
      diseaseName: "Allergic Rhinitis",
      recoveryPercentage: 78,
      date: "2024-09-18",
      imageUrl: "https://images.pexels.com/photos/4167540/pexels-photo-4167540.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Seasonal allergy management"
    }
  ];

  const [historyRecords, setHistoryRecords] = useState(initialRecords);

  const getRecoveryColor = (percentage) => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    return "text-amber-600";
  };

  const getRecoveryBgColor = (percentage) => {
    if (percentage >= 90) return "bg-green-100";
    if (percentage >= 70) return "bg-blue-100";
    return "bg-amber-100";
  };

  const deleteRecord = (id) => {
    setHistoryRecords(historyRecords.filter(record => record.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Medical History
          </h1>
          <p className="text-slate-600 text-base">
            Your complete health recovery timeline
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {historyRecords.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No medical history records found.</p>
            </div>
          ) : (
            historyRecords.map((record) => (
              <div
                key={record.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 h-64 md:h-64">
                    <img
                      src={record.imageUrl}
                      alt={record.diseaseName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <h2 className="text-2xl font-bold text-slate-800 mb-1">
                          {record.diseaseName}
                        </h2>
                        <p className="text-slate-600 text-sm">{record.description}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getRecoveryBgColor(record.recoveryPercentage)}`}>
                            <TrendingUp className={`w-6 h-6 ${getRecoveryColor(record.recoveryPercentage)}`} />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium">Recovery Status</p>
                            <p className={`text-xl font-bold ${getRecoveryColor(record.recoveryPercentage)}`}>
                              {record.recoveryPercentage}%
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-slate-100">
                            <Calendar className="w-6 h-6 text-slate-600" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-500 font-medium">Date</p>
                            <p className="text-base font-semibold text-slate-700">
                              {new Date(record.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full transition-all duration-500 ${
                                record.recoveryPercentage >= 90
                                  ? 'bg-gradient-to-r from-green-400 to-green-600'
                                  : record.recoveryPercentage >= 70
                                  ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                                  : 'bg-gradient-to-r from-amber-400 to-amber-600'
                              }`}
                              style={{ width: `${record.recoveryPercentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => deleteRecord(record.id)}
                        className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-lg transition-all duration-200 hover:scale-105 text-sm"
                      >
                        <Trash2 className="w-5 h-5" />
                        <span className="font-medium">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
