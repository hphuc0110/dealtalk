"use client"

import { useState, useEffect } from "react"
import { RefreshCw, User, Users, Shield } from "lucide-react"

export function MethodologySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Xác định mobile hay desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const steps = [
    {
      icon: RefreshCw,
      label: "Học tập thích ứng",
      content:
        "Phương pháp học linh hoạt, thích ứng theo trình độ và mục tiêu cá nhân của học viên.",
    },
    {
      icon: User,
      label: "Luyện tập 1-1",
      content:
        "Huấn luyện viên đồng hành trực tiếp, sửa lỗi và tối ưu kỹ năng giao tiếp cho bạn.",
    },
    {
      icon: Users,
      label: "Framework ứng dụng",
      content:
        "Cấu trúc bài học rõ ràng, áp dụng thực tế ngay trong công việc và cuộc sống.",
    },
    {
      icon: Shield,
      label: "Cẩm nang cá nhân hoá",
      content:
        "Xây dựng bộ tài liệu riêng duy trì phong độ tự tin và chuyên nghiệp.",
    },
  ]

  const handleClick = (index: number) => {
    if (!isMobile) return
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#dbe4f9] to-[#b9c7e8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tiêu đề */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-3">
            Phương Pháp Đào Tạo
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-black/80">
            Tinh gọn - Thực chiến - Cá nhân hóa - Uy tín
          </p>
        </div>

        {/* Các bước */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative 
                         w-full sm:w-[45%] lg:w-[220px] min-h-[180px] p-4 sm:p-0"
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              {/* Icon */}
              <div
                className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#1e3a8a] shadow-md 
                            transition-transform duration-300 hover:scale-110 mb-4 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Label */}
              <span className="text-black font-semibold text-base sm:text-lg leading-snug mb-2">
                {step.label}
              </span>

              {/* Nội dung mobile: click mới hiện */}
              {isMobile && activeIndex === index && (
                <div className="text-sm text-black/70 leading-snug max-w-[280px] animate-fadeInUp">
                  {step.content}
                </div>
              )}

              {/* Nội dung desktop: hover mới hiện */}
              {!isMobile && hoveredIndex === index && (
                <div className="hidden lg:block absolute top-full mt-5 w-64 bg-white text-black text-sm p-4 rounded-xl shadow-lg z-10 animate-fadeInUp">
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
