import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // For Local json file
  useEffect(() => {
    fetch("/blogs.json")
      .then(res => res.json())
      .then(data => {
        setBlogs(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching blogs:", err)
        setLoading(false)
      })
  }, [])

  const filtered = blogs.filter(b => b.title.toLowerCase().includes(query.toLowerCase()))

  // For Wordpress API
  // useEffect(() => {
  //   fetch("http://httplocalhost10005.local/wp-json/wp/v2/posts?_embed")
  //     .then(res => res.json())
  //     .then(setBlogs)
  // }, [])

  // const filtered = blogs.filter(b =>
  //   b.title.rendered.toLowerCase().includes(query.toLowerCase())
  // )

  // For TasteWP Wordpress API Prod
  // useEffect(() => {
  //   fetch("https://zealousrake.s2-tastewp.com/wp-json/wp/v2/posts?_embed")
  //     .then(res => res.json())
  //     .then(data => {
  //       setBlogs(data)
  //       setLoading(false)
  //     })
  //     .catch(err => {
  //       console.error("Error fetching blogs:", err)
  //       setLoading(false)
  //     })
  // }, [])

  // const filtered = blogs.filter(b =>
  //   b.title.rendered.toLowerCase().includes(query.toLowerCase())
  // )

  return (
    <div className="min-h-screen bg-black p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-cyan-300 mb-6">
          Our Blog
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-white p-3 rounded-lg w-full focus:border-cyan-400 focus:outline-none transition-colors placeholder-gray-400"
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">Loading blogs...</p>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(b => <BlogCard key={b.id} blog={b} />)}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No blog posts found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}