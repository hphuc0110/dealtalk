import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Tiếng Anh Thuyết Trình Học Thuật – Chìa Khóa Thống Lĩnh Hội Thảo Quốc Tế",
    image: "/images/1.webp",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Nâng Tầm Nghiên Cứu Với Tiếng Anh Thuyết Trình Học Thuật – Sức Mạnh Của Storytelling",
    image: "/images/2.webp",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "7 Tips Vàng Giúp Thuyết Trình Học Thuật Bằng Tiếng Anh Tự Tin Và Thuyết Phục",
    image: "/images/3.webp",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Tất cả
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Phỏng vấn
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Kỹ năng giao tiếp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
