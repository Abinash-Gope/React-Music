import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {
  const [role, setRole] = useState("listener");

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const formData = { ...data, role };
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 font-body-md text-body-md selection:bg-primary/30 relative">
      <div className="bg-mesh"></div>
      <main className="w-full max-w-[500px] z-10 my-auto py-4">
        {/* Brand Identity */}
        <div className="text-center mb-5">
          <h1 className="font-headline-md text-3xl font-bold text-primary tracking-tight mb-1">
            MusicHub
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base">
            Join the sound revolution.
          </p>
        </div>

        {/* Registration Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-3.5"
            id="registrationForm"
          >
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-3 mb-1">
              <button
                onClick={() => {
                  setRole("listener");
                }}
                type="button"
                id="role-listener"
                className={`${role === "listener" ? "active" : ''} role-card flex flex-col items-center justify-center p-3.5 rounded-xl border border-outline-variant bg-surface-container-low hover:bg-surface-container-high group cursor-pointer`}
              >
                <span
                  className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform mb-1"
                  data-icon="music_note"
                >
                  music_note
                </span>
                <span className={`font-label-sm text-xs uppercase tracking-wider font-semibold ${role === "listener" ? "text-on-surface" : "text-on-surface-variant"
                  }`}>
                  Listener
                </span>
              </button>

              <button
                onClick={() => {
                  setRole("artist");
                }}
                type="button"
                id="role-artist"
                className={`${role === "artist" ? "active" : ""
                  } role-card flex flex-col items-center justify-center p-3.5 rounded-xl border border-outline-variant bg-surface-container-low hover:bg-surface-container-high group cursor-pointer`}
              >
                <span
                  className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-2xl group-hover:scale-110 transition-transform mb-1"
                  data-icon="mic"
                >
                  mic
                </span>
                <span className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant group-hover:text-on-surface font-semibold">
                  Artist
                </span>
              </button>
            </div>

            {/* Input Fields */}
            <div className="space-y-3">
              <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl"
                  data-icon="person"
                >
                  person
                </span>
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-none rounded-full pl-11 pr-4 py-2.5 text-sm text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                />
              </div>

              <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl"
                  data-icon="alternate_email"
                >
                  alternate_email
                </span>
                <input
                  {...register("userName")}
                  type="text"
                  placeholder="Username"
                  className="w-full bg-transparent border-none rounded-full pl-11 pr-4 py-2.5 text-sm text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                />
              </div>

              <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl"
                  data-icon="mail"
                >
                  mail
                </span>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-none rounded-full pl-11 pr-4 py-2.5 text-sm text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                  <span
                    className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl"
                    data-icon="lock"
                  >
                    lock
                  </span>
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent border-none rounded-full pl-11 pr-4 py-2.5 text-sm text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                  />
                </div>

                <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                  <span
                    className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl"
                    data-icon="lock_reset"
                  >
                    lock_reset
                  </span>
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirm"
                    className="w-full bg-transparent border-none rounded-full pl-11 pr-4 py-2.5 text-sm text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 px-1 mt-1">
              <input
                {...register("terms")}
                id="terms"
                type="checkbox"
                className="rounded bg-surface-container-low border-outline-variant text-primary focus:ring-primary focus:ring-offset-background cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="font-label-sm text-xs text-on-surface-variant select-none"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-primary hover:underline transition-all"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-primary hover:underline transition-all"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="mt-2 w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-[#6d3bd7] text-on-primary font-headline-md text-sm font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Register
              <span
                className="material-symbols-outlined text-xl"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-on-surface-variant text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-bold hover:underline ml-1 transition-all"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Visual Hint */}
        <div className="mt-6 flex justify-center gap-6 opacity-20 grayscale pointer-events-none">
          <span
            className="material-symbols-outlined text-2xl"
            data-icon="speaker"
          >
            speaker
          </span>
          <span
            className="material-symbols-outlined text-2xl"
            data-icon="headphones"
          >
            headphones
          </span>
          <span
            className="material-symbols-outlined text-2xl"
            data-icon="radio"
          >
            radio
          </span>
        </div>
      </main>
    </div>
  );
};

export default Register;
