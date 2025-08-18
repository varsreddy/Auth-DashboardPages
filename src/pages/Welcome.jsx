import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-sm w-full p-6 text-center">
        <h1 className="text-xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="w-full py-2 mb-3 rounded-md bg-purple-600 text-white font-semibold"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full py-2 rounded-md bg-purple-200 text-purple-800 font-semibold"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
