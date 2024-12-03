function News() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "New Feature Release: AI-Powered Analytics",
              date: "March 15, 2024",
              category: "Product Update",
              image: "https://placehold.co/600x400",
              excerpt: "We're excited to announce our latest feature release featuring AI-powered analytics..."
            },
            {
              title: "CloudSolution Wins Best B2B SaaS Award",
              date: "March 10, 2024",
              category: "Company News",
              image: "https://placehold.co/600x400",
              excerpt: "We're honored to be recognized as the leading B2B SaaS solution provider..."
            },
            {
              title: "Expanding Our Global Presence",
              date: "March 5, 2024",
              category: "Company News",
              image: "https://placehold.co/600x400",
              excerpt: "As part of our international expansion strategy, we're opening new offices in..."
            }
          ].map((news, index) => (
            <div 
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <figure>
                <img src={news.image} alt={news.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center mb-2">
                  <div className="badge badge-primary">{news.category}</div>
                  <div className="text-sm text-base-content/70">{news.date}</div>
                </div>
                <h3 className="card-title">{news.title}</h3>
                <p className="text-base-content/70">{news.excerpt}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-wide">View All News</button>
        </div>
      </div>
    </section>
  );
}

export default News; 