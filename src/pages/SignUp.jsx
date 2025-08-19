import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, phone, email, password, isAgency } = formData;

    if (!fullName || !phone || !email || !password || isAgency === null) {
      toast.error("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      // Dummy frontend-only signup
      const res = { data: { message: "Signup successful!" } };
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error("Signup failed");
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
          Create your account
        </h2>

        <input
          name="fullName"
          placeholder="Full Name*"
          value={formData.fullName}
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />

        <input
          name="phone"
          placeholder="Phone number*"
          value={formData.phone}
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email address*"
          value={formData.email}
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={formData.password}
          required
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-500"
        />

        <input
          name="company"
          placeholder="Company name"
          value={formData.company}
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

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
