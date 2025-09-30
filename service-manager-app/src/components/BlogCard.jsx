import { Link } from "react-router-dom"

export default function BlogCard({ blog }) {
  // const image = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/400"
  const image = blog.image;

  return (
    <div className="border border-gray-800 bg-black p-6 rounded-lg shadow-md hover:shadow-cyan-400 transition-colors duration-300">
      <img
        src={image}
        alt={blog.title}
        className="w-full h-40 object-cover rounded border border-gray-700"
      />
      <h2
        className="text-lg font-bold mt-4 text-cyan-400"
        dangerouslySetInnerHTML={{ __html: blog.title }}
      />
      <p
        className="text-gray-300 mt-2 mb-4"
        dangerouslySetInnerHTML={{ __html: blog.excerpt }}
      />
      <Link
        to={`/blogs/${blog.id}`}
        className="text-cyan-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
      >
        Read More →
      </Link>
    </div>
  )
}