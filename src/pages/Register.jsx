import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-gutter font-body-md text-body-md selection:bg-primary/30 relative">
      <div className="bg-mesh"></div>
      <main className="w-full max-w-[540px] z-10 my-8">
        {/* Brand Identity */}
        <div className="text-center mb-lg">
          <h1 className="font-headline-md text-headline-md text-primary mb-xs tracking-tight">
            MusicHub
          </h1>
          <p className="text-on-surface-variant font-body-md">
            Join the sound revolution.
          </p>
        </div>

        {/* Registration Card */}
        <div className="glass-card rounded-xl p-md md:p-lg">
          <form className="flex flex-col gap-sm" id="registrationForm">
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-sm mb-xs">
              <button
                type="button"
                id="role-listener"
                className="role-card active flex flex-col items-center justify-center p-md rounded-lg border border-outline-variant bg-surface-container-low hover:bg-surface-container-high group cursor-pointer"
              >
                <span
                  className="material-symbols-outlined text-primary mb-xs text-3xl group-hover:scale-110 transition-transform"
                  data-icon="music_note"
                >
                  music_note
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
                  Listener
                </span>
              </button>

              <button
                type="button"
                id="role-artist"
                className="role-card flex flex-col items-center justify-center p-md rounded-lg border border-outline-variant bg-surface-container-low hover:bg-surface-container-high group cursor-pointer"
              >
                <span
                  className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-xs text-3xl group-hover:scale-110 transition-transform"
                  data-icon="mic"
                >
                  mic
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface">
                  Artist
                </span>
              </button>
            </div>

            {/* Input Fields */}
            <div className="space-y-sm">
              <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors"
                  data-icon="person"
                >
                  person
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-none rounded-full pl-12 pr-4 py-3 text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                />
              </div>

              <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors"
                  data-icon="alternate_email"
                >
                  alternate_email
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full bg-transparent border-none rounded-full pl-12 pr-4 py-3 text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                />
              </div>

              <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                <span
                  className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors"
                  data-icon="mail"
                >
                  mail
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-none rounded-full pl-12 pr-4 py-3 text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                  <span
                    className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors"
                    data-icon="lock"
                  >
                    lock
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full bg-transparent border-none rounded-full pl-12 pr-4 py-3 text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                  />
                </div>

                <div className="relative flex items-center group input-focus-glow rounded-full bg-surface-container-lowest border border-outline-variant transition-all">
                  <span
                    className="material-symbols-outlined absolute left-4 text-on-surface-variant group-focus-within:text-primary transition-colors"
                    data-icon="lock_reset"
                  >
                    lock_reset
                  </span>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm"
                    className="w-full bg-transparent border-none rounded-full pl-12 pr-4 py-3 text-on-surface focus:ring-0 placeholder:text-outline-variant outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-xs px-2 mt-xs">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                className="mt-1 rounded bg-surface-container-low border-outline-variant text-primary focus:ring-primary focus:ring-offset-background cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="font-label-sm text-label-sm text-on-surface-variant select-none"
              >
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline transition-all">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline transition-all">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="mt-sm w-full py-4 rounded-full bg-gradient-to-r from-primary to-[#6d3bd7] text-on-primary font-headline-md text-body-md font-bold shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-xs cursor-pointer"
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

          <div className="mt-md text-center">
            <p className="text-on-surface-variant font-body-md">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-primary font-bold hover:underline ml-xs transition-all"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Visual Hint */}
        <div className="mt-lg flex justify-center gap-md opacity-20 grayscale pointer-events-none">
          <span className="material-symbols-outlined text-4xl" data-icon="speaker">
            speaker
          </span>
          <span className="material-symbols-outlined text-4xl" data-icon="headphones">
            headphones
          </span>
          <span className="material-symbols-outlined text-4xl" data-icon="radio">
            radio
          </span>
        </div>
      </main>
    </div>
  )
}

export default Register