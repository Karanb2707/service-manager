import { useEffect, useState } from "react"
import ServiceCard from "../components/ServiceCard"

export default function Services() {
  const [services, setServices] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Local JSON Data
  // useEffect(() => { 
  //   fetch("/services.json").then(res=>res.json()).then(setServices) 
  // }, [])

  // const filtered = services.filter(s =>
  //   (s.title.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase())) &&
  //   (category ? s.category === category : true)
  // )

  // Fetch from WordPress REST API
  // useEffect(() => { 
  //   fetch("http://httplocalhost10005.local/wp-json/wp/v2/services")
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // }, [])

  // // Filter services for wordpress
  // const filtered = services.filter(s =>
  //   ((s.title.rendered.toLowerCase().includes(query.toLowerCase())) ||
  //    (s.acf.description.toLowerCase().includes(query.toLowerCase()))) &&
  //   (category ? s.acf.category === category : true)
  // )

  // Fetch from WordPress Prod
  useEffect(() => {
    fetch("https://zealousrake.s2-tastewp.com/wp-json/wp/v2/services?_embed")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch services:", err)
        setLoading(false);
      });
  }, []);

  // Filter services based on search query and category
  const filtered = services.filter(s =>
    ((s.title?.rendered.toLowerCase().includes(query.toLowerCase())) ||
      (s.acf?.description?.toLowerCase().includes(query.toLowerCase()))) &&
    (category ? s.acf?.category === category : true)
  );

  return (
    <div className="min-h-screen bg-black p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-300 mb-6">
          Our Services
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white p-3 rounded-lg flex-1 focus:border-cyan-400 focus:outline-none transition-colors placeholder-gray-400"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full sm:w-auto text-center bg-gray-900 border border-gray-700 text-white p-3 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors appearance-none"
          >
            <option value="">All Categories</option>
            <option value="Massage">Massage</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Wellness">Wellness</option>
          </select>

        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}