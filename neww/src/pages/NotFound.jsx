import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold text-primary-800 mb-4">
              404
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Sorry, the page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary inline-flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Popular Pages
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/services"
                className="block p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors text-left"
              >
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Our Services
                </h4>
                <p className="text-sm text-neutral-600">
                  Explore our comprehensive dental services
                </p>
              </Link>
              <Link
                to="/appointments"
                className="block p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors text-left"
              >
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Book Appointment
                </h4>
                <p className="text-sm text-neutral-600">
                  Schedule your dental visit
                </p>
              </Link>
              <Link
                to="/team"
                className="block p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors text-left"
              >
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Our Team
                </h4>
                <p className="text-sm text-neutral-600">
                  Meet our expert dental professionals
                </p>
              </Link>
              <Link
                to="/contact"
                className="block p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors text-left"
              >
                <h4 className="font-semibold text-neutral-900 mb-2">
                  Contact Us
                </h4>
                <p className="text-sm text-neutral-600">
                  Get in touch with our team
                </p>
              </Link>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8">
            <p className="text-neutral-600 mb-4">
              Can't find what you're looking for? Try searching our site:
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(555) 123-4567"
                className="text-primary-800 hover:text-primary-900 font-medium"
              >
                Call us: (555) 123-4567
              </a>
              <a
                href="mailto:info@soradental.com"
                className="text-primary-800 hover:text-primary-900 font-medium"
              >
                Email: info@soradental.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
