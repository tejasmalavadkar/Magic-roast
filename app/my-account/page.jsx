"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8f0e3]">
        <Header />
        <main className="flex-grow py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4a84b] mx-auto"></div>
              <p className="mt-4 text-[#5a3921]">Loading your account...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f0e3]">
      <Header />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#5a3921] to-[#3d2817] px-8 py-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">My Account</h1>
                  <p className="text-[#d4a84b]">Welcome back, {user?.firstName} {user?.lastName}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="mt-4 md:mt-0 bg-white text-[#5a3921] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="md:w-1/4 bg-[#f8f0e3] p-6 border-r">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "profile" 
                        ? "bg-[#d4a84b] text-[#3d2817] font-semibold" 
                        : "text-[#5a3921] hover:bg-[#f5e6d3]"
                    }`}
                  >
                    Profile Information
                  </button>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "orders" 
                        ? "bg-[#d4a84b] text-[#3d2817] font-semibold" 
                        : "text-[#5a3921] hover:bg-[#f5e6d3]"
                    }`}
                  >
                    Order History
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "settings" 
                        ? "bg-[#d4a84b] text-[#3d2817] font-semibold" 
                        : "text-[#5a3921] hover:bg-[#f5e6d3]"
                    }`}
                  >
                    Account Settings
                  </button>
                </nav>
              </div>

              {/* Main Content */}
              <div className="md:w-3/4 p-8">
                {activeTab === "profile" && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#5a3921] mb-6">Profile Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#5a3921] mb-2">First Name</label>
                        <p className="px-4 py-3 bg-[#f5e6d3] rounded-lg text-[#5a3921]">{user?.firstName}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5a3921] mb-2">Last Name</label>
                        <p className="px-4 py-3 bg-[#f5e6d3] rounded-lg text-[#5a3921]">{user?.lastName}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5a3921] mb-2">Email Address</label>
                        <p className="px-4 py-3 bg-[#f5e6d3] rounded-lg text-[#5a3921]">{user?.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5a3921] mb-2">Phone Number</label>
                        <p className="px-4 py-3 bg-[#f5e6d3] rounded-lg text-[#5a3921]">{user?.phone || "Not provided"}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link 
                        href="/edit-profile"
                        className="inline-block bg-[#d4a84b] text-[#3d2817] px-6 py-3 rounded-lg font-semibold hover:bg-[#c49a3f] transition-colors"
                      >
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#5a3921] mb-6">Order History</h2>
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📦</div>
                      <h3 className="text-xl font-bold text-[#5a3921] mb-2">No Orders Yet</h3>
                      <p className="text-[#6a6a6a] mb-6">You haven't placed any orders yet.</p>
                      <Link 
                        href="/shop"
                        className="inline-block bg-[#d4a84b] text-[#3d2817] px-6 py-3 rounded-lg font-semibold hover:bg-[#c49a3f] transition-colors"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#5a3921] mb-6">Account Settings</h2>
                    <div className="space-y-6">
                      <div className="bg-[#f5e6d3] rounded-lg p-6">
                        <h3 className="font-semibold text-[#5a3921] mb-4">Security</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-[#5a3921] mb-2">Change Password</label>
                            <button className="bg-white text-[#5a3921] px-4 py-2 rounded-lg border border-[#d4a84b] hover:bg-[#f8f0e3] transition-colors">
                              Change Password
                            </button>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#5a3921] mb-2">Two-Factor Authentication</label>
                            <p className="text-sm text-[#6a6a6a]">Enable extra security for your account</p>
                            <button className="mt-2 bg-white text-[#5a3921] px-4 py-2 rounded-lg border border-[#d4a84b] hover:bg-[#f8f0e3] transition-colors">
                              Enable 2FA
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                        <h3 className="font-semibold text-red-800 mb-4">Danger Zone</h3>
                        <p className="text-sm text-red-700 mb-4">Delete your account and all associated data permanently</p>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}