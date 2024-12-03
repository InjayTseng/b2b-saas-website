function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              company: "TechCorp Inc.",
              industry: "Technology",
              challenge: "Needed to scale operations across multiple regions",
              solution: "Implemented our cloud-based management system",
              result: "200% increase in productivity",
              image: "https://placehold.co/600x400"
            },
            {
              company: "HealthCare Plus",
              industry: "Healthcare",
              challenge: "Patient data management inefficiencies",
              solution: "Deployed our healthcare management solution",
              result: "50% reduction in administrative time",
              image: "https://placehold.co/600x400"
            }
          ].map((case_, index) => (
            <div 
              key={index}
              className="card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:rotate-1 hover:scale-105"
            >
              <figure className="lg:w-1/2 overflow-hidden">
                <img src={case_.image} alt={case_.company} className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" />
              </figure>
              <div className="card-body lg:w-1/2">
                <h3 className="card-title text-2xl">{case_.company}</h3>
                <div className="badge badge-primary">{case_.industry}</div>
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="font-semibold">Challenge:</h4>
                    <p className="text-base-content/70">{case_.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Solution:</h4>
                    <p className="text-base-content/70">{case_.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Result:</h4>
                    <p className="text-primary font-bold">{case_.result}</p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases; 