import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); 

  useEffect(() => {
    if (!user) {
      toast.error("Please login first");
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null; 

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">

      <div className="w-full max-w-md p-6 border rounded-xl shadow-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Account Settings</h2>
          <button
            onClick={handleLogout}
            className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        
        <div className="flex items-center gap-4 mb-4">
          <img
            src={"/user_img.jpg"}
            alt={user.fullName}
            className="w-16 h-16 rounded-full object-cover border"
          />

          <div>
            <h3 className="font-bold text-lg">{user.fullName}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>
    </div>
  );
}
