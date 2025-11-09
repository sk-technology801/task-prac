

import React from 'react'

const Header = () => {
  return (
    <>
      <div className="min-h-screen bg-transparent flex flex-col">
      {/* Header - Fixed with Transparent Background */}
      <header className="fixed top-0 left-0 right-0 py-4 px-6  z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold italic">
            <div className="text-white">Save
               <span className="text-cyan-500">British </span>
              </div> 
            <div>
             
              <span className="text-pink-500">Business</span>
            </div>
          </div>
          <div className="text-base font-bold italic text-white">
            Help
              
          
          </div>
        </div>
      </header>

      {/* Main Content with 50% black and 50% white */}
      <main className="flex flex-col flex-1">
        {/* Top 50% - Black Background */}
        <div className="flex-1 bg-black flex items-center justify-center relative"  style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/e3/cc/ed/e3ccedf25111c258e862058ee4354b70.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
          <p className="text-white text-xl">
             <div className="text-white text-center relative z-10">
                <h1 className="mb-6">
                   <span className="text-[#7ec2f0] text-3xl tracking-wide font-semibold italic">
                     Concerned About The Employment Rights Bill?{' '}
                     <span className="text-[#fcfdfd] text-3xl tracking-wide font-semibold italic">
                       Write
                    </span>{' '}
                   </span>
                   <p className="text-[#fcfdfd] text-3xl font-semibold italic my-1">
                     A Professional And Respectful Email To Your MP
                   </p>
                   <p className="text-[#e90dde] text-3xl font-semibold italic my-1">
                    In Less Than 1 Minute!
                  </p>
                </h1>
              </div>
          </p>
        </div>
        
        {/* Bottom 50% - White Background */}
        <div className="flex-1 bg-white flex items-center justify-center">
          <p className="text-black text-xl"></p>
        </div>
      </main>
    </div> 
    </>
  )
}

export default Header
