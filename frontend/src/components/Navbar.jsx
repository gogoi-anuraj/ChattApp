import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessagesSquare, Moon, Sun, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  const [dark, setDark] = useState(() =>{
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ==="dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleTheme = () => {
    setDark((prev) => !prev);
  }

  return (
    <div>
      <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-16">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2.5 hover:opacity-80 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessagesSquare className="w-5 h-5 text-primary" />
                </div>
                <h1 className="text-lg font-bold">ChattApp</h1>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <button
              onClick={handleTheme}
              className="btn btn-sm btn-ghost"
              title="Toggle Theme">
                {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {authUser && (
                <>
                  <Link to={"/profile"} className="btn btn-sm gap-2">
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>

                  <button className="flex gap-2 items-center cursor-pointer" onClick={logout}>
                    <LogOut className="size-5" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
