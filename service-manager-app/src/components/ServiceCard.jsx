export default function ServiceCard({ service }) {
  return (
    <div className="border border-gray-800 bg-black p-6 rounded-lg shadow-md hover:shadow-cyan-400 transition-colors duration-300">
      <img 
        src={service.acf.image} 
        alt={`${service.title.rendered} service image`} 
        className="w-full h-40 object-cover rounded border border-gray-700" 
      />
      <h2 className="text-lg font-bold mt-4 text-cyan-400">
        {service.title.rendered}
      </h2>
      <p className="text-gray-300 mt-2">{service.acf.description}</p>
      <p className="font-semibold mt-3 text-cyan-300">{service.acf.price}</p>
      <p className="text-sm text-gray-500 mt-1">{service.acf.category}</p>
    </div>
  )
}