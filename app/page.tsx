import { BookOpen, Users, Award, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-5xl font-bold max-w-3xl mx-auto mb-6 dark:text-white">
          Transform Your Learning Experience with Modern Education
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of students mastering new skills through our interactive courses and expert-led instruction.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors">
            Start Learning Free
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-8 py-4 rounded-full text-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
            View Courses
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Why Choose EduMaster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "100+ Courses", description: "From programming to creative arts" },
              { icon: Users, title: "Expert Instructors", description: "Industry professionals & educators" },
              { icon: Award, title: "Certifications", description: "Recognized completion certificates" },
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <feature.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Simple Pricing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "0", features: ["Basic Courses", "Community Support", "Limited Access"] },
              { name: "Pro", price: "29", features: ["All Courses", "Certifications", "1:1 Support", "Projects"], featured: true },
              { name: "Team", price: "99", features: ["Unlimited Seats", "Team Dashboard", "Priority Support", "Custom Content"] },
            ].map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl ${plan.featured ? 'bg-blue-600 dark:bg-blue-800 border-2 border-blue-500' : 'bg-white dark:bg-gray-900'} transition-transform hover:scale-105`}>
                <div className={`mb-6 ${plan.featured ? 'text-white' : 'dark:text-white'}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4">
                    ${plan.price}<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-3 rounded-lg font-medium ${plan.featured ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">EduMaster</h4>
            <p className="text-sm">Empowering learners worldwide through accessible education.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
