function Solutions() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
          Solutions for Every Industry
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Financial Services",
              icon: "💰",
              description: "Streamline transactions and enhance security with our financial solutions.",
              features: ["Payment Processing", "Fraud Detection", "Risk Management"]
            },
            {
              title: "Healthcare",
              icon: "🏥",
              description: "Improve patient care and operational efficiency in healthcare.",
              features: ["Patient Records", "Appointment Scheduling", "Compliance Tools"]
            },
            {
              title: "Manufacturing",
              icon: "🏭",
              description: "Optimize production and supply chain processes.",
              features: ["Inventory Management", "Quality Control", "Production Planning"]
            },
            {
              title: "Retail",
              icon: "🛍️",
              description: "Enhance customer experience and manage inventory efficiently.",
              features: ["POS Systems", "Inventory Tracking", "Customer Analytics"]
            },
            {
              title: "Technology",
              icon: "💻",
              description: "Scale your tech operations with powerful tools.",
              features: ["Cloud Solutions", "API Integration", "DevOps Tools"]
            },
            {
              title: "Education",
              icon: "🎓",
              description: "Transform learning with digital solutions.",
              features: ["LMS Integration", "Student Analytics", "Virtual Classrooms"]
            }
          ].map((solution, index) => (
            <div 
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="card-body">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="card-title text-xl">{solution.title}</h3>
                <p className="text-base-content/70">{solution.description}</p>
                <ul className="mt-4 space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions; 