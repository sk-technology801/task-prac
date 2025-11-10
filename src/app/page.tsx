'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import { MdOutlineArrowCircleLeft } from 'react-icons/md';

type Step = 1 | 2 | 3 | 4;

function Page() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    postcode: '',
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    mpEmail: 'Johndon@gmail.com',
    subject: 'Support needed for small businesses in my area',
    message: `Dear [MP Name],\n\nI hope this message finds you well. I'm writing to share my concerns about the current situation facing small and medium-sized businesses in our area.\n\nMany local entrepreneurs and shop owners are struggling with rising costs, reduced customer spending, and limited access to financial support. These challenges are threatening the livelihoods of hardworking people and the vitality of our local economy.`,
    agreeTerms: false,
    sendCopy: false,
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

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Calculate active line position and width based on current step for mobile
  const getActiveLineStyle = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      // Mobile styles
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
    } else {
      // Desktop styles
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
    }
  };

  const activeLineStyle = getActiveLineStyle();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {currentStep === 1 ? (
        <Header />
      ) : (
        <header className="fixed top-0 left-0 right-0 py-4 px-4 sm:px-6 z-50 bg-transparent">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg md:text-2xl font-bold italic">
              <div className="text-black">
                Save
                <span className="text-cyan-500">British </span>
              </div>
              <div>
                <span className="text-pink-500">Business</span>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content - Centered Card with Stepper */}
      <main
        className={`flex-1 ${
          currentStep === 1
            ? 'absolute right-0 left-0 bottom-10 md:bottom-20 flex items-center justify-center p-4'
            : 'flex items-center justify-center p-4 pt-16 sm:pt-20'
        }`}
      >
        <div className="w-full max-w-4xl mx-auto">
          {/* Centered Card with Stepper */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Step 1: Enter Postcode */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-5">
                  <h2 className="text-xl sm:text-2xl font-bold font-poppins text-gray-800 text-center">
                    Enter Your UK Postcode
                  </h2>
                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    If you don't know can search on Google
                  </p>

                  <div className="flex w-full max-w-lg mx-auto">
                    <input
                      type="text"
                      value={formData.postcode}
                      onChange={(e) =>
                        updateFormData('postcode', e.target.value)
                      }
                      placeholder="XXXX - XXX"
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-l-lg outline-none transition-all text-center text-base sm:text-lg font-bold placeholder:text-center"
                      required
                    />
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#1fa5e4] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-r-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base"
                    >
                      Search
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Enter Details */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Back Arrow */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer duration-200"
                  >
                    <MdOutlineArrowCircleLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                  </button>

                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                    Enter Your Details
                  </h2>

                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    The following details will be used for the application
                    process.
                  </p>

                  {/* MP Contact Details Section */}
                  <div className="bg-pink-100 p-3 sm:p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                      Your MP Contact Details:
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">MP Name: John Smith</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {/* First Name and Last Name in Flex */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            updateFormData('firstName', e.target.value)
                          }
                          placeholder="Enter your first name"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            updateFormData('lastName', e.target.value)
                          }
                          placeholder="Enter your last name"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateFormData('email', e.target.value)
                        }
                        placeholder="your.email@example.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                        required
                      />
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex mx-auto bg-[#5095f0] text-white py-2 sm:py-3 px-6 sm:px-10 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Select Topic */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Back Arrow */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer duration-200"
                  >
                    <MdOutlineArrowCircleLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                  </button>

                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                    Select Topic
                  </h2>

                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    Tell us your issue and what you to to convey housing,
                    education, transport, anything.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Topic Grid */}
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      {[
                        {
                          value: 'Job Security',
                          title: 'Job Security',
                          description: 'Will the bill maintain fair protection for workers?'
                        },
                        {
                          value: 'Workers\' Rights',
                          title: 'Workers\' Rights',
                          description: 'How will it impact rights to fair pay, flexible working, and parental leave?'
                        },
                        {
                          value: 'Small Businesses',
                          title: 'Small Businesses',
                          description: 'What support will small businesses receive to adapt to new requirements?'
                        },
                        {
                          value: 'Employment Rights',
                          title: 'Employment Rights',
                          description: 'Will the bill maintain fair protection for gig economy workers?'
                        },
                        {
                          value: 'Employment Rights Bill',
                          title: 'Employment Rights Bill',
                          description: 'How will it impact rights to fair pay and working conditions?'
                        },
                        {
                          value: 'Other',
                          title: 'Other',
                          description: 'Some details may not match the topic choices or needs of certain sectors'
                        }
                      ].map((topic) => (
                        <label
                          key={topic.value}
                          className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-pink-300 transition-colors cursor-pointer bg-white block"
                        >
                          <div className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              name="topic"
                              value={topic.value}
                              checked={formData.topic === topic.value}
                              onChange={(e) =>
                                updateFormData('topic', e.target.value)
                              }
                              className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 focus:ring-pink-500 rounded border-gray-300 mt-1 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                                {topic.title}
                              </h3>
                              <p className="text-gray-600 mt-1 text-xs sm:text-sm">
                                {topic.description}
                              </p>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex mx-auto bg-[#5095f0] text-white py-2 sm:py-3 px-6 sm:px-10 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Send Message */}
              {currentStep === 4 && (
                <div className="space-y-4 sm:space-y-6">
                  {/* Back Arrow */}
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer duration-200"
                  >
                    <MdOutlineArrowCircleLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                  </button>

                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center">
                    Your Draft Is Ready
                  </h2>

                  <p className="text-gray-600 text-center text-sm sm:text-base">
                    you can make changes by hand according to your need or click
                    <br />
                    regenerate to edit your description for major changes
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    {/* MP Email Field */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        MP Email
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="email"
                          value={formData.mpEmail}
                          onChange={(e) =>
                            updateFormData('mpEmail', e.target.value)
                          }
                          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all bg-gray-50 text-sm sm:text-base"
                          readOnly
                        />
                        <button
                          type="button"
                          className="bg-gray-200 text-gray-700 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            updateFormData('subject', e.target.value)
                          }
                          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                        />
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className="flex-1 bg-pink-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 text-sm sm:text-base"
                          >
                            Regenerate
                          </button>
                          <button
                            type="button"
                            className="flex-1 bg-gray-200 text-gray-700 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 text-sm sm:text-base"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <button
                          type="button"
                          className="bg-pink-500 text-white py-2 px-3 sm:px-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 text-sm whitespace-nowrap"
                        >
                          Regenerate
                        </button>
                      </div>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          updateFormData('message', e.target.value)
                        }
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={(e) =>
                            updateFormData('agreeTerms', e.target.checked)
                          }
                          className="w-4 h-4 text-pink-500 focus:ring-pink-500 rounded border-gray-300 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700 text-sm sm:text-base">
                          I want to be on the petition
                        </span>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.sendCopy}
                          onChange={(e) =>
                            updateFormData('sendCopy', e.target.checked)
                          }
                          className="w-4 h-4 text-pink-500 focus:ring-pink-500 rounded border-gray-300 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700 text-sm sm:text-base">
                          Signal positive processes through our People on what steps are being taken to address these issues
                        </span>
                      </label>
                    </div>

                    {/* Send Email Button */}
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Send Email to Gmail
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Stepper */}
            <div className="mt-8 sm:mt-12">
              <div className="flex justify-between relative overflow-hidden">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="flex flex-col items-center z-10 flex-1"
                  >
                    {/* Step Circle */}
                    <div
                      className={`
                        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold
                        border-2 sm:border-3 md:border-4 shadow-md sm:shadow-lg
                        ${
                          currentStep >= step.number
                            ? 'bg-pink-500 text-white border-pink-500'
                            : 'bg-gray-100 text-pink-500 border-pink-500'
                        }
                        transition-all duration-300 text-sm sm:text-base
                      `}
                    >
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <div
                      className={`
                        mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-center px-1
                        ${
                          currentStep >= step.number
                            ? 'text-pink-500 font-semibold'
                            : 'text-gray-400'
                        }
                      `}
                    >
                      {step.title}
                    </div>
                  </div>
                ))}

                {/* Full Background Line */}
                <div className="absolute top-4 left-8 right-8 sm:top-6 sm:left-20 sm:right-20 h-[3px] sm:h-[4px] bg-gray-200 z-1"></div>

                {/* Active Pink Line */}
                <div
                  className="absolute top-4 sm:top-6 h-[3px] sm:h-[4px] bg-pink-500 z-2 transition-all duration-500 ease-in-out"
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

export default Page;