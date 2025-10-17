import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Thời Đại Của Sự Thuyết Phục: Khi Ngôn Ngữ Trở Thành Lợi Thế Cạnh Tranh",
    image: "/images/1.jpg",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Tiếng Anh – Cầu Nối Đưa Doanh Nghiệp Việt Ra Thế Giới",
    image: "/images/2.jpg",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Vai Trò Chiến Lược Của Tiếng Anh Trong Kinh Doanh Toàn Cầu",
    image: "/images/3.jpg",
    category: "Phỏng vấn",
    readTime: "6 phút đọc",
  },
  {
    id: "noi-it-chot-nhieu",
    title: "Nói ít, chốt nhiều – Nghệ thuật đàm phán của người bán hàng hiện đại",
    image: "/images/4.png",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
  {
    id: "pitch-gioi",
    title: "Pitch giỏi không phải nói hay – mà là khiến người nghe tin",
    image: "/images/5.png",
    category: "Phỏng vấn",
    readTime: "8 phút đọc",
  },
  {
    id: "noi-de-chot",
    title: "Nói để chốt – Khi tiếng Anh trở thành ngôn ngữ của doanh nhân toàn cầu",
    image: "/images/6.png",
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
