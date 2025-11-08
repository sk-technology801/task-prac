"use client"
import { useState } from 'react';

export default function SaveBritishForm() {
  const [postcode, setPostcode] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleSearch = () => {
    if (postcode.trim()) {
      alert(`Searching for postcode: ${postcode}`);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Hero Section with Background Image - Takes about 45% of screen */}
      <div 
        className="relative flex-[0_0_45%] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Logo Top Left */}
        <div className="absolute top-4 left-6 z-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-white">Save</span>
            <span className="font-light text-xl text-white">British</span>
          </div>
        </div>

        {/* FAQ Top Right */}
        <div className="absolute top-4 right-6 z-10">
          <button className="text-white text-sm hover:underline">FAQ</button>
        </div>
        
        {/* Hero Text Content - Centered */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-8 z-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-3">
            <span className="italic">Concerned About The Employment Rights Bill?</span>
            {" "}
            <span className="font-normal">Write A Professional And Respectful Email To Your MP</span>
          </h1>
          <p className="text-pink-400 text-2xl font-light italic mt-2">
            In Less Than 1 Minute!
          </p>
        </div>
      </div>

      {/* White Form Card Section - Takes about 35% of screen */}
      <div className="flex-[0_0_35%] flex items-center justify-center px-4 bg-gray-50">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 -mt-12">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <div className="flex-1 h-1 mx-2 bg-gray-200">
                  <div className={`h-full transition-all ${currentStep > 1 ? 'bg-pink-500' : 'bg-gray-200'}`} />
                </div>
              </div>
              <p className="text-xs text-center mt-2 font-medium text-gray-700">Enter Postcode</p>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <div className="flex-1 h-1 mx-2 bg-gray-200">
                  <div className={`h-full transition-all ${currentStep > 2 ? 'bg-pink-500' : 'bg-gray-200'}`} />
                </div>
              </div>
              <p className="text-xs text-center mt-2 font-medium text-gray-700">Enter Details</p>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <div className="flex-1 h-1 mx-2 bg-gray-200">
                  <div className={`h-full transition-all ${currentStep > 3 ? 'bg-pink-500' : 'bg-gray-200'}`} />
                </div>
              </div>
              <p className="text-xs text-center mt-2 font-medium text-gray-700">Select Tone</p>
            </div>

            <div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= 4 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                4
              </div>
              <p className="text-xs text-center mt-2 font-medium text-gray-700">Send Message</p>
            </div>
          </div>

          {/* Form Title */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Enter Your UK Postcode
            </h2>
            <p className="text-sm text-gray-500">
              If you don't know your postcode, look it up on Google
            </p>
          </div>

          {/* Input and Button */}
          <div className="flex gap-3 mb-2">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="XX11 1XX"
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-center text-lg font-semibold tracking-wider"
              maxLength={8}
            />
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-md"
            >
              Search
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className={`w-2 h-2 rounded-full ${currentStep === 1 ? 'bg-pink-500' : 'bg-gray-300'}`} />
            <div className={`w-2 h-2 rounded-full ${currentStep === 2 ? 'bg-pink-500' : 'bg-gray-300'}`} />
          </div>
        </div>
      </div>

      {/* Footer Section - Takes about 20% of screen */}
      <footer className="flex-[0_0_20%] bg-gray-900 text-white flex items-center">
        <div className="w-full max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-bold text-lg mb-2">SaveBritishBusiness</h3>
          <p className="text-gray-400 text-sm mb-1 max-w-2xl mx-auto leading-relaxed">
            At SaveBritishBusiness, you can write a professionally-worded email to your local
            MP, empowering them to represent your concerns in Parliament.
          </p>
          <p className="text-gray-400 text-sm mb-4 max-w-2xl mx-auto">
            Your voice matters – make it clear, professional, and impactful.
          </p>
          <div className="flex justify-center gap-8 text-gray-400 text-sm mb-2">
            <button className="hover:text-white transition-colors">Terms & Conditions</button>
            <button className="hover:text-white transition-colors">Privacy Policy</button>
          </div>
          <p className="text-gray-500 text-xs">
            Developed with ❤️ using AI expertise (Claude) — Not AI-Ads
          </p>
        </div>
      </footer>
    </div>
  );
}