import { Link } from "react-router-dom"

export default function BlogCard({ blog }) {
  return (
    <div className="border border-gray-800 bg-black p-6 rounded-lg shadow-md hover:shadow-cyan-400 transition-colors duration-300">
      <img 
        src={blog.image} 
        alt={blog.title} 
        className="w-full h-40 object-cover rounded border border-gray-700" 
      />
      <h2 className="text-lg font-bold mt-4 text-cyan-400">{blog.title}</h2>
      <p className="text-gray-300 mt-2 mb-4">{blog.excerpt}</p>
      <Link 
        to={`/blogs/${blog.id}`} 
        className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
      >
        Read More →
      </Link>
    </div>
  )
}