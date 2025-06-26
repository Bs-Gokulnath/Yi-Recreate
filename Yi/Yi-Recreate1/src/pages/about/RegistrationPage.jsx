import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RegistrationPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false); // <- new state for toggling

  const handleCaptchaChange = (value) => {
    console.log('Captcha Value:', value);
    setIsVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isVerified) {
      alert('Please verify that you are not a robot!');
      return;
    }

    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-slate-100 px-4 py-12">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Registration</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name & DOB */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input-style" required />
            <input type="date" className="input-style" required />
          </div>

          {/* Email & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="email" placeholder="E-mail Address" className="input-style" required />
            <input type="text" placeholder="City" className="input-style" required />
          </div>

          {/* User Type & Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select className="input-style" required>
              <option value="">Choose User Type</option>
              <option value="Student">Student</option>
              <option value="Professional">Professional</option>
              <option value="Entrepreneur">Entrepreneur</option>
            </select>
            <input type="password" placeholder="Password" className="input-style" required />
          </div>

          <input type="password" placeholder="Confirm Password" className="input-style" required />

          {/* Show/Hide Privacy Policy */}
          <div>
            <button
              type="button"
              onClick={() => setShowPolicy(!showPolicy)}
              className="text-sm text-rose-600 underline focus:outline-none"
            >
              {showPolicy ? 'Hide Privacy Policy' : 'Show Privacy Policy'}
            </button>

            {showPolicy && (
              <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700">
                Any information you provide while visiting the <strong>www.cii.in</strong> website will be used only by the Confederation of Indian Industry (CII).
                CII will not share your information with any other organization, including its business partners unless you explicitly agree. <br /><br />
                This website may contain links to third-party websites. CII is not responsible for the privacy practices of any linked site or any link contained in a linked site.
              </div>
            )}
          </div>

          {/* Consent */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required />
            Please confirm that you agree to our privacy policy
          </label>

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Lep620rAAAAAMS84AcH1PPQqOitJpumYiLZP1DN"
              onChange={handleCaptchaChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isVerified}
            className={`py-3 rounded-md w-full font-semibold transition-colors ${
              isVerified
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Signup
          </button>

          <div className="text-center text-sm mt-4">
            Already Have an Account?{' '}
            <a href="/login" className="text-rose-600 font-bold">
              Login Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
