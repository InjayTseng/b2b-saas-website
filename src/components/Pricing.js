function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center">Starter</h3>
              <div className="text-center my-4">
                <p className="text-4xl font-bold">$49</p>
                <p className="text-sm text-base-content/70">per month</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic Features
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  5 Team Members
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  5GB Storage
                </li>
              </ul>
              <div className="card-actions justify-center mt-6">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <div className="badge badge-secondary mx-auto">POPULAR</div>
              <h3 className="card-title justify-center">Professional</h3>
              <div className="text-center my-4">
                <p className="text-4xl font-bold">$99</p>
                <p className="text-sm opacity-70">per month</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced Features
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited Team Members
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  50GB Storage
                </li>
              </ul>
              <div className="card-actions justify-center mt-6">
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title justify-center">Enterprise</h3>
              <div className="text-center my-4">
                <p className="text-4xl font-bold">Custom</p>
                <p className="text-sm text-base-content/70">contact us</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom Features
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited Everything
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Support
                </li>
              </ul>
              <div className="card-actions justify-center mt-6">
                <button className="btn btn-outline btn-primary">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing; 