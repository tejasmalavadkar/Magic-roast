import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./src/components/header";
import Footer from "./src/components/footer";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useNavigate();

  // Handle Google authentication callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleToken = urlParams.get('token');
    
    if (googleToken) {
      // Store the token from Google auth
      localStorage.setItem('token', googleToken);
      
      // Get user data from URL params or make a request to get user info
      const userParam = urlParams.get('user');
      if (userParam) {
        const userData = JSON.parse(decodeURIComponent(userParam));
        localStorage.setItem('user', JSON.stringify(userData));
      }
      
      // Check for pending cart item
      const pendingItem = localStorage.getItem('pendingCartItem');
      if (pendingItem) {
        const product = JSON.parse(pendingItem);
        localStorage.removeItem('pendingCartItem');
        
        // Update cart count
        const currentCartCount = parseInt(localStorage.getItem('cartCount') || '0');
        localStorage.setItem('cartCount', (currentCartCount + 1).toString());
        
        // Dispatch event to notify header of cart update
        window.dispatchEvent(new Event('cartUpdated'));
        
        // Redirect to shop with success message
        router.push(`/shop?added=${encodeURIComponent(product.name)}`);
      } else {
        // Redirect to my account page
        router.push('/my-account');
      }
      
      // Clear URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and user data in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        // Check if there's a pending cart item
        const pendingItem = localStorage.getItem('pendingCartItem');
        if (pendingItem) {
          const product = JSON.parse(pendingItem);
          localStorage.removeItem('pendingCartItem');
          // Redirect to shop with success message
          router.push(`/shop?added=${encodeURIComponent(product.name)}`);
        } else {
          // Redirect to my account page
          router.push("/my-account");
        }
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f0e3]">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#5a3921] mb-2">Welcome Back</h1>
              <p className="text-[#6a6a6a]">Sign in to your account</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Google Login Button */}
            <div className="mb-6">
              <button
                onClick={() => {
                  // Open Google OAuth popup
                  window.location.href = 'http://localhost:5000/api/auth/google';
                }}
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow hover:shadow-md"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5a3921] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d4a84b] rounded-lg focus:ring-2 focus:ring-[#d4a84b] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#5a3921] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#d4a84b] rounded-lg focus:ring-2 focus:ring-[#d4a84b] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#d4a84b] focus:ring-[#d4a84b] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[#5a3921]">
                    Remember me
                  </label>
                </div>
                
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-[#d4a84b] hover:text-[#c49a3f] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#d4a84b] to-[#c49a3f] text-[#3d2817] py-3 px-4 rounded-lg font-semibold hover:from-[#c49a3f] hover:to-[#b48a2f] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#6a6a6a]">
                Don't have an account?{" "}
                <Link 
                  to="/register" 
                  className="text-[#d4a84b] font-semibold hover:text-[#c49a3f] transition-colors"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
