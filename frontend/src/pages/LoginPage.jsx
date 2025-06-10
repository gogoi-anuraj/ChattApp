import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingin } = useAuthStore();


  const handleSumbit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
          {/* left side*/}
          <div className="flex flex-col justify-center items-center p-6 sm:p-12">
            <div className="w-full max-w-md space-y-8">
              {/*Logo*/}
              <div className="text-center mb-8">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessagesSquare />
                  </div>
                  <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
                  <p className="text-base-content/60">
                    Sign in to your account
                  </p>
                </div>
              </div>
              {/*form*/}
    
              <form onSubmit={handleSumbit} className="space-y-6">
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className={`input input-bordered w-full`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
    
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`input input-bordered w-full`}
                      placeholder="*********"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-5 text-base-content/40" />
                      ) : (
                        <Eye className="size-5 text-base-content/40" />
                      )}
                    </button>
                  </div>
                </div>
    
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isLoggingin}
                >
                  {isLoggingin ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
    
              <div className="text-center">
                <p className="text-base-content/60">
                  Don't have an account?{" "}
                  <Link to="/signup" className="Link link-primary">
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </div>
    
          {/*right side*/}
           <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <div className="flex justify-center items-center">
            <div className="skeleton h-32 w-32"></div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
          <p className="text-base-content/60">
            "Sign in to continue your conversations and catch up with your messages."
          </p>
        </div>
      </div>


          
        </div>
  )
};

export default LoginPage;
