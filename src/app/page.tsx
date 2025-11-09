'use client';
import { useState } from 'react';
import Header from '@/components/Header';

type Step = 1 | 2 | 3 | 4;

export default function Page() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    postcode: '',
    details: '',
    topic: '',
    message: '',
  });

  const steps = [
    { number: 1, title: 'Enter Postcode' },
    { number: 2, title: 'Enter Detail' },
    { number: 3, title: 'Select Topic' },
    { number: 4, title: 'Send Message' },
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Calculate active line position and width based on current step
  const getActiveLineStyle = () => {
    const stepCenterOffset = 12.5;
    switch (currentStep) {
      case 1:
        return {
          left: `${stepCenterOffset}%`,
          width: '12%',
        };
      case 2:
        return {
          left: `${stepCenterOffset}%`,
          width: '38%',
        };
      case 3:
        return {
          left: `${stepCenterOffset}%`,
          width: '63%',
        };
      case 4:
        return {
          left: `${stepCenterOffset}%`,
          width: '75%',
        };
      default:
        return {
          left: `${stepCenterOffset}%`,
          width: '17%',
        };
    }
  };

  const activeLineStyle = getActiveLineStyle();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Main Content - Centered Card with Stepper */}
      <main className="flex-1 fixed right-0 left-0 bottom-10 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Centered Card with Stepper */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Enter Postcode */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Enter Your UK Postcode
                  </h2>
                  <p className="text-gray-600 text-center">
                    If you don't know can search on Google
                  </p>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) =>
                        updateFormData('postcode', e.target.value)
                      }
                      placeholder="Enter your postcode..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Search
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Enter Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Enter Your Details
                  </h2>

                  <div className="space-y-4">
                    <textarea
                      value={formData.details}
                      onChange={(e) =>
                        updateFormData('details', e.target.value)
                      }
                      placeholder="Tell us about your concerns..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                      required
                    />

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Select Topic */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Select Topic
                  </h2>

                  <div className="space-y-3">
                    {[
                      'Employment Rights',
                      'Workplace Safety',
                      'Fair Wages',
                      'Other Concerns',
                    ].map((topic) => (
                      <label
                        key={topic}
                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors hover:border-pink-300"
                      >
                        <input
                          type="radio"
                          name="topic"
                          value={topic}
                          checked={formData.topic === topic}
                          onChange={(e) =>
                            updateFormData('topic', e.target.value)
                          }
                          className="w-4 h-4 text-pink-500 focus:ring-pink-500"
                        />
                        <span className="text-gray-700">{topic}</span>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Send Message */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Send Your Message
                  </h2>

                  <div className="space-y-4">
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        updateFormData('message', e.target.value)
                      }
                      placeholder="Write your professional message to MP..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                      required
                    />

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>

            {/* Stepper */}
            <div className="mt-12">
              <div className="flex justify-between relative overflow-hidden">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-center z-10 flex-1"
                  >
                    {/* Step Circle */}
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold
                        border-4 border-white shadow-lg
                        ${
                          currentStep >= step.number
                            ? 'bg-pink-500 border-pink-200'
                            : 'bg-gray-300 border-gray-300'
                        }
                        transition-all duration-300
                      `}
                    >
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <div
                      className={`
                        mt-2 text-sm font-medium text-center px-2
                        ${
                          currentStep >= step.number
                            ? 'text-pink-600 font-semibold'
                            : 'text-gray-400'
                        }
                      `}
                    >
                      {step.title}
                    </div>
                  </div>
                ))}

                {/* Full Background Line */}
                <div className="absolute top-6 left-20 right-20 h-[4px] bg-gray-200 z-1"></div>

                {/* Active Pink Line */}
                <div
                  className="absolute top-6 h-[4px] bg-pink-500 z-2 transition-all duration-500 ease-in-out"
                  style={{
                    left: activeLineStyle.left,
                    width: activeLineStyle.width,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}