export default function BlogDetail({ blog }) {
  return (
    <div className="p-6">
      <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
      <p className="mt-2">{blog.content}</p>
    </div>
  )
}
