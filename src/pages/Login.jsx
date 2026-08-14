import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { AuthContextData } from "../context/AuthContext";
import heroHeadphones from "../assets/hero_headphones.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, logUser } = useContext(AuthContextData);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const submitHandler = (data) => {
    console.log("Login Submitted:", data);
    const response = loginUser(data.email, data.password)
    if (!response.success) {
      alert(response.message)
      return;
    }

    if (response.user?.role === "artist") {
      navigate("/artist-dashboard");
    } else {
      navigate("/");
    }
  };


  return (
    <div className="font-body-md text-body-md antialiased min-h-screen">
      <main className="flex min-h-screen flex-col md:flex-row">
        {/* Left Section: Artistic Illustration */}
        <section className="hidden md:flex md:w-1/2 min-h-screen relative bg-surface-container-lowest items-center justify-center p-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-tertiary/10 blur-[120px]"></div>
          </div>

          <div className="relative z-10 w-full max-w-md floating-anim text-center flex flex-col items-center">
            <div className="w-full max-w-sm mb-6 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.35)]">
              <img
                src={heroHeadphones}
                alt="MusicHub 3D Metallic Headphones"
                className="w-full h-auto object-contain rounded-2xl block"
              />
            </div>

            <div className="space-y-2">
              <h2 className="font-display-lg text-4xl font-extrabold text-primary tracking-tight">
                MusicHub
              </h2>
              <p className="font-body-lg text-base text-on-surface-variant">
                Experience high-fidelity sound tailored to your soul.
              </p>
            </div>
          </div>

          {/* Absolute decorative icons */}
          <div className="absolute top-16 right-16 text-primary/30 rotate-12 pointer-events-none">
            <span className="material-symbols-outlined !text-6xl">
              music_note
            </span>
          </div>
          <div className="absolute bottom-24 left-16 text-tertiary/20 -rotate-12 pointer-events-none">
            <span className="material-symbols-outlined !text-4xl">
              equalizer
            </span>
          </div>
        </section>

        {/* Right Section: Login Interface */}
        <section className="flex-1 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-[#0F0F0F] relative">
          {/* Mobile Brand Header (Hidden on Desktop) */}
          <div className="absolute top-8 left-margin-mobile md:hidden flex items-center gap-xs">
            <span
              className="material-symbols-outlined text-primary !text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              graphic_eq
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary">
              MusicHub
            </span>
          </div>

          <div className="glass-card w-full max-w-[440px] rounded-xl p-md md:p-lg">
            <div className="mb-lg">
              <h1 className="font-headline-md text-headline-md text-on-surface mb-xs">
                Welcome Back
              </h1>
              <p className="font-body-md text-on-surface-variant">
                Sign in to continue your journey.
              </p>
            </div>

            <form className="space-y-md" onSubmit={handleSubmit(submitHandler)}>
              {/* Email Field */}
              <div className="space-y-xs">
                <label
                  className="font-label-sm text-label-sm text-on-surface-variant uppercase"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    mail
                  </span>
                  <input
                    {...register("email", { required: "Email is required" })}
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-surface-container-low border border-white/5 rounded-lg py-3 pl-12 pr-4 text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-xs">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-sm text-label-sm text-on-surface-variant uppercase"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <a
                    className="font-label-sm text-label-sm text-primary hover:underline transition-all"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                    lock
                  </span>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-surface-container-low border border-white/5 rounded-lg py-3 pl-12 pr-12 text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface cursor-pointer"
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-xs">
                <div className="relative flex items-center">
                  <input
                    {...register("remember")}
                    id="remember"
                    type="checkbox"
                    className="w-5 h-5 rounded border-white/10 bg-surface-container-low text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                  />
                </div>
                <label
                  className="font-body-md text-on-surface-variant select-none cursor-pointer"
                  htmlFor="remember"
                >
                  Remember Me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="purple-gradient w-full py-3.5 rounded-lg font-headline-md text-white glow-effect hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-xs cursor-pointer disabled:opacity-70"
              >
                Login
                <span className="material-symbols-outlined !text-xl">
                  arrow_forward
                </span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-md py-xs">
                <div className="h-[1px] flex-1 bg-white/5"></div>
                <span className="font-label-sm text-label-sm text-outline">
                  OR
                </span>
                <div className="h-[1px] flex-1 bg-white/5"></div>
              </div>

              {/* Social Login */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-md py-3 rounded-lg border border-white/10 hover:bg-white/5 active:scale-[0.98] transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M12 5.04c1.94 0 3.51.68 4.75 1.81l3.51-3.51C18.17 1.34 15.36 0 12 0 7.31 0 3.32 2.67 1.32 6.56l4.08 3.16C6.38 6.94 8.94 5.04 12 5.04z"
                    fill="#EA4335"
                  />
                  <path
                    d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.89 3.01c2.27-2.11 3.53-5.22 3.53-8.83z"
                    fill="#4285F4"
                  />
                  <path
                    d="M5.4 14.71c-.24-.73-.37-1.5-.37-2.31s.13-1.58.37-2.31L1.32 6.56C.48 8.19 0 10.04 0 12s.48 3.81 1.32 5.44l4.08-3.16z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.89-3.01c-1.11.75-2.52 1.19-4.04 1.19-3.06 0-5.62-1.9-6.56-4.68l-4.08 3.16C3.32 21.33 7.31 24 12 24z"
                    fill="#34A853"
                  />
                </svg>
                <span className="font-body-md text-on-surface">
                  Continue with Google
                </span>
              </button>
            </form>

            {/* Register Footer */}
            <div className="mt-lg pt-md border-t border-white/5 text-center">
              <p className="font-body-md text-on-surface-variant">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-medium hover:underline ml-xs transition-all"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>

          {/* Subtle background branding */}
          <div className="absolute bottom-8 right-margin-desktop opacity-5 select-none pointer-events-none hidden md:block">
            <span className="font-display-lg text-[120px] font-extrabold uppercase leading-none">
              Vibe
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
