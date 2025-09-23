import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import BlogDetail from "../components/BlogDetail"

export default function BlogDetails() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    fetch("/blogs.json").then(res=>res.json()).then(data=>{
      setBlog(data.find(b=>b.id===parseInt(id)))
    })
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

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto p-6 pt-24">
        {/* Back Button */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6 font-medium"
        >
          ← Back to Blogs
        </Link>
        
        {/* Blog Content */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-xl">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-4 text-gray-400 text-sm mb-6 border-b border-gray-700 pb-4">
              <span>By {blog.author || 'Admin'}</span>
              <span>•</span>
              <span>{blog.date || 'Recent'}</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {blog.content || blog.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}