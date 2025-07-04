import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoProfile from '../assets/logo-profile.png';
import illustration from '../assets/illustration.png';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword || !form.phone) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    console.log('Signup form submitted:', form);
    navigate('/login');
  };

  // Helper to determine if input is filled
  const isFilled = (val) => val && val.length > 0;

  // Track focus for phone field
  const [phoneFocused, setPhoneFocused] = useState(false);
  
  return (
    <div className="min-h-screen h-screen flex justify-end items-center bg-[#0f172a] font-sans p-0 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-screen bg-[#0f172a] font-sans p-0 overflow-hidden">
    {/* LEFT PANEL */}
    <div className="relative flex-1 flex flex-col justify-between items-center bg-[#0f172a] min-h-[400px] md:w-1/2 w-full">
      {/* Logo at top-left (fixed) */}
      <div className="fixed top-6 left-6 flex items-center z-40">
        <img src={logoProfile} alt="VLink Logo" className="h-10 w-10 mr-3" />
        <span className="text-white font-extrabold text-2xl tracking-wide">VLink CRM</span>
      </div>
      {/* Centered illustration */}
      <div className="flex-1 flex items-center justify-center w-full">
        <img
          src={illustration}
          alt="Illustration"
          className="max-h-[340px] w-auto object-contain mx-auto"
          style={{ maxWidth: '90%' }}
        />
      </div>
      {/* Bottom quote */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
        <p className="text-white text-lg font-semibold leading-snug drop-shadow">
          “Smart workflows. Smarter decisions.”<br />
          <span className="text-[#38bdf8]">Empower your supply chain from the very first login.</span>
        </p>
      </div>
    </div>
      {/* RIGHT PANEL */}
      <div className="mr-0 ml-0 mt-0 mb-0 max-w-[500px] w-full bg-[#1e293b] p-10 rounded-[4px] shadow-lg border-none h-full overflow-visible select-none flex flex-col justify-center signup-container-no-margin">
        <h2 className="mb-7 text-4xl font-extrabold text-white text-center tracking-tight" style={{ fontSize: '2.2rem', lineHeight: '4rem' }}>
          Create Account
        </h2>
        <form className="flex flex-col gap-2 signup-form-gap-responsive" onSubmit={handleSubmit} autoComplete="off">
          {/* Name Field with floating label */}
          <div className="relative w-full box-border flex flex-col signup-field-responsive">
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={`w-full box-border pt-4 pb-2 px-3 text-[0.98rem] border border-[#334155] rounded-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)] peer`}
              placeholder=" "
              required
              autoComplete="name"
            />
            <label
              htmlFor="name"
              className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                ${isFilled(form.name)
                  ? 'top-0.5 left-3 text-[0.85rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-1/2 left-3 -translate-y-1/2 text-[0.98rem] text-[#94a3b8]'}
                peer-focus:top-0.5 peer-focus:left-3 peer-focus:text-[0.85rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:text-[#94a3b8]`}
            >
              Full Name
            </label>
          </div>
          {/* Email Field with floating label */}
          <div className="relative w-full box-border flex flex-col signup-field-responsive">
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full box-border pt-4 pb-2 px-3 text-[0.98rem] border border-[#334155] rounded-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)] peer`}
              placeholder=" "
              required
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                ${isFilled(form.email)
                  ? 'top-0.5 left-3 text-[0.85rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-1/2 left-3 -translate-y-1/2 text-[0.98rem] text-[#94a3b8]'}
                peer-focus:top-0.5 peer-focus:left-3 peer-focus:text-[0.85rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:text-[#94a3b8]`}
            >
              Email
            </label>
          </div>
          {/* Password Field with floating label */}
          <div className="relative w-full box-border flex flex-col signup-field-responsive">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className={`w-full box-border pt-4 pb-2 px-3 text-[0.98rem] border border-[#334155] rounded-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 pr-8 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)] peer`}
              placeholder=" "
              required
              autoComplete="new-password"
            />
            <label
              htmlFor="password"
              className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                ${isFilled(form.password)
                  ? 'top-0.5 left-3 text-[0.85rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-1/2 left-3 -translate-y-1/2 text-[0.98rem] text-[#94a3b8]'}
                peer-focus:top-0.5 peer-focus:left-3 peer-focus:text-[0.85rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:text-[#94a3b8]`}
            >
              Password
            </label>
            <button
              type="button"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-none border-none p-0 m-0 cursor-pointer outline-none flex items-center z-30"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg
                  className={`w-[26px] h-[26px] text-[#94a3b8] transition-colors drop-shadow-none
                    ${(passwordFocused || isFilled(form.password)) ? 'text-blue-600 drop-shadow-[0_0_6px_#2563eb]' : ''}
                    hover:text-blue-600 focus:text-blue-600 hover:drop-shadow-[0_0_6px_#2563eb] focus:drop-shadow-[0_0_6px_#2563eb]`
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  className={`w-[26px] h-[26px] text-[#94a3b8] transition-colors drop-shadow-none
                    ${(passwordFocused || isFilled(form.password)) ? 'text-blue-600 drop-shadow-[0_0_6px_#2563eb]' : ''}
                    hover:text-blue-600 focus:text-blue-600 hover:drop-shadow-[0_0_6px_#2563eb] focus:drop-shadow-[0_0_6px_#2563eb]`
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06" />
                  <path d="M1 1l22 22" />
                </svg>
              )}
            </button>
          </div>
          {/* Confirm Password Field with floating label */}
          <div className="relative w-full box-border flex flex-col signup-field-responsive">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={handleChange}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
              className={`w-full box-border pt-4 pb-2 px-3 text-[0.98rem] border border-[#334155] rounded-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 pr-8 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)] peer`}
              placeholder=" "
              required
              autoComplete="new-password"
            />
            <label
              htmlFor="confirmPassword"
              className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                ${isFilled(form.confirmPassword)
                  ? 'top-0.5 left-3 text-[0.85rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-1/2 left-3 -translate-y-1/2 text-[0.98rem] text-[#94a3b8]'}
                peer-focus:top-0.5 peer-focus:left-3 peer-focus:text-[0.85rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:text-[#94a3b8]`}
            >
              Confirm Password
            </label>
            <button
              type="button"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-none border-none p-0 m-0 cursor-pointer outline-none flex items-center z-30"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {showConfirmPassword ? (
                <svg
                  className={`w-[26px] h-[26px] text-[#94a3b8] transition-colors drop-shadow-none
                    ${(confirmPasswordFocused || isFilled(form.confirmPassword)) ? 'text-blue-600 drop-shadow-[0_0_6px_#2563eb]' : ''}
                    hover:text-blue-600 focus:text-blue-600 hover:drop-shadow-[0_0_6px_#2563eb] focus:drop-shadow-[0_0_6px_#2563eb]`
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  className={`w-[26px] h-[26px] text-[#94a3b8] transition-colors drop-shadow-none
                    ${(confirmPasswordFocused || isFilled(form.confirmPassword)) ? 'text-blue-600 drop-shadow-[0_0_6px_#2563eb]' : ''}
                    hover:text-blue-600 focus:text-blue-600 hover:drop-shadow-[0_0_6px_#2563eb] focus:drop-shadow-[0_0_6px_#2563eb]`
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.81 21.81 0 0 1 5.06-6.06" />
                  <path d="M1 1l22 22" />
                </svg>
              )}
            </button>
          </div>
          {/* Phone Field with floating label and +91 prefix */}
          <div className="relative w-full box-border flex flex-col">
            <div className="relative w-full flex items-stretch">
              <span className="flex items-center px-3 rounded-l-[8px] bg-[#334155] text-[#cbd5e1] text-[0.98rem] border border-r-0 border-[#334155] select-none pointer-events-none">+91</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="peer w-full box-border pt-4 pb-2 px-3 text-[0.98rem] border border-l-0 border-[#334155] rounded-r-[8px] bg-[#0f172a] text-white transition-colors duration-300 outline-none mb-0 focus:border-blue-600 focus:shadow-[0_0_0_2px_rgba(37,99,235,0.15)]"
                placeholder=" "
                required
                autoComplete="tel"
                style={{
                  boxShadow: '0 0 0 2px rgba(37,99,235,0.15)',
                  borderColor: '#334155',
                }}
                onFocus={e => {
                  setPhoneFocused(true);
                  e.target.previousSibling.style.borderColor = '#2563eb';
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 2px rgba(37,99,235,0.15)';
                }}
                onBlur={e => {
                  setPhoneFocused(false);
                  e.target.previousSibling.style.borderColor = '#334155';
                  e.target.style.borderColor = '#334155';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <label
              htmlFor="phone"
              className={`absolute bg-transparent pointer-events-none transition-all font-semibold z-20
                ${(isFilled(form.phone) || phoneFocused)
                  ? 'top-0.5 left-16 text-[0.85rem] text-blue-400 px-[2px] shadow-[0_1px_2px_rgba(15,23,42,0.08)]'
                  : 'top-1/2 left-16 -translate-y-1/2 text-[0.98rem] text-[#94a3b8]'}
                peer-focus:top-0.5 peer-focus:left-16 peer-focus:text-[0.85rem] peer-focus:text-blue-400 peer-focus:bg-transparent peer-focus:px-[2px] peer-focus:shadow-[0_1px_2px_rgba(15,23,42,0.08)] peer-focus:-translate-y-0
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-16 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[0.98rem] peer-placeholder-shown:text-[#94a3b8]`}
            >
              Phone Number
            </label>
          </div>
          {error && (
            <div className="text-[#f87171] bg-[#1e293b] rounded-[6px] py-2 px-3 text-[0.95rem] mb-1 text-center">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full mt-[10px] py-[15px] text-[1.1rem] font-extrabold text-white bg-blue-600 rounded-[10px] border-none cursor-pointer transition-colors duration-200 shadow-md tracking-wide hover:bg-blue-700 hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center my-4 text-center text-[#94a3b8] font-semibold text-base w-full signup-divider-responsive">
          <div className="flex-1 h-px bg-[#334155]" />
          <span className="px-3">or sign up with</span>
          <div className="flex-1 h-px bg-[#334155]" />
        </div>
        <div className="flex gap-[10px] justify-center mt-1 signup-socials-responsive">
          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors"
            aria-label="Sign up with Google"
            onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}
          >
            <svg
              className="w-[22px] h-[22px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.5 544.3"
            >
              <path
                fill="#fff"
                d="M533.5 278.4c0-18.9-1.6-37-4.7-54.5H272v103.1h146.9c-6.3 34.2-25.6 63.3-54.8 82.8v68h88.5c51.7-47.7 81.9-117.8 81.9-199.4z"
              />
              <path
                fill="#fff"
                d="M272 544.3c73.7 0 135.7-24.5 180.9-66.7l-88.5-68c-24.6 16.5-56 26-92.4 26-71 0-131.2-47.9-152.8-112.3h-90.7v70.6c45.3 89.4 138 150.4 243.5 150.4z"
              />
              <path
                fill="#fff"
                d="M119.2 323.3c-10.2-30.6-10.2-63.8 0-94.4v-70.6h-90.7c-39.4 77.2-39.4 169.7 0 246.9l90.7-70.6z"
              />
              <path
                fill="#fff"
                d="M272 107.7c39.8-.6 77.8 14 106.7 40.4l80-80C408.4 24.4 345.1 0 272 0 166.5 0 73.8 60.9 28.5 150.4l90.7 70.6c21.6-64.4 81.8-112.3 152.8-112.3z"
              />
            </svg>
            Google
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors"
            aria-label="Sign up with LinkedIn"
            onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}
          >
            <svg
              className="w-[22px] h-[22px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
            </svg>
            LinkedIn
          </button>
        </div>
        <div className="mt-3 text-center text-[#94a3b8] text-base signup-bottom-responsive">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-1 hover:text-blue-400 hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
      <style>{`
        /* Responsive content inside the signup container */
        @media (max-height: 900px) {
          .mb-7 { margin-bottom: 1.2rem !important; }
          .text-3xl { font-size: 1.5rem !important; }
          .gap-3 { gap: 0.7rem !important; }
          .text-base, .text-[0.98rem], .text-[1.1rem] { font-size: 0.95rem !important; }
          .py-[15px] { padding-top: 0.7rem !important; padding-bottom: 0.7rem !important; }
        }
        @media (max-height: 700px) {
          .mb-7 { margin-bottom: 1rem !important; }
          .text-3xl { font-size: 1.1rem !important; }
          .gap-3 { gap: 0.4rem !important; }
          .text-base, .text-[0.98rem], .text-[1.1rem] { font-size: 0.85rem !important; }
          .py-[15px] { padding-top: 0.4rem !important; padding-bottom: 0.4rem !important; }
        }
        input[type='password']::-ms-reveal,
        input[type='password']::-ms-clear {
          display: none;
        }
        input[type='password']::-webkit-credentials-auto-fill-button,
        input[type='password']::-webkit-input-password-reveal-button {
          display: none !important;
        }
        input[type='password']::-webkit-input-password-reveal {
          display: none !important;
        }
        input[type='password']::-o-input-password-reveal-button {
          display: none !important;
        }
        .signup-container-no-margin {
          height: 100vh !important;
          min-height: 100vh !important;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
          border-radius: 0 !important;
        }
        html, body {
          overflow: hidden !important;
        }
      `}</style>
    </div>
    </div>
);
}
