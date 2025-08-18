import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        formData
      );
      toast.success(res.data.message || "Signup successful ");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.error || "Signup failed ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
          Create your PopX account
        </h2>

        <input
          name="fullName"
          placeholder="Full Name*"
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="phone"
          placeholder="Phone number*"
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address*"
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />
        <input
          name="company"
          placeholder="Company name"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-purple-500"
        />

        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Are you an Agency?*</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="true"
                checked={formData.isAgency === true}
                onChange={() => setFormData({ ...formData, isAgency: true })}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="false"
                checked={formData.isAgency === false}
                onChange={() => setFormData({ ...formData, isAgency: false })}
              />
              No
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}
