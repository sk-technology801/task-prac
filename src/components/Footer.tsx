// components/Footer.tsx
function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4">SavabritishBusiness</h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At helps you write professional, respectful messages to national or
            local politicians. Reviews, edit, and send them directly to their
            email all from one easy platform. 
          </p>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Links */}
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Term & Conditions
            </a>
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>

          {/* Separator for mobile */}
          <div className="md:hidden border-t border-gray-700 w-full my-2"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center md:text-right">
            All copyrights are reserved by savacrafts/business, made by Dahlin.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
