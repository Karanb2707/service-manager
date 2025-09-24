import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function BlogDetails() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    fetch(`http://httplocalhost10005.local/wp-json/wp/v2/posts/${id}?_embed`)
      .then(res => res.json())
      .then(setBlog)
  }, [id])

  if (!blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  const image = blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/800x400"

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto p-6 pt-24">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6 font-medium"
        >
          ← Back to Blogs
        </Link>

        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-xl">
          <img
            src={image}
            alt={blog.title.rendered}
            className="w-full h-64 md:h-80 object-cover"
          />

          <div className="p-8">
            <h1
              className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4"
              dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
            />

            <div className="flex items-center gap-4 text-gray-400 text-sm mb-6 border-b border-gray-700 pb-4">
              <span>By Admin</span>
              <span>•</span>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>

            <div
              className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
